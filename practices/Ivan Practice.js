//Task 1
// Requirement:
// Write a function named fizzBuzz1() which takes a number argument and returns 
// "Fizz" if the given number is divisible by 3, "Buzz" if the number is divisible 
// by 5, and "FizzBuzz" if the number is divisible by both 3 and 5. Otherwise, 
// it will return the number itself.

// Examples:
// fizzBuzz1(0) 		-> "FizzBuzz"
// fizzBuzz1(1) 		-> 1
// fizzBuzz1(3) 		-> "Fizz"
// fizzBuzz1(5) 		-> "Buzz"
// fizzBuzz1(30) 	-> "FizzBuzz"
// fizzBuzz1(10) 	-> "Buzz"
// fizzBuzz1(15) 	-> "FizzBuzz"
// fizzBuzz1(-15) 	-> "FizzBuzz"

const fizzBuzz1 = (num) => {
    if(num % 15 === 0) console.log("FizzBuzz")
    else if (num % 3 === 0) console.log("Fizz")
    else if (num % 5 === 0) console.log("Buzz")
    else return num
}
fizzBuzz1(0);
fizzBuzz1(1);
fizzBuzz1(3);
fizzBuzz1(5);
fizzBuzz1(30);

//Task 2
// Requirement:
// Write a function named fizzBuzz2() which takes a number argument and returns
//  and array consist of numbers starting from 1 to given number. However, it
//   will return "Fizz" for the numbers divided by 3, "Buzz" for the numbers 
//   divided by 5, and "FizzBuzz" for the numbers divided both by 3 and 5.
// Examples:
// fizzBuzz2(3) 		-> [ 1, 2, 'Fizz' ]
// fizzBuzz2(5) 		-> [ 1, 2, 'Fizz', 4, 'Buzz' ]
// fizzBuzz2(10) 	-> [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz' ]
// fizzBuzz2(15) 	-> [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz', 11, 'Fizz'. 13, 14,  'FizzBuzz' ]
// fizzBuzz2(2) 		-> [ 1, 2 ]
const fizzBuzz2 = (num) => {
    let fizz = [];
    for(let i = 1; i <= num; i++) {
    if(i % 15 === 0) fizz.push("FizzBuzz")
    else if (i % 3 === 0) fizz.push("Fizz")
    else if (i % 5 === 0) fizz.push("Buzz")
    else  fizz.push(i)
}
return console.log(fizz)
}
fizzBuzz2(3);
fizzBuzz2(5);
fizzBuzz2(10);
fizzBuzz2(15);
fizzBuzz2(2);

//Task 3
// Requirement:
// Write a function named findSumNumbers() which takes a string argument and 
// returns sum of the all numbers appears in the string.
// Examples:
// findSumNumbers("abc$") -> 0
// findSumNumbers("a1b4c  6#") -> 11
// findSumNumbers("ab110c045d") -> 155
// findSumNumbers("525") -> 525
// findSumNumbers("3 for 10 dollars") -> 13

function findSumNumbers (string){
    let sum = []
    for (let word of string){
        if ('0123456789'.includes(word)) sum.push(word)
        else sum.push(' ')
    }
    const sum1 = sum.join('').split(' ')
    let num3 = 0
    for ( const num of sum1){
        num3 += Number(num)

    }
    return num3
}


console.log(findSumNumbers("abc$"));
console.log(findSumNumbers("a1b4c  6#"));
console.log(findSumNumbers("ab110c045d"));
console.log(findSumNumbers("525"));
console.log(findSumNumbers("3 for 10 dollars"));

// Task 4
// Requirement:
// Write a function named findBiggestNumber() which takes a string argument and 
// returns the biggest number appears in the string.
// Examples:
// findBiggestNumber("abc$") 		-> 0
// findBiggestNumber("a1b4c  6#") 		-> 6
// findBiggestNumber("ab110c045d") 		-> 110
// findBiggestNumber("525") 		-> 525
// findBiggestNumber("3 for 10 dollars") 	-> 10
function findBiggestNumber (string){
    let sum = []
    for (let word of string){
        if ('0123456789'.includes(word)) sum.push(word)
        else sum.push(' ')
    }
    const sum1 = sum.join('').split(' ')
    let num3 = 0;
    for ( const num of sum1){
        if(Number(num) > num3) num3 = num

    }
    return num3
}


console.log(findBiggestNumber("abc$"));
console.log(findBiggestNumber("a1b4c  6#"));
console.log(findBiggestNumber("ab110c045d"));
console.log(findBiggestNumber("525"));
console.log(findBiggestNumber("3 for 10 dollars"));

//Task 5
// Requirement:
// Write a function named countOccurrencesOfCharacters() which takes a string
//  argument and returns the count of repeated characters in the String.
// NOTE: If given String is empty, then return empty String.
// NOTE: It is case sensitive.
// Examples:
// countOccurrencesOfCharacters("") 		-> ""
// countOccurrencesOfCharacters("abc") 	-> "1a1b1c"
// countOccurrencesOfCharacters("abbcca") 	-> "1a2b2c1a"
// countOccurrencesOfCharacters("aaAAa") 	-> "2a2A1a"
// countOccurrencesOfCharacters("www" ) 	-> "3w"
const countOccurrencesOfCharacters = (str) => {
    let value = "";
    let count = 0;
    let a = "";
    for ( let i = 0; i <= str.length -1; i++) {
        count = 0
        if(!value.includes(str[i])) {
            for(let j = i; j <= str.length - 1; j++){
            if(str[i] === str[j]) count++ , value = str[j]
            else break;
            }
            a += count + value
        }
    }
    return a
}

console.log(countOccurrencesOfCharacters(""))
console.log(countOccurrencesOfCharacters("abc"))
console.log(countOccurrencesOfCharacters("abbcca"))
console.log(countOccurrencesOfCharacters("aaAAa"))
console.log(countOccurrencesOfCharacters("www"))

//Task 6
// Requirement:
// Write a function named fibonacciSeries1() which takes a number n argument and returns 
// the n series of Fibonacci numbers as an array. 
// REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
// Examples:
// fibonacciSeries1(3) 	-> [0, 1, 1]
// fibonacciSeries1(5) 	-> [0, 1, 1, 2, 3]
// fibonacciSeries1(7) 	-> [0, 1, 1, 2, 3, 5, 8]
// fibonacciSeries1(8) 	-> [0, 1, 1, 2, 3, 5, 8, 13]
// fibonacciSeries1(1) 	-> [0]
// fibonacciSeries1(2) 	-> [0, 1]
const fibonacciSeries1 = (num) => {
    let fibonacci = [0, 1];
    if(num <= 1) return [0]
    for(let i = 0; i < num - 2; i++){
        fibonacci.push(fibonacci[i] + fibonacci[i + 1])
        
    }
    return fibonacci;
}
console.log(fibonacciSeries1(3));
console.log(fibonacciSeries1(5));
console.log(fibonacciSeries1(7));
console.log(fibonacciSeries1(8));
console.log(fibonacciSeries1(1));
console.log(fibonacciSeries1(2));

//Task 7
// Requirement:
// Write a function named fibonacciSeries2() which takes a number n argument and 
// returns the nth series of Fibonacci number as a number.
// REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
// Examples:
// fibonacciSeries2(2) 	-> 1
// fibonacciSeries2(4) 	-> 2
// fibonacciSeries2(8) 	-> 13
// fibonacciSeries2(9) 	-> 21
// fibonacciSeries2(1) 	-> 0

const fibonacciSeries2 = (num) => {
    let fibonacci = [0, 1];
    for(let i = 0; i < num - 2; i++){
        fibonacci.push(fibonacci[i] + fibonacci[i + 1])
    }
    return fibonacci[num - 1];
}
console.log(fibonacciSeries2(2));
console.log(fibonacciSeries2(4));
console.log(fibonacciSeries2(8));
console.log(fibonacciSeries2(9));
console.log(fibonacciSeries2(1));
//Task 8
// Requirement:
// Write a function named findUniques() which takes two array of number arguments 
// and returns the array which has only the unique values from both given arrays.
// NOTE: If both arrays are empty, then return an empty array.
// NOTE: If one of the array is empty, then return unique values from the other array.
// Examples:
// findUniques([], []) 		-> []
// findUniques([], [1, 2, 3, 2]) 	-> [1, 2, 3]
// findUniques([1, 2, 3, 4], [3, 4, 5, 5]) 	-> [1, 2, 5]
// findUniques([8, 9], [9, 8, 9]) 	-> []
// findUniques([-1, -2], [1, 2]) 	-> [-1, -2, 1, 2]
const findUniques = (arr1, arr2) => {
    const a = arr1.filter((value, index) => arr1.indexOf(value) === index)
    const b = arr2.filter((value, index) => arr2.indexOf(value) === index)
    const unic = a.concat(b);
    const unicLast = []
    for(const el of unic){
        if(!a.includes(el) || !b.includes(el)) unicLast.push(el)
    }
    return console.log(unicLast);

}
findUniques([], []);
findUniques([], [1, 2, 3, 2]);
findUniques([1, 2, 3, 4], [3, 4, 5, 5]);
findUniques([8, 9], [9, 8, 9]);
findUniques([-1, -2], [1, 2]);

//Task 9
// Requirement:
// Write a function named isPowerOf3() which takes a number argument and returns true 
// if given number is equal to 3 power of the X. Otherwise, return false.
// NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243….
// NOTE: Ignore negative scenarios.
// Examples:
// isPowerOf3(1) 	-> true
// isPowerOf3(2) 	-> false
// isPowerOf3(3) 	-> true
// isPowerOf3(27) 	-> true
// isPowerOf3(100) 	-> false
// isPowerOf3(81) 	-> true
// isPowerOf3(9) 	-> true
const isPowerOf3 = (num) => {
    if(num === 3 || num === 1) return true
    for(let i = 0; i <= num; i++){
        num = num / 3;
        if(num === 3) return true
        else if(num < 3) return false;
    }
    return false
}
console.log(isPowerOf3(1));
console.log(isPowerOf3(2));
console.log(isPowerOf3(3));
console.log(isPowerOf3(27));
console.log(isPowerOf3(100));
console.log(isPowerOf3(81));
console.log(isPowerOf3(9));

React

Reply








