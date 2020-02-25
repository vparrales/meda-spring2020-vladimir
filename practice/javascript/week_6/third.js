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