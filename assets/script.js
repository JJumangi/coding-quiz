var interval
var qIndex = 0


const answer = document.getElementById("answ");

const questions = [{
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


let userResult


const starter = document.querySelector("#starter");

starter.addEventListener("click", function () {                   //this will begin game once the button 'start quiz' is clicked
  timer()
  starter.classList.add("hide")
  currentScore()
  nextQuestion()


});

function nextQuestion() {                                               //this will load the next question
  const questionsEl = document.getElementById("quest");
  answer.innerHTML = ""

  var q = questions[qIndex].q
  var a = questions[qIndex].a
  questionsEl.textContent = q
  for (let i = 0; i < a.length; i++) {
    const buttonEl = document.createElement("button")
    buttonEl.textContent = a[i].text
    buttonEl.dataset.correct = a[i].isCorrect
    answer.append(buttonEl)
  }


}

var scoreEl = document.getElementById('score');
var score = 0;

function currentScore() {                                            //this will track and display the current score
  answer.innerHTML = ""

} if (isCorrect = { isCorrect: true }) {
  score = score +=
    scoreEl.textContent = ("Your score is:" + score);

}



var timeEl = document.getElementById('time');
var secondsLeft = 100


function timer() {                                                   //this will track the time left in the game
  inteval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left ";
    if (secondsLeft <= 0) {
      clearInterval(interval)
      alert("You game has run out of time... please try again")
    }
  }, 1000
  )

}
function saveScore() {                                                      //keep working (update local storage )
  var stringify = JSON.stringify(scores)
  localStorage.setItem("score", stringified)

}
console.log(saveScore)
function getScore() {
  var stringedValue = localStorage.getItem(scores)
  if (stringedValue) {


    score = JSON.parse(stringedValue)
  }
}
function answerHandler(event) {                                 //if the user get's an incorrect answer, time will be deducted
  console.log(event.target.dataset.correct)

  if (event.target.dataset.correct === "false") {
    secondsLeft = secondsLeft - 10

  }
  qIndex++
  nextQuestion()



}

function enterInitials() {

}


answer.addEventListener("click", answerHandler)
