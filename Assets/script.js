//
var startQuizEl = document.getElementById("start-quiz");
var introDiv = document.getElementById("intro-div");
var questionDiv = document.querySelector(".question-screen");
var answer = document.getElementById("answer");
var question = document.getElementById("question");
var timerEl = document.getElementById("countdown");
var score = document.getElementById("score");
var initials = document.getElementById("initials");
var submit = document.getElementById("submit");
var highscores = document.getElementById("highscores");
var finishScreenEl = document.querySelector('.quiz-finish-screen')
// var activeStepIndex = 1;
var finalScore = 0;
var timeLeft = 150
var timerId;
var submitInitialEl = document.querySelector('#submit-score')
var userInputEl = document.querySelector('#user-initials')

var games = [];
var index = 0;
var answerFeedbackEl = document.querySelector('.answer-feedback');
var quizScoreEl = document.querySelector('.quiz-score')
const theQuestions = [
  {
    question: "The condition in an if/else statement is enclosed within ________.",
    answers: [
      '1: "quotes"',
      '2: "curly brackets"',
      '3: "parenthesis"',
      '4: "square brackets"',
    ],
    correctAnswer: '2: "curly brackets"',

  },

  {
    question: "Commonly used data types DO NOT include:",
    answers: [
      '1: "strings"',
      '2: "booleans"',
      '3: "alerts"',
      '4: "numbers"',
    ],
    correctAnswer: '3: "alerts"',
  },

  {
    question: "Arrays in JavaScript can be used to store ____________.",
    answers: [
      '1: "numbers and strings"',
      '2: "other arrays"',
      '3: "booleans"',
      '4: "all of the above"',
    ],
    correctAnswer: '4: "all of the above"',
  },

  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      '1: "JavaScript"',
      '2: "terminal/bash"',
      '3: "for loops"',
      '4: "console.log"',
    ],
    correctAnswer: '4: "console.log"',
  },

  {
    question:
      "String values must be enclosed within ______ when being assigned to variables.",
    answers: [
      '1: "commas"',
      '2: "curly brackets"',
      '3: "quotes"',
      '4: "parenthesis"',
    ],
    correctAnswer: '3: "quotes"',
  },
];

function timerTick() {
  timeLeft--;
  timerEl.textContent = `time: ${timeLeft}`;
}
// start time

startQuizEl.addEventListener("click", function () {
  timerId = setInterval(timerTick, 1000);
  timerEl.textContent = `time: ${timeLeft}`;
  questionDiv.removeAttribute("class");
  introDiv.setAttribute("class", "hide");
  renderQuestions();
});

// questionDiv.addEventListener("click", function (event) {
//   console.log(activeStepIndex)
//   if (activeStepIndex === 4) {
//     answer.textContent = "CONGRATULATIONS!  GAME OVER";
//     score.textContent = timeLeft;
//   } else if (
//     event.target.textContent !== theQuestions[activeStepIndex - 1].correctAnswer
//   ) {
//     // answer.textContent = " please Try again.";
//     timeLeft -= 5;
//   } else {
//     console.log(5)
//     answer.textContent = "You are correct!";
//     console.log(timeLeft);
//     activeStepIndex++;
//     renderQuestions(question[activeStepIndex - 1]);
//   }
// });
// start quiz function

function saveScore(){
  var savedScores = JSON.parse(localStorage.getItem('highscores')) || []
  var userInitials = userInputEl.value

  var userData = {initials: userInitials, score:finalScore}
  savedScores.push(userData)

  localStorage.setItem('highscores', JSON.stringify(savedScores))
}

submitInitialEl.addEventListener('click', saveScore)
 
function endQuiz(){
  questionDiv.classList.add('hide')
  finishScreenEl.classList.remove('hide')

  finalScore = timeLeft
  quizScoreEl.innerHTML = `${quizScoreEl.innerHTML} ${finalScore}`

  clearInterval(timerId)
}
 
function renderQuestions (){
  if(index > 4){
    endQuiz()
    return;
  }
 var h2el = document.getElementById("question");
 var oneel = document.getElementById("1");
 var twoel = document.getElementById("2");
 var threeel = document.getElementById("3");
 var fourel = document.getElementById("4");
 h2el.textContent = theQuestions[index].question
 oneel.textContent = theQuestions[index].answers[0];
 twoel.textContent = theQuestions[index].answers[1];
 threeel.textContent = theQuestions[index].answers[2];
 fourel.textContent = theQuestions[index].answers[3];

}
var answersButton = document.querySelectorAll(".answers-button")

for(var i= 0 ;i < answersButton.length;i++) {
  answersButton[i].addEventListener("click",nextQuestions)
}

function clearAnswerFeedback (){
  setTimeout(function(){
    answerFeedbackEl.innerHTML= ''
  },1000)
}

function nextQuestions(){
  if (this.textContent == theQuestions[index].correctAnswer){
    answerFeedbackEl.innerHTML = 'Correct Answer'
    clearAnswerFeedback()
  }
  else{
    answerFeedbackEl.innerHTML = 'Incorrect Answer'
    if(timeLeft <= 5){
      endQuiz()
    }else{
      timeLeft-=5
    }
    
    clearAnswerFeedback()
  }
  index++
  renderQuestions()
}
