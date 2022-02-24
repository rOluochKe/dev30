const testGrade = Math.floor(Math.random() * 100)

if (testGrade >= 0 && testGrade <= 65) {
  console.log("You got an F")
} else if (testGrade > 65 && testGrade <= 70) {
  console.log("You got a D")
} else if (testGrade > 70 && testGrade <= 79) {
  console.log("You got a C")
} else if (testGrade >= 80 && testGrade <= 89) {
  console.log("You got a B")
} else if (testGrade >= 90 && testGrade <= 100) {
  console.log("You got an A")
} else {
  console.log("Sorry!, we did not get your score, re-take the test")
}
