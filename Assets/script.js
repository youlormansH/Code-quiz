//
var startQuizEl= document.getElementById("start-quiz");
var introDiv= document.getElementById("intro-div");
var questionDiv = document.querySelector(".question-screen");
var answer = document.getElementById("answer");
var question = document.getElementById("question");
var timerEl = document.getElementById("countdown");
var score = document.getElementById("score");
var initials = document.getElementById("initials");
var submit = document.getElementById("submit");
var highscores = document.getElementById("highscores");
var activeStepIndex = 1;
var timeLeft = 150
var timerId;
var games = [];

const theQuestions =[
    {
        question: "The condition in an if/else statement is enclosed within ________.",
        answer: [
            '1: "quotes"',
            '2: "curly brackets"',
            '3: "parenthesis"',
            '4: "square brackets"',
        ],
        correctAnswer: "curly brackets",
    },
    
        {question: "Commonly used data types DO NOT include:",
        answers: [
          '1: "strings"',
          '2: "booleans"',
          '3: "alerts"',
          '4: "numbers"',
        ],
        correctAnswer: "alerts",
    },

    {
        question: "Arrays in JavaScript can be used to store ____________.",
        answers: [
          '1: "numbers and strings"',
          '2: "other arrays"',
          '3: "booleans"',
          '4: "all of the above"',
        ],
        correctAnswer: "all of the above",
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
        correctAnswer: "console.log",
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
        correctAnswer: "quotes",
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
    introDiv.setAttribute("class","hide");
    renderQuestions(theQuestions[0]);
  });
  
  questionDiv.addEventListener("click", function (event) {
    if (activeStepIndex === 5) {
      answer.textContent = "CONGRATULATIONS!  GAME OVER";
      score.textContent = timeLeft;
    } else if (
      event.target.textContent !== question[activeStepIndex - 1].correctAnswer
    ) {
      answer.textContent = " please Try again.";
      timeLeft -= 5;
    } else {
      answer.textContent = "You are correct!";
      console.log(timeLeft);
      activeStepIndex++;
      renderQuestions(question[activeStepIndex - 1]);
    }
  });
  // start quiz function
  function renderQuestions(activeQuestion){
    //question.innerHTML = "";
    question.textContent= activeQuestion.question;



  }
