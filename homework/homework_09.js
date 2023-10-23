/*
Requirement:
Write a function named fizzBuzz1() which takes a number argument and returns "Fizz" if the given number
is divisible by 3, "Buzz" if the number is divisible by 5, and "FizzBuzz" if the number is divisible by
 both 3 and 5. Otherwise, it will return the number itself.​

Examples:
fizzBuzz1(0) 		-> "FizzBuzz"
fizzBuzz1(1) 		-> 1
fizzBuzz1(3) 		-> "Fizz"
fizzBuzz1(5) 		-> "Buzz"
fizzBuzz1(30) 	-> "FizzBuzz"
fizzBuzz1(10) 	-> "Buzz"
fizzBuzz1(15) 	-> "FizzBuzz"
fizzBuzz1(-15) 	-> "FizzBuzz

*/

// Task-01
const fizzBuzz1 = (num) => {
    if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
    else if (num % 3 === 0) return "Fizz";
    else if (num % 5 === 0) return "Buzz";
    else return num;
}
console.log(fizzBuzz1(0)); //  -> "FizzBuzz"
console.log(fizzBuzz1(1)); //  -> 1
console.log(fizzBuzz1(3)); //  -> "Fizz"
console.log(fizzBuzz1(5)); //  -> "Buzz"
console.log(fizzBuzz1(30)); //  -> "FizzBuzz"
console.log(fizzBuzz1(10)); //  -> "Buzz"
console.log(fizzBuzz1(15)); //  -> "FizzBuzz"
console.log(fizzBuzz1(-15)); //  -> "FizzBuzz"

console.log("\n-----------------------------\n");


/*
Requirement:
Write a function named fizzBuzz2() which takes a number argument and returns and array consist of numbers starting
from 1 to given number. However, it will return "Fizz" for the numbers divided by 3, "Buzz" for the numbers divided
by 5, and "FizzBuzz" for the numbers divided both by 3 and 5.
Examples:
fizzBuzz2(3) 		-> [ 1, 2, 'Fizz' ]
fizzBuzz2(5) 		-> [ 1, 2, 'Fizz', 4, 'Buzz' ]
fizzBuzz2(10) 	-> [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz' ]​
fizzBuzz2(15) 	-> [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz', 11, 'Fizz'. 13, 14,  'FizzBuzz' ]​
fizzBuzz2(2) 		-> [ 1, 2 ]

*/

//-Task-02
function fizzBuzz2(num) {
    let newArray = [];
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) newArray.push("FizzBuzz");
        else if (i % 3 === 0) newArray.push("Fizz");
        else if (i % 5 === 0) newArray.push("Buzz");
        else newArray.push(i);
    }
    return newArray
}
console.log(fizzBuzz2(3)); //  -> [ 1, 2, 'Fizz' ]
console.log(fizzBuzz2(5)); //  -> [ 1, 2, 'Fizz', 4, 'Buzz' ]
console.log(fizzBuzz2(10)); // -> [ 1 , 2 , 'Fizz' , 4 , 'Buzz' , 'Fizz' , 7, 8 , 'Fizz' , 'Buzz' ]
console.log(fizzBuzz2(15)); //  -> [ 1 , 2 , 'Fizz' , 4 , 'Buzz' , 'Fizz' , 7, 8 , 'Fizz' , 'Buzz', 11, 'Fizz'. 13, 14,  'FizzBuzz' ]
console.log(fizzBuzz2(2)); //  -> [ 1, 2 ]

console.log("\n-----------------------------\n");

/*



*/


// Task-03
const findSumNumbers = (str) => {
    let numbers = str.match(/\d+/g)
    if (numbers) return numbers.reduce((sum, num) => sum + parseInt(num), 0)
    else return 0
}
console.log(findSumNumbers("abc$")); // -> 0
console.log(findSumNumbers("a1b4c  6#")); // -> 11
console.log(findSumNumbers("ab110c045d")); // -> 155
console.log(findSumNumbers("525")); // -> 525
console.log(findSumNumbers("3 for 10 dollars")); // -> 13

console.log("\n-----------------------------\n");

/*
 Requirement:
Write a function named findBiggestNumber() which takes a string argument and returns the biggest number appears in the string.

Examples:

findBiggestNumber("abc$") 		-> 0
findBiggestNumber("a1b4c  6#") 		-> 6
findBiggestNumber("ab110c045d") 		-> 110
findBiggestNumber("525") 		-> 525
findBiggestNumber("3 for 10 dollars") 	-> 10

*/

// Task - 04

function findBiggestNumber(str) {

    const numbers = str.match(/\d+/g);

    if (!numbers) {
        return 0;
    }
    const maxNumber = Math.max(...numbers.map(Number));

    return maxNumber;
}

console.log(findBiggestNumber("abc$")); // 		-> 0
console.log(findBiggestNumber("a1b4c 6#")); // 		-> 6
console.log(findBiggestNumber("ab110c045d")); // 		-> 110
console.log(findBiggestNumber("525")); //		-> 525
console.log(findBiggestNumber("3 for 10 dollars")); // 	-> 10


console.log("\n-----------------------------\n");

/*
Requirement:
Write a function named countOccurrencesOfCharacters() which takes a string argument and returns the count of repeated characters in the String.​
NOTE: If given String is empty, then return empty String.​
NOTE: It is case sensitive.

Examples:
countOccurrencesOfCharacters("") 		-> ""
countOccurrencesOfCharacters("abc") 	-> "1a1b1c"
countOccurrencesOfCharacters("abbcca") 	-> "1a2b2c1a"
countOccurrencesOfCharacters("aaAAa") 	-> "2a2A1a”
countOccurrencesOfCharacters("www" ) 	-> "3w"



*/

// Task- 05

function countOccurrencesOfCharacters(str){
    if(str === "") return "";
    const tempArr= str.split("");
    let letters = [];
    let count = 1;

    for(let i = 0; i < tempArr.length; i++){
        if(tempArr[i] === tempArr[i + 1]){
            count++
        } 
        else{
         let single = `${count}${tempArr[i]}`
         letters.push(single);
        }
    }
    return letters.join("");
}




console.log(countOccurrencesOfCharacters(""));// 		-> ""
console.log(countOccurrencesOfCharacters("abc")); // 	-> "1a1b1c"
console.log(countOccurrencesOfCharacters("abbcca")); // 	-> "1a2b2c1a"
console.log(countOccurrencesOfCharacters("aaAAa")); // 	-> "2a2A1a”
console.log(countOccurrencesOfCharacters("www" ));// 	-> "3w"


console.log("\n-----------------------------\n");

/*
Requirement:
Write a function named fibonacciSeries1() which takes a number n argument and returns the n series of Fibonacci numbers as an array. ​
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21

Examples:
fibonacciSeries1(3) 	-> [0, 1, 1]
fibonacciSeries1(5) 	-> [0, 1, 1, 2, 3]
fibonacciSeries1(7) 	-> [0, 1, 1, 2, 3, 5, 8]
fibonacciSeries1(8) 	-> [0, 1, 1, 2, 3, 5, 8, 13]
fibonacciSeries1(1) 	-> [0]
fibonacciSeries1(2) 	-> [0, 1]


*/

// Task - 06

const fibonacciSeries1 = (num) => {
    let fibonacci = [0, 1];
    if(num <= 1) return [0]
    for(let i = 0; i < num - 2; i++){
        fibonacci.push(fibonacci[i] + fibonacci[i + 1]) 
    }
    return fibonacci;
}
console.log(fibonacciSeries1(3)); // [0, 1, 1]
console.log(fibonacciSeries1(5)); // [ 0, 1, 1, 2, 3 ]
console.log(fibonacciSeries1(7)); // [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacciSeries1(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacciSeries1(1)); // [0]
console.log(fibonacciSeries1(2)); // [0, 1]

console.log("\n-----------------------------\n");

/*
Requirement:
Write a function named fibonacciSeries2() which takes a number n argument and returns the nth series of Fibonacci number as a number.
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
fibonacciSeries2(2) 	-> 1
fibonacciSeries2(4) 	-> 2
fibonacciSeries2(8) 	-> 13
fibonacciSeries2(9) 	-> 21
fibonacciSeries2(1) 	-> 0


*/

// Task-07

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

console.log("\n-----------------------------\n");

/*
Requirement:
Write a function named findUniques() which takes two array of number arguments and returns the array which has only the unique values from both given arrays.
NOTE: If both arrays are empty, then return an empty array.​
NOTE: If one of the array is empty, then return unique values from the other array.

Examples:
findUniques([], []) 		-> []
findUniques([], [1, 2, 3, 2]) 	-> [1, 2, 3]
findUniques([1, 2, 3, 4], [3, 4, 5, 5]) 	-> [1, 2, 5]
findUniques([8, 9], [9, 8, 9]) 	-> []
findUniques([-1, -2], [1, 2]) 	-> [-1, -2, 1, 2]


*/
// Task 08  (I'm not able to solve taks-08)






console.log("\n-----------------------------\n");

/*
Requirement:
Write a function named isPowerOf3() which takes a number argument and returns true if given number is equal to 3 power of the X. Otherwise, return false.​
NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243….
NOTE: Ignore negative scenarios.

Examples:
isPowerOf3(1) 	-> true
isPowerOf3(2) 	-> false
isPowerOf3(3) 	-> true
isPowerOf3(27) 	-> true
isPowerOf3(100) 	-> false
isPowerOf3(81) 	-> true
isPowerOf3(9) 	-> true


*/

// Task -09

function isPowerOf3(num){
    if(num === 3 || num === 1) return true;
    if(num % 3 === 0) return true;
    else return false;
}




console.log(isPowerOf3(1)); // 	-> true
console.log(isPowerOf3(2));// 	-> false
console.log(isPowerOf3(3)); // 	-> true
console.log(isPowerOf3(27)); // 	-> true
console.log(isPowerOf3(100)); // 	-> false
console.log(isPowerOf3(81)); // 	-> true
console.log(isPowerOf3(9)); // 	-> true