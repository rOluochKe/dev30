const name = "Ray"
const rank = "Private"
const age = 35

if (age < 18) {
  console.log("You are young to join military")
} else if (name === "Rugen" && rank === "Captain") {
  console.log("My name is John Doe, you killed my dad, prepare to die")
} else if (rank === "Captain") {
  console.log(`Aye Aye Captain: ${name}`)
} else if (rank === "Private" && age > 40) {
  console.log(`What have you been doing with your life ${name}`)
} else {
  console.log(`Hello ${rank} ${name}. I cannot wait to celebrate your ${age + 1}th birthday next year`)
}
