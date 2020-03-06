const fs = require("fs");
var arguments = process.argv;

//console.log("Contents of process.argv: ", arguments);


function wordCount(testText) {
    var textArray = testText.split(" ");
    //console.log(textArray);
    console.log("The text has a total of " + textArray.length + " word(s) in it.");
}

function charCount(testText) {
    var textArray = testText.split(" ");
    //console.log(textArray);
    console.log("The text has a total of " + textArray.length + " character(s) in it.");
}

var textToTest = process.argv[4];
var mode = process.argv[2];
var type = process.argv[3];

if (type == "text" || type == "txt") {

    if (mode == "words" || mode == "word" || mode == "Word" || mode == "Words") {
        wordCount(textToTest);
    } else if (mode == "character") {
        charCount(textToTest);
    } else {
        console.log("The only options for this program is 'words' or 'characters' for the second argument.");
    }
    

} else if (type == "file") {

    // NOde function to read files.
    // This fuction returns a string of the contents of the file you read.
    // fs.readFileSync("filepath to file", "utf8");

    var text = fs.readFileSync("textToTest.txt", "utf8");

    if (mode == "words" || mode == "word" || mode == "Word" || mode == "Words") {
        wordCount(text);
    } else if (mode == "character") {
        charCount(text);
    } else {
        console.log("The only options for this program is 'words' or 'characters' for the second argument.");
    }

} else {
    console.log("Welcome to paragraph reader.\n You can load in a string or file and test for the amout of words or characters.\n Example for loading a file and testing for words:\n 'node preader.js words file filetotest.txt' Another example for strings testing characters:\n node preader.js characters text 'text to test'");
    console.log("The type of data can only be 'text' or 'file'.");
}








