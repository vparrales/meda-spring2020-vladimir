// If-Else Statements, conditional statements

// if (condition) {}

if (false) {
    console.log("This code ran if the if statement was true.");
}

console.log("End of script");

// Comparison operators or "comparitors"

// == equal to
// >= greater than or equal
// > greater than
// <= less than or equal
// < less than
// != not equal (should not equal to be true)

 var age = 22;

 if (age >= 21) {
     console.log("Congratz, go get drunk!");
 }


 var password = "abcdef";

 if (password == "abcdef") {
    console.log("Welcome to your profile!");
 }

 var isSleepy = true;

 if (isSleepy) {
     console.log("go home and sleep");
 }

//  if (true = false) {
//     console.log("test!");
//  }

 var test = "1000";

 if (test == 1000) {
     console.log("test!");
 }

 // Type coercion: Forces a datatype to be another datatype.
 // The follow allow type coercion: == >= <= !=

 // These do not allow type coercion: === >== <== !==


// If and Else parts

var sayHello;

if (sayHello) {
    console.log("hello");
} else {
    console.log("goodbye");
}

// Truthy and Falsy values.

// If a variable is holding any of the following it will become a false boolean:

// Undefined is a falsy value
// null is a falsy value
// 0 is a falsy value
//"" empty string is a falsy value
// false is a falsy value

// Truthy values
//"0" the string of 0
// -1 negative numbers

var checkIfTrue = 100;
if (checkIfTrue) {
    console.log("The " + checkIfTrue + "value is truthy");
} else {
    console.log("The " + checkIfTrue + " value is falsy.");
}

// Logical Operators: &&, ||, !

// && both sides must be true.
// || either side must be true.
// ! = if true it becomes false. If false it becomes true.

var firstBool = true;
var secondBool = false;

if (firstBool && secondBool) {
    console.log("This has runned because the condition is true.");
}

if (firstBool || secondBool) {
    //do something
}


// If Else Section, allows you to test something and run other code, if the first question was false.


var level = "hello";
// && says both sides must be true to be a child.
if (level > 0 && level < 18) {
    console.log("You are a child");
// if not a child, but below 0 then you are not botn yet.
} else if (level < 0) {
    console.log("You are an adult or not born yet");
// if not a child, and not born yet, but between level 18 and 112, then you are an adult.
} else if (level >= 18 && level < 112) {
    console.log("You are an adult");
// if you are not any of the previous, then you are dead. 
} else {
    console.log("Thank you for living, come again next time.");
}


// certain order for if statements
// if always comes first. Only one if per if statement.
//else if must come after if. else ifs are potinal
// else must come last. else rre optional. Only one else per if statement.



// multiple logical operators

// all && go first, then || 
// if equal, then left to right.

if (true && false || true || false && true) {

}