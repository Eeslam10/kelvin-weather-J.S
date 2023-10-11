// declaring the kelvin variable
let kelvin = 0;

//subtract 273 from kelvin
let celcius = kelvin - 273;

// using this equation to calculate fahrenheit
let fahrenheit = celcius * (9/5) + 32;

// using the Math object (.floor()) to round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert celsius to the Newton scale using the equation below
Newton = celcius * (33 / 100);

Newton = Math.floor(Newton);

console.log(Newton);