const names = ['John', 'Jane', 'Alex', 'Max'];

// Output each name to the console
names.forEach((name) => console.log(name));

// Output first letter of each name
names.forEach((name) => console.log(name[0]));

// Output each name uppercased
names.forEach((name) => console.log(name.toUpperCase()));

// Count how many names has 4 letters   -> 3
let count = 0;

names.forEach((name) => name.length === 4 ? count++: count);

console.log(count); // 3

//Above is not good, we will learn filter() or reduce() could be used

const numbers = [5, 10, 3, 0, -2];

// Print each number
numbers.forEach((x) => console.log(x));

// Print each number multiplied by 5
numbers.forEach((x) => console.log(x * 5));

// print true for even numbers and false for odd numbers false, true, false, true, true
numbers.forEach((x) => console.log(x % 2 === 0));


// Create a new array that multiplies each of the numbers element by 3 -> [ 15, 30, 9, 0, -6 ]
const newArr = [];

numbers.forEach((x) => newArr.push(x * 3));

console.log(newArr); // [ 15, 30, 9, 0, -6 ]

const newArray = numbers.map((x) => x * 5);
console.log(newArray);