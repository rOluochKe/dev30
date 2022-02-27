function getUserChoice(userInput) {
 userInput = userInput.toLowerCase()
 if (userInput === 'rock') {
  return userInput = `Valid choice: ${userInput}`
 } else if (userInput === 'paper') {
  return userInput = `Valid choice: ${userInput}`
 } else if (userInput === 'scissors') {
  return userInput = `Valid choice: ${scissors}`
 } else {
  return userInput = 'Invalid choice, try again!'
 }
}

function getComputerChoice() {
 return Math.floor(Math.random() * 2);
}

function determineWinner(userChoice, computerChoice) {
 if (userChoice === computerChoice) {
  return 'The game is a tie'
 } else if (userChoice === 'rock') {
  return 'The computer won'
 } else if (computerChoice === 'paper') {
  return 'the user won'
 }
}
