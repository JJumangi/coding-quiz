const answer = document.getElementById("answ");
const starter = document.querySelector("#starter");
var scoreEl = document.getElementById('score');
var timeEl = document.getElementById('time');
const questionsEl = document.getElementById("quest");
const mainContainer = document.getElementById("main-container");
var interval
var qIndex = 0
var score = 0;
let userResult
var secondsLeft = 30
var q;
var a;
var scoresArray = JSON.parse(localStorage.getItem("savedScores")) || [];

const questions = [
  {
    q: "What is does HTML stand for?",
    a: [{ text: "Houston Texas Mountain Leauge", isCorrect: false },
    { text: "Hyper Timid Mighty Lakes", isCorrect: false },
    { text: "Hyper Text Markup Language", isCorrect: true },
    { text: "Hypar Taxt Merkup Lenguega", isCorrect: false },
    ]
  },
  {
    q: "What does CSS stand for?",
    a: [{ text: "California Standard Style", isCorrect: false },
    { text: "Coool Style Standards", isCorrect: false },
    { text: "Clairvoyant Spectators Supreme", isCorrect: false },
    { text: "Cascading Style Sheets", isCorrect: true },
    ]
  },
  {
    q: "Which came first? Java or JavaScript?",
    a: [{ text: "Java", isCorrect: true },
    { text: "JavaScript", isCorrect: false },
    { text: "Neither, the are the exact same age", isCorrect: false },
    ]
  }
]
var inputEl;
function showGameOverEl() {
  mainContainer.innerHTML = ""
  inputEl = document.createElement("input");
  var btnEl = document.createElement("button");
  var ulEl = document.createElement("ul");
  btnEl.innerHTML = "Add Initials";
  inputEl.classList.add("inputInitialsStyle");
  btnEl.classList.add("btnInitialsStyle");
  btnEl.addEventListener('click', addUserScoreToLocal)
  for (let i = 0; i < scoresArray.length; i++) {
    var liEl = document.createElement("li");
    liEl.textContent = `Initials: ${scoresArray[i].userInitials}, Scores: ${scoresArray[i].userScore}`;
    ulEl.appendChild(liEl)
  }
  mainContainer.append(inputEl);
  mainContainer.append(btnEl);
  mainContainer.append(ulEl)
}
function addUserScoreToLocal() {
  // get the user current user score and initials and save to object
  var userInitials = inputEl.value;
  var userScore = score;
  var userObject = {
    userInitials,
    userScore
  }
  scoresArray.push(userObject);
  localStorage.setItem("savedScores", JSON.stringify(scoresArray))
}
//this will load the next question
function nextQuestion() {
  answer.innerHTML = ""
  if (qIndex > questions.length - 1) {
    showGameOverEl();
    clearInterval(interval)
    timeEl.textContent = '0';
    return null;
  }
  q = questions[qIndex].q
  a = questions[qIndex].a
  questionsEl.textContent = q
  for (let i = 0; i < a.length; i++) {
    const buttonEl = document.createElement("button")
    buttonEl.textContent = a[i].text
    buttonEl.dataset.correct = a[i].isCorrect
    answer.append(buttonEl)
  }
}

function timer() {                                                   //this will track the time left in the game
  interval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left ";
    if (secondsLeft <= 0) {
      clearInterval(interval)
      timeEl.textContent = '0';
      alert("You game has run out of time... please refresh the page to try again")
      //allow for user to save score thus far
    }
  }, 1000
  )
}
//if the user get's an incorrect answer, time will be deducted
function answerHandler(event) {
  console.log(event.target.dataset.correct)

  if (event.target.dataset.correct === "false") {
    secondsLeft = secondsLeft - 10;
  } else {
    score += 1; // score = score + 1
  }

  qIndex++;
  scoreEl.textContent = "Your score is " + score + " .";
  nextQuestion()
}

answer.addEventListener("click", answerHandler)
starter.addEventListener("click", function () {                   //this will begin game once the button 'start quiz' is clicked
  timer()
  starter.classList.add("hide")
  //currentScore()
  nextQuestion()
});
