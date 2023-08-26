
/*
TASK
Create an array named as names to store below data
Yuliia
Alex
Bali
Igor
Ramez
Aziz

Retrieve and print Igor 
Retrieve and print Aziz as AZIZ
*/

const names = ["Yuliia", "Alex", "Bali", "Igor", "Ramez", "Aziz"];

//names = 25; // TypeError

console.log(names); // [ 'Yuliia', 'Alex', 'Bali', 'Igor', 'Ramez', 'Aziz' ]

console.log(names[3]);
console.log(names[names.length - 1].toUpperCase());


/*
TASK
Generate 5 random numbers bt 1 and 10 (both inclusive)
Store them in array
Find first and last element from the array
Calculate and return their average
*/



const arr = 
[
    Math.floor(Math.random() * 10) + 1,
    Math.floor(Math.random() * 10) + 1,
    Math.floor(Math.random() * 10) + 1,
    Math.floor(Math.random() * 10) + 1,
    Math.floor(Math.random() * 10) + 1
];

console.log(arr);
console.log(`The average of first and last random number is ${(arr[0] + arr[arr.length - 1]) / 2}`);