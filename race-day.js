let raceNumber = Math.floor(Math.random() * 1000);

let registrationTime = false

const runnerAge = 15

if (runnerAge > 18 && registrationTime === true) {
  raceNumber += 1000
} else if (runnerAge > 18 && registrationTime === false){
  raceNumber += 1000
} else {
  raceNumber += 1000
}

if (runnerAge > 18 && registrationTime === true) {
 console.log(`Your race starts at 9.30 am and your race number is ${raceNumber}`)
} else if (runnerAge > 18 && registrationTime === false) {
 console.log(`Your race starts at 11.00 am and your race number is ${raceNumber}`)
} else if (runnerAge < 18) {
 console.log(`Your race starts at 12.30 pm and your race number is ${raceNumber}`)
}
