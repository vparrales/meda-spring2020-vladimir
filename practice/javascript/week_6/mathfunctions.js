function adder(num1, num2) {
    return num1 + num2;
}

console.log( adder(100, "Tony"));

/* 
1) 100 and Tony get sent to the Adder function. 
2) Adder function runs, and places 100 and Tony, into num1 and num2.
3) Before we can return a value, we need to add/ concatenate, We call num1 and num2 variables for tis values, and then add/concatente them together. 
4) The return keyword says that we will return this single value back to wheeever the fuction was called. 
5) The adder function has returned "100Tony" as a single string and is replaced by that value. 
6) Because this value is inside of the console.logarguments area, it will be sent off to the console.log fuction.
*/




function taxCalculator(itemPrice) {
    var tax = itemPrice * .085;
    var taxedFixedToTwoDecimalPlaces = tax.toFixed(2);
    var taxNumber = parseInt(taxedFixedToTwoDecimalPlaces);

    return taxedFixedToTwoDecimalPlaces;
}

var laptopPrice = 699.95;
var laptopTax = taxCalculator(laptopPrice);

console.log("Price of item: " + laptopPrice + ". Tax on item: " + laptopTax + ". Total Cost: $" + (laptopPrice + laptopTax) + ".");



// Create a function called mathifier

// This fuction wiil take two Numbers

// With these two numbers, you will add them, then add the sum to the first number, and then multiply that by the second number.

// The function will return the result.

function mathifier(num1, num2) {
    var sum = num1 + num2;
    var sum2 = (sum + num1);
    var product = (sum2 * num2);
    return product;
}



console.log(mathifier(2, 4));

function mathifier(num1, num2) {
    var sum = num1 + num2;

    var sum2 = sum + num1;

    var product = sum2 * num2;

    return product;
}

console.log(mathifier(2, 4));


//This function will be called mathResults
//This function will take only 2 numbers
//This function wll console.log each of the following:
//The difference of these two numbers.
//The product of these two numbers.
//The dividend of these two numbers.
//The leftovers of these two numbers. (modulo)

function mathResults(num1, num2) {
    console.log("The sum of " + "num1 and num2 is: " + (num1 + num2) );
    console.log("The difference of " + "num1 and num2 is: " + (num1 - num2) );
    console.log("The product of " + "num1 and num2 is: " + (num1 * num2));
    console.log("The dividend of " + "num1 and num2 is: " + (num1 / num2));
    console.log("The remainder of " + "num1 and num2 is: " + (num1 % num2));
}

mathResults(2, 4);

mathResults(300, 699);

mathResults(600, 399);