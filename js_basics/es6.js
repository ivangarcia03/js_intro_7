/**
 * LET and CONST
 */

// Reassignment
// String
let fname = 'Alex';
const lname = 'Hunter';

fname = 'Jane'; // OK
lname = 'Doe'; // Error: Assignment to constant variable.

console.log(fname);
// Number
let num1 = 10;
const num2 = 12;

num1 = 11; // OK
num2 = 13; // Error: Assignment to constant variable.

console.log(num1);

// Boolean
let bool1 = true;
const bool2 = true;

bool1 = false; // OK
bool2 = false; // Error: Assignment to constant variable.

console.log(bool1);

const car = {
    type: 'sport',
    year: 2008
}
car.year = 2023;
console.log(car);

// Using variable before its declaration

let student = 'John';
console.log(student); // 'John'

const student2 = 'John';
console.log(student2); // 'John'

console.log(student3); // Cannot access 'student3' before initialization
let student3 = 'John';

console.log(student4); // Cannot access 'student3' before initialization
const student4 = 'John';

console.log(student5); // undefined but not error
var student5 = 'John';

// Template Literals
const jsOutput =   `
In this chapter, we’ll learn how to output text or data using the console.log() method.

console.log() is a built-in function used to log/print given text or data to the console.
It is primarily used for debugging and troubleshooting purposes.
You can see the values passed into this function in the console of a web browser or a JavaScript runtime environment.
Overall, console.log() is a useful tool for developers to inspect and monitor the behavior of their JavaScript code by printing relevant information to the console.
`;

let sum= 0;
var numbers = [1, 2, 3];
numbers.forEach((n) => sum+=n);
console.log(sum);


// RECAP OF SCOPE
function a() {
    let a = 1;
    let b = function() {
        console.log(a); // ? 1
        let c = function() {
            console.log(a); // ? 1
        }
        c();
    }
    b();
}
a();  


ab(); // ?
let ab = function() {
    console.log('a');
}

abc(); // ?
const abc = () => {
    console.log('a');
}

// CONTINUE ES6
// Enhanced Object Literal

// values coming from somewhere
const year = 2023;
const type  = 'horror';

// before ES6
const movie = {
    year: year,
    type: type
}
// after
const movie2 = {
    year,
    type
}

// Desctructuring -----------------------------------
const movieArray = [2023, 'Horror'];

// ARRAY Destructuring
// 1st option
const ry = movieArray[0]; // 2023
const g = movieArray[1]; // 'Horror'
// 2nd array destructure option
const [releasedYear, genre] = movieArray;
console.log(releasedYear); // 2023
console.log(genre); // 'Horror'

// Object Destructuring
const product = {
    title: 'Lorem',
    price: 199.99,
    imageUrl: 'imagrUrl://https',
    collections: ['Fall', 'Winter'],
    subObject: {
        name: "some nested name"
    }
}
// Use this object and output values

// 1st option
console.log(product.title)
console.log(product.price)
console.log(product.imageUrl)
console.log(product.subObject.name);
// 2nd option
const { title:myTitle, price, imageUrl, subObject } = product;
const { name } = subObject;
console.log('myTitle', myTitle);

console.log(myTitle); // 'Lorem'
console.log(price); // 199.99
console.log(imageUrl); // '''''
console.log(subObject.name); // '''''
console.log(name); // '''''

const newObject = {
    title: myTitle
}
console.log("newObject", newObject);


/**
 * Spread Operator
 */

function printNums(num) {
    console.log(arguments); // ?
}
printNums(1);


console.log([1,2,3]); // [1,2,3]
console.log(...[1,2,3]); // 1,2,3


function printNums2(num1, num2, num3) {
    console.log(num1);
    console.log(num2);
    console.log(num3);
}
printNums2(...[1,2,3]); // printNums2(1,2,3); 

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [7,8,9];

// [1,2,3,4,5,6]
const resultArr = arr1.concat(arr2, arr3);
console.log(resultArr);

// Combining arrays
const resultArr2 = [...arr1, ...arr2, ...arr3];
console.log(resultArr2);


const arr4 = [1,2,3];
// const copyOfArr4 = arr4;
const copyOfArr4 = new Array(...arr4);
// const copyOfArr4 = [...arr4];
console.log(copyOfArr4);
// [[[1,2,4], [4345]], [67676]] => [1,2,4, 4345, 67676]


const obj = {a: 'a', b: 'b'};
const obj2 = {c: 'c', d: 'd'};
// console.log(...obj); // Error: not iterable
// {a: 'a', b: 'b', c: 'c', d: 'd'}
// const sumOfTwoObject = Object.assign({}, obj, obj2);
const sumOfTwoObject = Object.assign(obj, obj2);
const sumOfTwoObject2 = { ...obj, ...obj2 }
console.log(sumOfTwoObject);
console.log(sumOfTwoObject2);

// Copying obj2
const copyOfObj2 = Object.assign({}, obj2);
const copyOfObj22 = {...obj2};
console.log(copyOfObj2);
console.log(copyOfObj22);



/**
 * Rest Operator
 */

function printAdminDetails1 () {
    // console.log(arguments);
    for(let i=0; i < arguments.length; i++) {
        console.log("argument", arguments[i])
    }
}
const printAdminDetails2 = (...nums) => {
    // console.log(nums); // array
    for(let i=0; i < nums.length; i++) {
        console.log("num", nums[i])
    }
}

printAdminDetails1(1,2,3);
printAdminDetails2(1,2,3);

const arr5 = ['A', 'B', 'C', 'D'];
const obj5 = { A: 'A', B: 'B', C: 'C', D: 'D'};

const [first, second, ...rest] = arr5;
console.log(first, second, rest);

const { A, B, ...restKeyVal} = obj5;
console.log(A, B, restKeyVal);