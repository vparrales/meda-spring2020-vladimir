// Pyrimid builder we need:
// Function
// Array
// split/join
//pop/push
//loops
//Math.random()


function pyramidBuilder(height) {

    var pyramidHeight;

    if(height == undefined) {
        var randomNumber = (Math.random() * 20) + 1;
        pyramidHeight = Math.floor(randomNumber);
    }else {
        pyramidHeight = height;
    }


    var pyramidRow = "";

    for (var i = 0; i < pyramidHeight; i++) {
        pyramidRow = pyramidRow + "*";
        console.log(pyramidRow);
    }

    var pyramidArray = pyramidRow.split("");

    for (var i = 0; i < pyramidHeight - 1; i++) {
        pyramidArray.pop();
        pyramidRow = pyramidArray.join("");
        console.log(pyramidRow);
    }
}

pyramidBuilder(3);
pyramidBuilder();
pyramidBuilder(3);

for (var i = 0; i < 100; i++) {
    pyramidBuilder();
}

