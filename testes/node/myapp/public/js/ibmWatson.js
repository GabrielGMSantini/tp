//variável para controlar o contexto do diálogo
var contextDialog = '{}';

function sendMessageToAssistant(){
    //recupera mensagem digitada pelo usuário
    var textMessage = document.chatForm.textMessage.value;
    chat = document.getElementById('chat');

    //na primeira chamada (boas vindas) textMessage é undefined
    //então define como vazio para dar erro na API
    if(textMessage === undefined || textMessage==='')
        textMessage='';
    else
        chat.innerHTML += 'Você --> ' + textMessage + '<br>';
    //limpa o campo input
    document.chatForm.textMessage.value=''; 
    //post para o serviço watsonAssistant
    $.post("/ibmWatson/assistant",
        {text: textMessage,contextDialog},
        //tratamento de sucesso de processamento do post
        function (returnedData,statusRequest){
            //se ocorreu algum erro no processamento da API
            if(returnedData.status === 'ERRO')
                alert(returnedData.data);
            //caso os dados tenham retornado com sucesso
            else{
                //exibe retorno da API e recupera o contexto para o próximo diálogo
                chat.innerHTML += 'Chatbot --> ' + returnedData.data.result.output.text + '<br>';
                contextDialog = JSON.stringify(returnedData.data.result.context);
            }
        }
        
    )  
    //tratamento de erro do post
    .fail(function(returnedData){
        alert('Erro: ' + returnedData.status + ' ' + returnedData.statusText);
    }); 
}
// envia mensagem quano o usuário pressionar enter
$(document).keypress(
    function(event){
        if(event.which == '13') {
            event.preventDefault();
            sendMessageToAssistant();
        }
    }
);

//após carregar todos os recursos da página, faz post para o serviço
//para exibir mensagem de boas vindas do chat
$(document).ready(function(){
    sendMessageToAssistant();
});