console.log("Testing");

// while loop "while (condition) {code block}"

// A loop needs a cojunter so we can track how many times it has loop.
var counter = 0;

//IF counter is less than 10, then...
while (counter < 10) {
    console.log(counter);

    //... console.log hello, and add a 1 to the counter.
    console.log("Hello");
    counter = counter + 1;
}

// do while loop " do { } while ();"

var counter2 = 0;

do {
    console.log("goodbye");
    counter2 = counter2 + 1;

// And then check to see if we do it again.
} while (false);