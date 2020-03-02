var counter = 0;

while (10 > counter) {
    // code to run per loop.
    counter = counter + 1;
    console.log(counter);
    
    // The ++ will add a 1 to the existing variable value;
    //counter++;

    // The -- will subrract a 1 to the exisiting variable value;
    //counter--;
}

// Inside the parenteses we have three parts: counter, condition, and code that changes the counter. The third part only runs after the code block. 
for (var counter = 0; 10 > counter; counter = counter + 1) {

    console.log(counter);

}

var special = 1;

// Outer loop will run for 10 times, for each time we are executing another loop that will itself run 10 times.
for (var i = 0; i < 10; i++) {

    // The inner loop that will run once (ten times).
    for (var e = 0; e < 10 ; e++) {
            console.log("running!" + special);
            special++;
        
    }
}

// Write a for loop that console.logs every even number up to 48.
//Bonus: start from 12


for (var i = 12; i <= 48; i = i + 2) {
    console.log("Loop #" + i);
    if (i % 2 == 0) {
        console.log(i);
    } else {
        continue;
    }

    console.log(i);
}

// for (var counter = 12; 12 > counter; counter = counter + 2) {
    
//     console.log(counter);
// }

// for (var i = 12; i <= 48; i++) {
//     console.log(counter);
// }