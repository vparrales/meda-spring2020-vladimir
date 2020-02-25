// Variables Intro

//Defining a variable with the name x.
var x;

x ="Hello";

console.log(x);

var usersAge;
var usersAddress;

//Don't write like this.
var thisclassissomewhatokay;

//This is camel case, most popular.
var thisClassIsSomewhatOkay;

//This is snake case, second most popular, especially Python.
var this_class_is_somewhat_okay;

thisClassIsSomewhatOkay = 100;
console.log(thisClassIsSomewhatOkay);

// Single Line Comment

/* Multi 
Line 
Comment
*/

var studentName;

studentName = "Vladimir";

console.log(studentName);

//Assining a value to a varialbe named myNewVar.
myNewVar = "Hello";

console.log(myNewVar);

var coolVar = 1000;

console.log("coolVar is holding " + coolVar + " on line 43");
//Variables can only hold one value, previous value will be overwritten.
coolVar = 2000;


console.log(coolVar);

//Calling a variable coolVar, and taking its value and passing it to console.log, which will send it to the console.
var addedCart = "hello " + ( 1000 + 50 );
var otherCart = "hello " + 1000 + 50;


//You can define and assign a variable on the same line. 
//The order of values will dctate whether we add or concatenate for the plus symbol.
var added = "hello" + 1000;

//Make sure to spell your variable calls correctly, otherwise...
console.log(added);