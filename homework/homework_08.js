/*
Requirement:
Write a function named hasLowerCase() which takes a string argument and returns true if there
 is a lowercase letter and false if it there isn’t. 
Examples:
hasLowerCase("") 		-> false
hasLowerCase("JAVASCRIPT") 	-> false
hasLowerCase("hello") 		-> true
hasLowerCase("125$") 		-> false
hasLowerCase("   a   ") 		-> true


*/

// Task-01

const hasLowerCase = (str) => str !== str.toUpperCase();

console.log(hasLowerCase("")); //  -> false
console.log(hasLowerCase("JAVASCRIPT")); //  -> false
console.log(hasLowerCase("hello")); //  -> true
console.log(hasLowerCase("125$")); //  -> false
console.log(hasLowerCase("   a   ")); // -> true


console.log("\n-----------------------------\n");


/*
Requirement:
Write a function named noZero() which takes an array of numbers as argument and returns the array back with all zeros removed.

Examples:
noZero([1]) 		-> [1]
noZero( [1, 1, 10]​) 	-> [1, 1, 10]​
noZero([0, 1, 10]) 	-> [1, 10]
noZero([0, 0, 0]) 	-> []
noZero([10, 100 0]) 	-> [10, 100]

*/

// Task - 02

const noZero = (array) => {
    let newArray = [];
    for (const num of array) {
        if (num !== 0) newArray.push(num);
    }
    return newArray;
}
console.log(noZero([1])); //  -> [1]
console.log(noZero([1, 1, 10])); //  -> [1, 1, 10]
console.log(noZero([0, 1, 10])); //  -> [1, 10]
console.log(noZero([0, 0, 0])); //  -> []
console.log(noZero([10, 100, 0])); // -> [10, 100]


console.log("\n-----------------------------\n");

/*
Requirement:
Write a function named numberAndSquare() which takes an array of numbers as argument and returns
a multidimensional array with all numbers squared. 

Examples:
numberAndSquare([1, 2, 3]) 	-> [[1, 1], [2, 4], [3, 9]]
numberAndSquare([0, 3, -6]) 	-> [[0, 0], [3, 9], [-6, 36]]
numberAndSquare([1, 4]) 	-> [[1,1], [4, 16]]
numberAndSquare([0, 0, 0]) 	-> [[0, 0], [0, 0], [0, 0]]
numberAndSquare([0, 1, -10]) 	-> [[0, 0], [1, 1], [-10, 100]]

*/

// Task - 03
const numberAndSquare = (numbers) => numbers.map((number) => [number, number ** 2]);

console.log(numberAndSquare([1, 2, 3])); //  -> [[1, 1], [2, 4], [3, 9]]
console.log(numberAndSquare([0, 3, -6])); //  -> [[0, 0], [3, 9], [-6, 36]]
console.log(numberAndSquare([1, 4])); //  -> [[1,1], [4, 16]]
console.log(numberAndSquare([0, 0, 0])); //  -> [[0, 0], [0, 0], [0, 0]]
console.log(numberAndSquare([0, 1, -10])); //  -> [[0, 0], [1, 1], [-10, 100]]


console.log("\n-----------------------------\n");


/*
Requirement:
Write a function named containsValue() which takes a string array and a string
 as arguments and returns a boolean value. Search the string variable inside of the array
 and return true if it exists in the array. If it doesn’t exist, return false. ​

NOTE: Assume that array size is at least 1.​
NOTE: The method is case-sensitive.

Examples:
containsValue(["abc", "foo", "javascript"], "hello") 			-> false
containsValue(["abc", "def", "123"], "Abc") 			-> false
containsValue(["abc", "def", "123", "Javascript", "Hello"], "123") 	-> true

*/

//- Task-04

function containsValue(array, value) {
    for (const str of array) {
        if (str === value) {
            return true;
        }
    }
    return false;
}

console.log(containsValue(["abc", "foo", "javascript"], "hello")); // -> false
console.log(containsValue(["abc", "def", "123"], "Abc")); //	-> false
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123")); //	-> true


console.log("\n-----------------------------\n");

/*
Requirement:
Write a function named reverseSentence() which takes a string as argument and returns
 the words in reverse order.​ If there is no enough words reverse, return "There is not enough words!".

 Examples:
reverseSentence("Hello") 		-> "There is not enough words!"
reverseSentence("Javascript is fun") 		-> "Fun is javascript"
reverseSentence("This is a sentence") 	-> "Sentence a is this"


*/

// Task- 05

function reverseSentence(str) {
    if (!(str.includes(" "))) return "There is not enough words"
    else return str.split(" ").reverse().join(" ")
}


console.log(reverseSentence("Hello")); //  -> "There is not enough words!"
console.log(reverseSentence("Javascript is fun")); //  -> "Fun is javascript"
console.log(reverseSentence("This is a sentence")); //  -> "Sentence a is this"


console.log("\n-----------------------------\n");

/*

Requirement:
Write a function named removeStringSpecialsDigits() which takes a string as argument
and return a string without the special characters or digits.

Examples:
removeStringSpecialsDigits("123Javascript #$%is fun") 	-> "Javascript is fun" 
removeStringSpecialsDigits("Cypress") 		-> "Cypress"
removeStringSpecialsDigits("Automation123#$%") 	-> "Automation"

*/

// Task- 06

function removeStringSpecialsDigits(str) {
    return str.replace(/[^a-zA-Z ]/g, "")
}

console.log(removeStringSpecialsDigits("123Javascript #$%is fun")); //  -> "Javascript is fun"
console.log(removeStringSpecialsDigits("Cypress")); //  -> "Cypress"
console.log(removeStringSpecialsDigits("Automation123#$%")); //  -> "Automation"


console.log("\n-----------------------------\n");

/*
Requirement:
Write a function named removeArraySpecialsDigits() which takes a string array as argument
and return back without the special characters or digits.

Examples:
removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]) 	-> ["Javascript", "is", "fun"]
removeArraySpecialsDigits(["Cypress", "123$%", "###"]) 	-> ["Cypress", "", ""]
removeArraySpecialsDigits(["Automation", "123#$%tool"]) 	-> ["Automation", "tool"]

*/

// Task- 07
const removeArraySpecialsDigits = (array) => array.map(str => str.replace(/[^a-zA-Z]/g, ""));

console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"])); //  -> ["Javascript", "is", "fun"]
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"])); //  -> ["Cypress", "", ""]
console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"])); //  -> ["Automation", "tool"]




console.log("\n-----------------------------\n");

/*
Requirement:
Write a function named getCommons() which takes two string arrays as arguments and returns all the common words.

Examples:
getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] ) 		-> []
getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] ) 	-> ["Javascript"]
getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] ) 	-> ["C#"]


*/
// Task-08
function getCommons(array1, array2){
    let commons = [];
   for(let i=0; i < array1.length; i++){
     if(array2.includes(array1[i]) && !commons.includes(array1[i])){
       commons.push(array1[i]);
     }
   }
   return commons;
 }

 console.log(getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] )); // -> []
 console.log(getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] )); //-> ["Javascript"]
 console.log(getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] )); //  -> ["C#"]


 console.log("\n-----------------------------\n");


 /*

Requirement:
Write a function named noXInVariables() which takes an array as argument and return an array that all the x or X removed from the elements. 
NOTE: If the element is existing of x or X letters only, then completely remove the element.
Examples:
noXInVariables(["abc", 123, "#$%"]) 		-> ["abc", 123, "#$%"]
noXInVariables(["xyz", 123, "#$%"]) 		-> ["yz", 123, "#$%"]
noXInVariables(["x", 123, "#$%"]) 		-> [123, "#$%"]
noXInVariables(["xyXyxy", "Xx", "ABC"]) 	-> ["yyy", "ABC"]

 */


