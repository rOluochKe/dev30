function getUserChoice(userInput) {
 userInput = userInput.toLowerCase()
 if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
  return userInput
 } else {
  return userInput = `Invalid choice, ${userInput}, try again!`
 }
}

function getComputerChoice() {
 const randomNumber =  Math.floor(Math.random() * 3);
 
 if (randomNumber === 0) {
  return 'rock'
 } else if (randomNumber === 1) {
  return 'paper'
 } else if (randomNumber === 2) {
  return 'scissors'
 }
}

function determineWinner(userChoice, computerChoice) {
 if (userChoice === 'bomb') {
  return 'The user won!'
 }
 
 if (userChoice === computerChoice) {
  return 'The game is a tie!'
 } 
 
 if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
   return 'The computer won!'
  }
  
  if (computerChoice === 'scissors') {
   return 'The user won!'
  }
 } 
 
  if (userChoice === 'paper') {
   if (computerChoice === 'scissors') {
    return 'The computer won!'
   }
   
   if (computerChoice === 'rock') {
    return 'The user won!'
   }
  }
  
  if (userChoice === 'scissors') {
   if (computerChoice === 'rock') {
    return 'The computer won!'
   }
   
   if (computerChoice === 'paper') {
    return 'The user won!'
   }
  }

}

function playGame() {
 const userChoice = getUserChoice('scissors')
 const computerChoice = getComputerChoice()
 
 console.log(`User choice is ${userChoice}`)
 console.log(`Computer choice is ${computerChoice}`)
 
 console.log(determineWinner(userChoice, computerChoice))
}

playGame()
