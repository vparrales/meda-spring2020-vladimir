var employeeSalaries = [100000, 10000, 1000000, 55000, 75000, 24000, 32000, 40000, 29500, 72000];

// Update all of these values so we add a 5% bonus if they make less than 50000, or 2.5% if they make more than 50000.

// 1st step - detect if value is smaller or larger than $50k
// 2nd step - undate values to include bonus.
// 3rd step - run through each item of array and ask the question.


// For each item in the employeeSalaries array...
for (var i = 0; i < employeeSalaries.length; i++) {
    //...console log the individual value...
    console.log(employeeSalaries[i]);

    //...assign this value to the salary variable.
    var salary = employeeSalaries[i];

    // Test the salary variable to see whether its above or below 50000.
    if (salary < 50000) {

    console.log("Old salry: " + salary);

    // //If it is below, add a 5% bonus to it.
    // salary = salary+ (salary * .05);
    // console.log("New salary: " + salary);

    // And update the array with this new value.
    employeeSalaries[i] = salaryBonus(salary, .05);
    
} else {

    console.log("Old salry: " + salary);

    // //Otherwise add a 2.5% bonus to it. 
    // salary = salary + (salary * .025);
    // console.log("New salary: " + salary);

    // And update the array with this new value.
    employeeSalaries[i] = salaryBonus(salary, .025);

    }

}

console.log(employeeSalaries);


// Abstract logic

function salaryBonus(salary, bonus) {
    var actualBonus = salary * bonus;

    var newSalary = salary + actualBonus;

    return newSalary;
}

var test = salaryBonus(10000, .10);
var test2 = salaryBonus(20000, .05);

console.log(test);
console.log(test2);