function confirmClear(){ //confirma se deseja limpar o formulário
    let opcao = confirm("Tem certeza que deseja limpar o formulário?");
    if(opcao==true){
        document.formulario.reset();
    }
}

function send(){//realiza as verificações necessárias
    if(document.formulario.nome.value.length<=3){
        document.formulario.nome.value="";
        alert("O nome deve conter mais que 3 caracteres!");
    }
    else{
        document.formulario.nome.value=document.formulario.nome.value.toUpperCase();
    }
    
    try {
        document.getElementById("EC").removeChild(document.getElementById("span"));
    } catch (error) {
        
    }
    if(document.formulario.estadocivil.value == "Selecione o estado civil"){
        let span=document.createElement("span");
        span.textContent="Selecione um estado civil válido!";
        span.style.color='red';
        span.style.fontFamily='Arial';
        span.style.fontSize="small";
        span.id="span";
        document.getElementById("EC").appendChild(span);
    }
    document.formulario.Objetivo.value = document.formulario.Objetivo.value.toLowerCase();
    let CEPval;
    CEPval=Boolean(document.formulario.CEP.value.match(document.formulario.CEP.pattern));
    let stateval;
    stateval=Boolean(document.formulario.State.value.match(document.formulario.State.pattern));
    let emtel;
    emtel=Boolean(document.formulario.tel.value.match(document.formulario.tel.pattern)||document.formulario.email.value.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i));
    let levels;
    if(document.formulario.English.value!="Nivel"&&document.formulario.Spanish.value!="Nivel"){
        levels=true;
    }
    else{
        levels=false;
    }
    let checkedn=0;
    for(let i=0;i<document.formulario.PL.length;i++){
        if(document.formulario.PL[i].checked)
            checkedn++;
    }
    var opcao=true;
    if(checkedn==0){
        opcao = confirm("Você tem certeza que deseja enviar o formulário desta forma?");
    }
    if(emtel&&opcao&&levels&&document.formulario.estadocivil.value != "Selecione o estado civil"&&document.formulario.nome.value.length>3 && document.formulario.Objetivo.value!="" && CEPval && stateval && document.formulario.City != ""){
        document.formulario.submit();
    }
}