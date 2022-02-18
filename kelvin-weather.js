// todays forecast
const kelvin = 293

// getting the celsius from kelvin - 273
const celsius = kelvin - 273

// converting celsius to Fahrenheit
const fahrenheit = Math.floor(celsius * (9/5) + 32)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

// convert celsius to the Newton
const newton = Math.floor(celsius * (33/100))

console.log(`The temperature is ${newton} degrees Newton.`)
