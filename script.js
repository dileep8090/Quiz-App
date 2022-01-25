const quizDB =[
    
    {  
        question : " Who invented C++?",
    a: "Dennis Ritchie",
    b: " Ken Thompson",
    c:"Brian Kernighan",
     d: " Bjarne Stroustrup",
     ans : "ans4"        
    },
    {
        question: "What is C++?",
        a: "C++ is an object oriented programming language",
        b: "C++ is a procedural programming language",
        c: "C++ supports both procedural and object oriented programming language",
        d: "C++ is a functional programming language",
        ans : "ans3"
    },
    {
        question : " Which of the following is the correct syntax of including a user defined header files in C++?",
        a: "#include [userdefined]",
        b: " #include “userdefined” ",
        c: "#include <userdefined.h> ",
        d: "#include <userdefined>",
        ans : "ans2"

    },
    {
        question : "Which of the following is used for comments in C++?",
        a: "/* comment */",
        b: " // comment */",
        c: " // comment",
        d: "both // comment or /* comment */ ",
        ans : "ans4"
    },

];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
 
let questionCount = 0;
let score = 0;

const loadQuestion = ()  => {
    const questionList  = quizDB[questionCount];
   question.innerText = questionList.question;
   option1.innerText = questionList.a;
   option2.innerText = questionList.b;
   option3.innerText = questionList.c;
   option4.innerText  = questionList.d;
}
loadQuestion();

const getCheckAnswer = () => {
    let answer;
     answers.forEach((curAnsElem) =>
     {
         if(curAnsElem.checked){
             answer = curAnsElem.id;
         };
         
     });
     return answer;
};


submit.addEventListener('click',() =>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
     
if(checkedAnswer == quizDB[questionCount].ans){
    score++;
}; 
questionCount++;  


if(questionCount < quizDB.length){
    loadQuestion();

}
 else{
     showScore.innerHTML = 
     
     '<h2>You Scored ${score}/${quizDB.length} ✌️</h>'
     '<button class="btn" onclick="location.relaod()" > </button>';
    
     showScore.classList.remove('score')
 }


});

