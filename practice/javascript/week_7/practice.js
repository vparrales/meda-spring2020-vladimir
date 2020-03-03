//property
Math.PI;
Math.SQRT2;

//Method
Math.random(); 

    function random() {

    }


//All falsy in the array
// Data types: numbers, strings, booleans, 
var myArray = [null, undefined, NaN, 0, "", false];

console.log(myArray[3]);

myArray[2] = 100;

console.log(myArray);

myArray[6] = {};

console.log(myArray);

myArray[0] = null;
myArray[1] = null;
myArray[2] = null;

// TODO: convert this into a loop, to empty all existimng items.

// Array push method. argument provided is added to the end of the array. 
//Array.push()

myArray.push("hello there!");

console.log(myArray);

// Array pop method. No argument, removes and RETURNS the last item in the array. 
//Array.pop()

var removedDataPiece = myArray.pop();

console.log(myArray);
console.log(removedDataPiece);

//Array shift method. no argument, removes and RETURNS the first item in the array. 
//Array.shift()

var removedFirstItem = myArray.shift();

console.log(myArray);
console.log(removedFirstItem);

// Array unsfift method, argument provided is added to the start of the array. 
//Array.unshift()

myArray.unshift(1000);
console.log(myArray);

// Array length property. Returns the amount of items in the array in the form of a Number.
//Array.length

console.log( myArray.length);


// Looping through each item of an array and console logging its value.
for (var i = 0; i < myArray.length; i = i + 2) {
    console.log(myArray[i]);
}