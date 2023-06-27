/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
let you = prompt(`Enter your name : `)
let opponent = prompt(`Enter your opponent name : `)


const totalScores = { score: 0, computerScore: 0, playerScore: 0 }
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  const rpsChoice = ['Rock', 'Paper', 'Scissors']
  const randomChoice = Math.floor(Math.random() * 3)
  return rpsChoice[randomChoice]
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0

function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score = 0
  if (playerChoice == computerChoice) {
    score = 0
  }
  else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score += 1
  }
  else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score += 1
  }
  else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score += 1
  }
  else {
    score -= 1
  }

  // All situations where human draws, set `score` to 0


  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here


  // Otherwise human loses (aka set score to -1)


  // return score
  return score

}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, compChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  let resultDiv = document.getElementById('result')
  let handsDiv = document.getElementById('hands')
  let playerScoreDiv = document.getElementById('player-score')
  score = getResult(playerChoice, compChoice)
  if (score < 0) {
    resultDiv.innerText = 'You Lose'
  }
  else if (score == 0) {
    resultDiv.innerText = "It's a tie"
  }
  else {
    resultDiv.innerText = 'You Won'
  }
  handsDiv.innerText = `You:${playerChoice} vs ${opponent}:${compChoice}`
  playerScoreDiv.innerText = `YOU:${totalScores['playerScore']} 
        ${opponent}:${totalScores['computerScore']}`

}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  console.log({ playerChoice })
  let compChoice = getComputerChoice()
  console.log({ compChoice })
  const score = getResult(playerChoice, compChoice)
  console.log({ score })
  if (score > 0) {
    totalScores['playerScore'] += 1
  }
  else if (score < 0) {
    totalScores['computerScore'] += 1
  }
  totalScores['score'] = score
  console.log(totalScores)
  showResult(score, playerChoice, compChoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsButtons = document.querySelectorAll('.rpsButton')


  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument



  // Add a click listener to the end game button that runs the endGame() function on click
  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })
}
const endGameButton = document.getElementById('endGameButton')
endGameButton.onclick = () => endGame(totalScores)
// ** endGame function clears all the text on the DOM **
function endGame(totalScores) {



  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
  playerScoreDiv.innerText = `The Challenge ends \n The Battle score is (${Number(totalScores['playerScore'])} - ${Number(totalScores['computerScore'])})`
  let diff = Number(totalScores['playerScore']) - Number(totalScores['computerScore'])
  handsDiv.innerText = `Your Overall Score is ${diff}`
  console.log(diff)
  if (diff > 0) {
    resultDiv.innerText = ` ${you} wins ${opponent} `
  }
  else {
    resultDiv.innerText = `${opponent} defeats ${you}`
  }

  totalScores['playerScore'] = 0
  totalScores['computerScore'] = 0


}

playGame()