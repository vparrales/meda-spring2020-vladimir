var employeeSalaries = [10000, 20000, 30000];

console.log(employeeSalaries[1]);

var myFirstObject = { "jesse johns": 100000, "mark": 20000, "sara": 30000 };

console.log(myFirstObject["jesse johns"]);

// Escaping characters, this string if passed to the browser, would write the angle brackets to the screen
// and not be read as html code.

"\<h1\>Hello, this should \\\\ be example code on the webpage\</h1\>";

var person = {
    "first_name": "Jesse",
    "last_name": "Saint",
    "age": 29,
    "address": {
        "street": "200 Happy St.",
        "city": "Amazing City",
        "state": "Nebraska",
        "zip": 23889
    },
    "fav_color": "blue",
    "salary": 56000,
    "phone": 4840039829,
    "months": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
};

var shortObject = {
    "something": 100
};

// dot notation, use period and the property name, no spaces.
console.log(person.last_name);
console.log(person.phone);

// bracket notation, similar to array access, useful if properties have spaces in them.
console.log(person["phone"]);

console.log(person.months);

var employeeData = [
    {
        "first_name": "Dave",
        "fav_things": ["TV", "Hiking", "Soccer"],
        "myFirstFunctionObject": function () {
            console.log("Hello from inside the employee object!!!!");
        }
    },
    {},
    {}
];

employeeData[0].fav_things[1];

employeeData[0].myFirstFunctionObject();

console.log("david".length);
console.log("david".indexOf("i"));
console.log("david".charAt(3));

var myString = "Hello there how are you?";

console.log(myString.lenght);

var myStringArray = myString.split("");

console.log(myStringArray);