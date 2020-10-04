var q = questoes;
var selectedQuestion;
var questionsDone=0;
var totalQuestions=10;
var score = 0;
function nextQuestion(){
    selectedQuestion=Math.floor(Math.random()*(totalQuestions-questionsDone))%(totalQuestions-questionsDone);
    document.getElementById("imagem").src = q[selectedQuestion].imagem ;
    for(let i=1;i<5;i++){
        document.getElementById("opção"+i.toString()).innerText = q[selectedQuestion].opcoes[i-1];
    }
}

function validate(opcao){
    let escolhida = document.getElementById("opção"+opcao.toString()).innerText;
    if(escolhida == q[selectedQuestion].resposta_correta){
        score++;
        document.getElementById("score").innerText = score.toString();
    }
    for(let i = selectedQuestion;i<totalQuestions-questionsDone;i++){
        q[i] = q[i+1];
    }
    questionsDone++;
    if(questionsDone < totalQuestions){
        console.log(questionsDone);
        nextQuestion();
    }
    else{
        document.getElementById("container").innerHTML = "";
        let tex = document.createElement("div");
        tex.textContent = "Your score is: " + score.toString()
        tex.style = "text-align: center; margin-Top:50vh; color:white";
        document.getElementById("container").appendChild(tex);
        let but = document.createElement("div");
        but.className = "btn w-50";
        but.textContent = "Clique aqui para reiniciar o jogo";
        but.style = "background-color: skyblue; margin-bottom: 0.5em; margin-left: 25%; margin-right: 25%";
        but.addEventListener("click",reload,false);
        document.getElementById("container").appendChild(but);
    }
}

function reload(){
    location.reload();
}