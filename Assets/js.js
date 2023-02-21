var timeE1 = document.querySelector(".time");

var mainE1 = document.getElementById("main");

var timeLeft = 75;

var begin = document.getElementById("startQuiz");

var quizContainer = document.getElementById("quiz");

var answerContainer = document.getElementById("answer");

var resultsContainer = document.getElementById("results");

var scoreContainer = document.getElementById("score");

function timer()  {
    var timerInterval = setInterval(function() {
      timeLeft--;
      timeE1.textContent = "Time: " + timeLeft;

      if(timeLeft == 0)  {
        clearInterval(timerInterval);

      sendMessage()
      }      
    }, 1000);
 


    }

    function displayQuestions()  {
      if(timeLeft > 0)
      
    }

  
    begin.addEventListener("click", timer);
    begin.addEventListener("click", displayQuestions);
  
 const quizQuestions = [
  {
    question1:  "Commonly used data types DO NOT include:",
    answers1: {
      1: "1. strings",
      2: "2. booleans",
      3: "3. alerts",
      4: "4. numbers"
    },
    correctAnswer: "3"
  },
  {
    question2: "The condition in an if/else statement is enclosed within _______.",
    answers: {
      1: "1. quotes",
      2: "2. curly brackets",
      3: "3. parentheses",
      4: "4. square brackets"
    },
    correctAnswer: "3"
  },
  {
    question3: "Arrays in JavaScript can be used to store______.",
    answers: {
      1: "1. numbers and strings",
      2: "2. other arrays",
      3: "3. booleans",
      4: "4. all of the above"
    },
    correctAnswer: "4"
  },
  {
    question4: "String values must be enclosed within ____ when being assigned to variables.",
    answers: {
      1: "1. commas",
      2: "2. curly brackets",
      3: "3. quotes",
      4: "4. parentheses"
    },
    correctAnswer: "3"
  },
  {
    question5: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: {
      1: "1. JavaScript",
      2: "2. terminal/bash",
      3: "3. for loops",
      4: "4. console.log"
    },
    correctAnswer: "4"
  }
];
  
  //begin.addEventListener("click", timer);
    function questions(quizQuestions)  {


  }
  //begin.addEventListener("click", timer) {

  
  
  