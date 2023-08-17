
let fname = "John";
let lname = "Doe";


console.log(typeof fname); // string
console.log(typeof lname); // string

// Concatenation - combining strings together
let fullName = fname + " " + lname;

console.log(fullName); // John Doe


// String Templates - Template Literals
//let quote = "I\ncan\ndo\nit";
let quote = 
`I
can
do
it`;

console.log(quote);

// Interpolation
let firstName = "Jane", lastName = "Doe";
console.log(`The full name is = ${firstName} ${lastName}.`);


let quantity = 5, price = 1.5; // The total price is $7.5
console.log(`The total price is $${quantity * price}`);
console.log("The total price is $" + (quantity * price));


// Primitive string vs object string
let city1 = "Chicago";
let city2 = new String("Chicago");

console.log(city1); // Chicago
console.log(city2); // [String: 'Chicago']

console.log(typeof city1); // string
console.log(typeof city2); // object

console.log(city1 == city2); // true
console.log(city1 === city2); // false