var questions = [{
  question1: "1. What is the proper way to spell the value of an array thats only text?",
  choices: ["Bullien", "Boolean" , "Boolian;" , "Bullean;"],
  correctAnswer: 1
}, {
  question2: "2. When referencing an array, which equals option 3?",
  choices: ["1", "2", "3", "4"],
  correctAnswer: 3
}, {
  question3: "3. Where does Logans nickname origibate?",
  choices: ["Cheers", "Fraiser", "MASH", "Seinfeld"],
  correctAnswer: 2
}, {
  question4: "4. Which is the proper way to syntax  a var?",
  choices: ["questionAnswer", "QuestionAnswer", "Questionanswer", "questionanswer"],
  correctAnswer: 0
}]

// Selects element by id
var timerElement = document.querySelector('timer');
var startButton = document.querySelector('startButton');
var questionCurrent = document.querySelector('questionCurrent');
var timeLeft =90;
var scoreCounter =0;
var currentQuestion = [];
var buttonEl1 = document.querySelector('#button1');
var buttonEl2 = document.querySelector('#button2');
var buttonEl3 = document.querySelector('#button3');
var buttonEl4 = document.querySelector('#button4');

var count = 10;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    alert("You're out of time!");
  }
}, 1000);

buttonEl1.addEventListener("click",function(){
  checkAnswer(0)
})
buttonEl2.addEventListener("click",function(){
  checkAnswer(1)
})
buttonEl3.addEventListener("click",function(){
  checkAnswer(2)
})
buttonEl4.addEventListener("click",function(){
  checkAnswer(3)
})

function startTimer() {
  document.getElementById(`launchScreen`).style.display = "Null";
  document.getElementById('questionCard').style.display = "";
}
timer = setInterval(function() {
  timer--;
  console.log(timer)
  timerElement.textContent = timer;
}
, 1000);
promptQuestions();


