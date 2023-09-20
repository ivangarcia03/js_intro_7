/*
Requirement:
Write a function named hasUpperCase() which takes a string argument and 
return true if there is an uppercase letter and false otherwise.

Examples:
hasUpperCase("javascript")  -> false
hasUpperCase("John")  -> true
hasUpperCase("$125.0")  -> false
hasUpperCase("")  -> false


*/


//  Homework -07
// Task -01
const hasUpperCase = (str) => str !== str.toLowerCase();


console.log(hasUpperCase("javascript")); // false
console.log(hasUpperCase("John")); // true
console.log(hasUpperCase("125.0")); // false
console.log(hasUpperCase("")); // false




console.log("\n-----------------------------\n");


/*
Requirement:
Write a function named noDigit() which takes a string argument and returns a new string with all digits removed from 
the original string​.

Examples:

noDigit("") 			-> ""
noDigit("Javascript") 		-> "Javascript"
noDigit("123Hello") 		-> "Hello"
noDigit("123Hello World149") 	-> "Hello World”
noDigit("123Tech456Global149") 	-> "TechGlobal"

*/

// Task- 02

function noDigit(str){
    return str.replace(/[0-9]/g, "");
  }


  console.log(noDigit("")); //
  console.log(noDigit("Javascript")); // Javascript
  console.log(noDigit("123Hello")); // Hello
  console.log(noDigit("132Hello World149")); // Hello World
  console.log(noDigit("123Tech456Global149")); // TechGlobal



  console.log("\n-----------------------------\n");


  /*
Requirement:
Write a function named noVowel() which takes a string argument and 
returns a new string with all vowels removed from the original string​.

Examples:

noVowel("TechGlobal") 	-> "TchGlbl"
noVowel("AEOxyz") 	-> "xyz"
noVowel("Javascript") 	-> "Jvscrpt"
noVowel("") 	-> ""
noVowel("125$") 	-> "125$"


  */

function noVowel(str){
    return str.replace(/["aeiouAEIOU"]/g, "");
  }


  console.log(noVowel("TechGlobal")); // TechGlbl
  console.log(noVowel("AEOxyz"));  // xyz
  console.log(noVowel("TechGlobal")); // TchGlbl
  console.log(noVowel("JavaScript")); // Jvscrpt
  console.log(noVowel(""));
  console.log(noVowel("125$")); // 125$



  console.log("\n-----------------------------\n");


  /*

  Requirement:
Write a function named no13() which takes an array of numbers as argument and return a new array with all 13s replaced with 0s. 
​
Examples:

no13([1, 2, 3 ,4]) 		-> [1, 2, 3 ,4] 
no13([13, 2, 3]) 		-> [0, 2, 3]
no13([13, 13, 13 , 13, 13]) 	-> [0, 0, 0, 0, 0]
no13([]) 			-> []

  */

//  Task- 04

function no13(array){
  let newArray = [];
  for(const num of array){
    if(num === 13){
      newArray.push(0);
    }
    else newArray.push(num)
  }
  return newArray;
}

console.log(no13([1, 2, 3, 4])); // [1, 2, 3, 4]
console.log(no13([13, 2, 3])); // [0, 2, 3]
console.log(no13([13, 13, 13, 13, 13])); // [0, 0, 0, 0, 0]
console.log(no13([])); // []



console.log("\n-----------------------------\n");


/*
Requirement:
Write a function named middleInt() which takes three number arguments and return the middle number. ​

Examples:

middleInt(1, 2, 2) 	-> 2
middleInt(5, 5, 8) 	-> 5
middleInt(5, 3, 5) 	-> 5
middleInt(1, 1, 1) 	-> 1
middleInt(-1, 25, 10) 	-> 10

*/

// Task - 05

function middleInt(a, b, c){
    if(a > b && a < c){
      return a
    }
    else if(b < c && b >= a ){
      return b
    }
    else return c
  }


  console.log(middleInt(1, 2, 2)); // 2
  console.log(middleInt(5, 5, 8)); // 5
  console.log(middleInt(5, 3, 5)); // 5
  console.log(middleInt(1, 1, 1)); // 1
  console.log(middleInt(-1, 25, 10)); // 10


  console.log("\n-----------------------------\n");



  /*
Requirement:
Write a function named sumOfDigits() which takes a string argument and returns sum of all digits from the original string. ​

Examples:

sumOfDigits("Javascript") 	-> 0
sumOfDigits("John’s age is 29") 	-> 11
sumOfDigits("$125.0") 		-> 8
sumOfDigits("") 		-> 0

  */

// Task - 06

function sumOfDigit(str){
    let sum = 0;
    for(let i = 0; i < str.length; i++){
      if(parseInt(str[i])){
      sum+= parseInt(str[i]);
      }
    }
    return sum
  }


  console.log(sumOfDigit("javascript")); // 0
  console.log(sumOfDigit("John's age is 29")); // 11
  console.log(sumOfDigit("125.0")); // 8
  console.log(sumOfDigit("")); // 0


  console.log("\n-----------------------------\n");


  /*
Requirement:
Write a function named arrFactorial() which takes an array of numbers as argument
 and return the array with every number replaced with their factorials.

Examples:

arrFactorial([1, 2, 3 ,4]) 		->  [1, 2, 6, 24]
arrFactorial([0, 5]) 		-> [1,120]
arrFactorial([5 , 0, 6]) 		-> [120, 1, 720]
arrFactorial([]) 		-> []

  */

// task - 7

function arrFactorial(array){
    let newArray = [];
    for(const num of array){
      let factorial = 1;
      for(let i = 2; i <= num; i++){
        factorial= factorial * i;
      }
      newArray.push(factorial);
    }
    return newArray;
  }
  console.log(arrFactorial([1, 2, 3, 4])); // [ 1, 2, 6, 24 ]
  console.log(arrFactorial([0, 5])); // [ 1, 120 ]
  console.log(arrFactorial([5, 0, 6 ])); // [ 120, 1, 720 ]
  console.log(arrFactorial([ ])); // [] (edited



  console.log("\n-----------------------------\n");


  /*
Requirement:
Write a function named categorizeCharacters() which takes a string word as argument and
 return an array as letters at index of 0, digits at index of 1 and specials at index of 2. 

Examples:

categorizeCharacters("1234") 	-> [ '' , '1234', '' ] 
categorizeCharacters("abc123$#%") 	-> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%") 	-> [ 'abc', '123', '$%%' ]

  */

// task- 8

function categorizeCharacters(str){
  let letters = [];
  let numbers = [];
  let symbols = [];
  for(let i = 0; i < str.length; i++){
    if(str[i].match(/[a-z]/)) letters.push(str[i]);
    else if(str[i].match(/[0-9]/)) numbers.push(str[i])
    else symbols.push(str[i]);
  }
  let result = [letters.join(""),numbers.join(""), symbols.join("")];
  return result;
}
console.log(categorizeCharacters("1234")); // [ '', '1234', '' ]
console.log(categorizeCharacters("abc123$#%")); // [ 'abc', '123', '$#%' ]
console.log(categorizeCharacters("12ab$%3c%")); // [ 'abc', '123', '$%%' ]

