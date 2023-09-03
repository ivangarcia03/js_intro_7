/*
Write a function called product which takes 2 numbers and returns their product

product(3, 5)   -> 15
product(2, 0)   -> 0
product(4, 3)   -> 12
*/

// Regular function syntax
function product1(n1, n2){
    return n1 * n2;
}

console.log(product1(3, 5)); // 15


// Function expression syntax
const product2 = function (n1, n2) {
    return n1 * n2;
}

console.log(product2(2, 0)); // 0


// Arrow function syntax
const product3 = (n1, n2) => n1 * n2;

console.log(product3(4, 3)); // 12


/*
Write a function named as fizzBuzz that takes one number argument and
Outputs 'Fizz' if the number is divisible by 3
Outputs 'Buzz' if the number is divisible by 5
Outputs 'FizzBuzz' if the number is divisible by both 3 and 5
Outputs the number itself if it is not divisible by both 3 and 5

fizzBuzz(3)         -> 'Fizz'
fizzBuzz(10)        -> 'Buzz'
fizzBuzz(45)        -> 'FizzBuzz'
fizzBuzz(2)         -> '2'
*/


// Regular function syntax
function fizzBuzz1(number) {
    if(number % 15 === 0) console.log('FizzBuzz');
    else if(number % 3 === 0) console.log('Fizz');
    else if(number % 5 === 0) console.log('Buzz');
    else console.log(number);
}

fizzBuzz1(3); // Fizz
fizzBuzz1(10); // Buzz
fizzBuzz1(45); // FizzBuzz
fizzBuzz1(2); // 2


// Function expression syntax
const fizzBuzz2 = function(number) {
    if(number % 15 === 0) console.log('FizzBuzz');
    else if(number % 3 === 0) console.log('Fizz');
    else if(number % 5 === 0) console.log('Buzz');
    else console.log(number);
};

fizzBuzz2(3); // Fizz
fizzBuzz2(10); // Buzz
fizzBuzz2(45); // FizzBuzz
fizzBuzz2(2); // 2


// Arrow function syntax
const fizzBuzz3 = number => {
    if(number % 15 === 0) console.log('FizzBuzz');
    else if(number % 3 === 0) console.log('Fizz');
    else if(number % 5 === 0) console.log('Buzz');
    else console.log(number);
};

fizzBuzz3(3); // Fizz
fizzBuzz3(10); // Buzz
fizzBuzz3(45); // FizzBuzz
fizzBuzz3(2); // 2


/*
Write a function named as greeting that outputs 'Hello'
*/

function greeting1() {
    console.log('Hello');
}

greeting1(); // Hello


const greeting2 = function () {
    console.log('Hello');
}

greeting2(); // Hello


const greeting3 = () => console.log('Hello');
greeting3(); // Hello

console.log(typeof greeting1); // function
console.log(typeof fizzBuzz3); // function