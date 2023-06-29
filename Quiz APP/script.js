const quizDB=[
    {
        question:"Q1: What is the full form of HTML?",
        a:"Hello To My Land",
        b:"HyperText Markup Language",
        c:"HyperText Makeup Language",
        d:"HellooText Markup Language",
        ans:"ans2"
    },
    {
        question:"Q2: What is the syantax of paragraph in HTML?",
        a:"<p>",
        b:"<p></p>",
        c:"</p><p>",
        d:"<?",
        ans:"ans2"
    },
    {
        question:"Q3: What is the full form of CSS?",
        a:"Cascading StyleSheet",
        b:"Cone StyleSheet",
        c:"Cylindrical StyleSheet",
        d:"Cat StrretS",
        ans:"ans1"
    },
    {
        question:"Q4: What is the full form of WWW?",
        a:"Water Watch Wide",
        b:"World Water Web",
        c:"World Wide Web",
        d:"Web World Wide",
        ans:"ans3"
    }
];
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');
let questionCount=0;
let score=0;
const loadQuestion =() =>{
    const questionList=quizDB[questionCount];

    question.innerText=questionList.question;
    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;


} 
loadQuestion();

const getCheckAnswer=()=>{
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
        
    });
    return answer;
};


submit.addEventListener('click',()=>{
    const checkedAnswer=getCheckAnswer();
    if(checkedAnswer===quizDB[questionCount].ans){
        score++;
    };
    questionCount++;

    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML=`
        <h3> You scored ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        
        
        `;
        showScore.classList.remove('scoreArea');

    }


});