const questions = [
    {
        question: "Qual é o nome do computador com mais destaque na primeira geração?",
        answer: [
            { text: "Mark I", correct: false },
            { text: "ENIAC", correct: true },
            { text: "Model 5150", correct: false },
            { text: "The Apple III", correct: false },
            { text: "Kenbak-1", correct: false },
        ]
    },
    {
        question: "Qual dessas alternativas NÃO faz parte da 1 geração?",
        answer: [
            { text: "Programação através de fios", correct: false },
            { text: "Utilização de Válvulas", correct: false },
            { text: "Uso da Linguagem de máquina", correct: false },
            { text: "Introdução do periférico como o Mouse", correct: true },
            { text: "Alto consumo de energia ", correct: false },
        ]
    },
    {
        question: "Qual dessas alternativas faz parte da 2 geração?",
        answer: [
            { text: "Surgimento dos Transistores ", correct: true },
            { text: "Surgimento do DOS", correct: false },
            { text: "Surgimento da Internet", correct: false },
            { text: "Uso de IA" , correct: false },
            { text: "Programação por meio de fios", correct: false },
        ]
    },
    {
        question: "Qual dessas alternativas faz parte da 3 geração?",
        answer: [
            { text: "Uso da linguagem de Maquina", correct: false },
            { text: "Surgimento do C++", correct: false },
            { text: "Surgimento de circuitos integrados", correct: true },
            { text: "Uso do DOS", correct: false },
            { text: "Introdução de cartões furados", correct: false },
        ]
    },
    {
        question: "Qual alternativa NÃO é parte da 5 geração?",
        answer: [
            { text: "Surgimento dos PCs", correct: false },
            { text: "Arquiteturas Paralela", correct: false },
            { text: "Surgimento da Internet", correct: true },
            { text: "Sistemas Operacionais de Interface Gráfica", correct: false },
            { text: "Incorporação com IAs", correct: false },
        ]
    },
    {
        question: "Qual foi a Criação que fez George boole ser conhecido?",
        answer: [
            { text: "Álgebra booleana", correct: true },
            { text: "Física quântica", correct: false },
            { text: "Teoria da gravidade", correct: false },
            { text: "Maquina pascalina", correct: false },
            { text: "Máquina de Turing", correct: false },
        ]
    },
    {
        question: "Quem foi Gottfried Leibniz?",
        answer: [
            { text: "um Físico Inglês", correct: false },
            { text: "um Inventor Italiano", correct: false },
            { text: "um filosofo Francês ", correct: false },
            { text: "um Matemático Alemão", correct: true },
            { text: "um Engenheiro Polonês", correct: false },
        ]
    },
    {
        question: "Augusta Ada Byron, conhecida como Ada Lovelace é reconhecida por escrever o primeiro alogoritmo, processada pela maquina analítica, desenvolvida por: ",
        answer: [
        { text: "Charles Babbage", correct: true },
            { text: "Gottfried Leibniz", correct: false },
            { text: "George Boole", correct: false },
            { text: "Jermann Hollerith", correct: false },
            { text: "Allan Touring", correct: false },
        ]
    },
    {
        question: "Quem é considerado o pai da computação?",
        answer: [
            { text: "Bill Gates", correct: false },
            { text: "Alan Turing", correct: false },
            { text: "Charles Babbage", correct: true },
            { text: "Tim Berners-Lee", correct: false },
            { text: "Steve Jobs", correct: false },
        ]
    },
    {
        question: "Qual foi o primeiro sistema operacional amplamente utilizado em computadores pessoais?",
        answer: [
            { text: "MS-DOS", correct: true },
            { text: "MacOS", correct: false },
            { text: "UNIX", correct: false },
            { text: "Windows 95", correct: false },
            { text: "Linux", correct: false },
        ]
    }
];

const questionElement = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-buttons");
const nextButton = document.querySelector("#next-btn");

let currentQuestionIndex = 0;
let score = 0; 

function iniciarQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima pergunta";
    mostrarQuestao();
}

function mostrarQuestao(){
    resetarQuestao();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        button.addEventListener("click", selecionarAlternativa);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
    });

}

function resetarQuestao(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    };
}

function selecionarAlternativa(Event){
    const answerClicked = Event.target;
    const isCorrect = answerClicked.dataset.correct === "true";
    if(isCorrect){
        answerClicked.classList.add("correct");
        score++;
    }
    else{
        answerClicked.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled= true;
        });
        nextButton.style.display = "block";
}

function mostarResultado(){
    resetarQuestao();
    questionElement.innerHTML = "Você acertou " + score +  " de " + questions.length + "!"
    nextButton.innerHTML = "Jogar novamente"
    nextButton.style.display = "block"
}

function butaoProximaPergunta(){
    currentQuestionIndex++; 
    if(currentQuestionIndex < questions.length){
        mostrarQuestao();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        butaoProximaPergunta();
    }else{
        iniciarQuiz();
    }
    });

iniciarQuiz();