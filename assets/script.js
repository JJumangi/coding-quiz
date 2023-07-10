var interval
const answer = document.getElementById("answ");

const questions = [{
  q: "What is does HTML stand for?",
  a: [{ text: "Houston Texas Mountain Leauge", isCorrect: false },
  { text: "Hyper Timid Mighty Lakes", isCorrect: false },
  { text: "Hyper Text Markup Language", isCorrect: true },
  { text: "Hyper Text Markup Language", isCorrect: false },
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

var qIndex = 0

let score = 0
const starter = document.querySelector("#starter");

starter.addEventListener("click", function () {
  timer()
  starter.classList.add("hide")
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


function currentScore() {                                            //this will track and display the current score
  let score = document.getElementById("score");
  answer.innerHTML = ""

  if (isCorrect = true) {                                           //working***
    score++

  } else score--
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

function answerHandler(event) {
  console.log(event.target.dataset.correct)

  if (event.target.dataset.correct === "false") {
    secondsLeft = secondsLeft - 10

  }
  qIndex++
  nextQuestion()

}


answer.addEventListener("click", answerHandler) 