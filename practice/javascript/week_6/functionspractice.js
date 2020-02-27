// Concatenation example
"a word" + "gabe";
"a number" + 100;
console.log("hello" + true);
console.log(100 + "a number");
console.log(100 + 100 + 100 + "hello");
console.log("hello" + 100 + 100 + 100);

function sentenceBuilder(person, place, action, item) {
    var firstPart = " went to ";
    var secondPart = ", and ";
    var thirdPart = " but there was a problem, ";
    var fourthPart = "it did not work.";

    var completeSentece = person + firstPart + place + secondPart + action + thirdPart + item + fourthPart;

    console.log(completeSentece);
}

sentenceBuilder("Gabe", "Happy Donut", "fought with the store owner", "the fists");

sentenceBuilder("Eduardo", "happy donut", "fought the store owner", " he stole a Baker dozen and road his bike out, ");
"_______ went to the _____, and did _____ but there was a problem, _____ did not work.";




function getNumber() {
    var theSpecialNumber = 42;

    return theSpecialNumber;
}

console.log(getNumber());

var newNumber = getNumber() + 100; 

console.log(newNumber);

var results = getNumber() / 50;

console.log( results);







function getName() {
    var firstName = "Eduardo";


    return firstName;
}

console.log( getName() + " is a person.");