// todays forecast
const kelvin = 273

// getting the celsius from kelvin - 273
const celsius = kelvin - 273

// converting celsius to Fahrenheit
let fahrenheit = Math.floor(celsius * (9/5) + 32)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

// convert celsius to the Newton
let newton = Math.floor(celsius * (33/100))

console.log(`The temperature is ${newton} in Newton.`)
