// Intro to functions

//Example of functions we have used so far. 
console.log();

Math.round();
Math.floor();
Math.ceil();
Math.random();

var currentTime = Date.now().toString();
console.log(currentTime);

// A function that belongs to a class ("library") is called a "Method".

// A variable that belongs to a class ("library") is called a "Property".


function nameOfFunction() {
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");

}

nameOfFunction();

function stringNumberBoolean() {
    console.log("Vladimir");
    console.log(5685);
    console.log(true);
}

stringNumberBoolean();




// Arguments and Parameters go in between the parenthesis

// "hello" is the argument
console.log("hello \n", 100, true);


// text is the parameter (variable) that will accept any data that is given to this function.

function takeDataIn(text1, text2) {
    console.log(text1);
    console.log(text2);
}

takeDataIn("How are you doing?", "Jesser");
takeDataIn("Goodbye!", 1000);


function adder(number1, number2) {

    var sum = number1 + number2;

    console.log("The sum of " + number1 + " and " + number2 + " is " + sum );
}

number1;
adder(4000, 19);