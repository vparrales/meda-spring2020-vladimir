// Equal sign, everything on the right side always happens first.
var sum = 1000 + 50;

var product = 50 * 50;

var dividend = 20 / 10;

var difference = 100 -10;

// When using variable names on the right side of the equal sign, 
// you are calling for value and then you are running the poerators, 
// and finally you are storing the final alue into the variable total.

var total = product + sum;

console.log(total);

//Looked at the built-in Math library of JavaScript.
var radius = 40;

var diameterOfCircle = 2 * radius;
//We used Math.PI
var perimeterOfCircle = Math.PI * diameterOfCircle;

console.log("The diameter of the circle with a radius of " + radius + " is " + 
diameterOfCircle + ". The perimeter of the circle is "+ perimeterOfCircle);

//Rounds to the nearest whole number.

Math.round(3.14);

var rounded = Math.round(3.14);

console.log(rounded);

// or you can do this

console.log(Math.round(3.14));

//Round up
var roundedUp = Math.ceil(45.1);

//Round down

var roundedDown = Math.floor(45.9);

//Math.random() returns a value between 0 and .9infinity
// We add a 1 so minimum is now 1, and we multiply 1000 so maximum is 1000.9
var someNumber = (Math.random() * 1000) + 1;

//We floor the ramdom number so decimals are removed.
var roundedRandomNumber = Math.floor(someNumber);

// or use the existing variable:
// someNumber = Math.floor(someNumber);

//Print random number.
console.log (roundedRandomNumber);

//Declaring multiple variables
var variableA, variableB,

//Declaring multiple variables as well as initializing values.
var variable1 = "10", variable2 = 100, variable3 = true;

console.log(variable2);

// Calling before Defining is not a good practice it will cause a bug
console.log(howAreYou);
var howAreYou = "Hello";
// You will get undefined

// We reassing the howAreYou value to 100, then we call howAreYou for it's value and assign that to coolVariable.
var coolVariable = howAreYou = 100;
console.log(coolVariable);

variable1 = coolVariable * 10;

console.log(variable1);