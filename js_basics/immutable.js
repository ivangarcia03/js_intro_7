// Immutable 

let city = "Chicago";
// reassignment is possible
// city = 'New York';
console.log(city); // New York

// try to change the string variable
city[0] = 'P';
console.log(city); // Chicago

let outputStr = 'P' + 'hicago'; // creates a new string

let num = 10;
num = num + 2;
console.log(num); // 12


// Objects
const city  = {
    name: 'Chicago'
};

// city.name = 'New York';

let city2 = city;
city2.name = 'New York';

console.log(city); // { name: 'New York'}
console.log(city2); // { name: 'New York'}

// Arrays
const cities = ['Chicago', 'New York', 'LA'];

cities[0] = 'Seattle';
console.log(cities); // [ 'Seattle', 'New York', 'LA' ]

const cities2 = cities;
cities2[2] = 'Houston';
console.log(cities); // [ 'Seattle', 'New York', 'Houston' ]
console.log(cities2); // [ 'Seattle', 'New York', 'Houston' ]

// Example on how to freeze an object

const employee = {
    name: 'Jane',
    lName: 'Doe',
    title: 'HR'
}
// prevent from updating above object
// Object.freeze(employee);
employee.name = 'Joe';
console.log(employee); // { name: 'Jane', lName: 'Doe', title: 'HR' }

const employee2 = employee; 
employee2.title = 'instructor';
console.log(employee2); // { name: 'Jane', lName: 'Doe', title: 'HR' }

// Check if object is frozen
console.log(Object.isFrozen(employee)); // true

// How to know If property belongs to original object
const obj1 = { id: 1};
const obj2 = { ...obj1, title: 'simple object'};

console.log(obj2);
console.log(obj1.hasOwnProperty('title')); // false
console.log(obj1.hasOwnProperty('id')); // false

console.log(obj2.hasOwnProperty('title')); // true
console.log(obj2.hasOwnProperty('id')); // true ???