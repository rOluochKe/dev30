const input = "Building whale talk"
const vowels = ['a', 'e', 'i', 'o', 'u']

let resultArray = []

for (let i = 0; i < input.length; i++) {
 const letter = input[i].toLowerCase()
 
 if (letter === "e" || letter === "u") {
  resultArray.push[letter]
 }
 
 for (let j = 0; j < vowels.length; j++) {
  const vowel = vowels[j]
  
  if (letter === vowel) {
   resultArray.push[letter]
  }
 }
}

const result = resultArray.join('').toUpperCase()

console.log(result)
