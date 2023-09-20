// task-01
/*
Write a function named noSpace() which takes a string as argument and returns a new string with all the spaces removed.
*/


const noSpace = (str) => str.replace(/\s/g, "");

console.log(noSpace(""));
console.log(noSpace("JavaScript"));
console.log(noSpace("  Hello  "));
console.log(noSpace("Hello Word  "));
console.log(noSpace("Tech Global  "));


console.log("\n-----------------------------\n");


/*
Task- 02
Write a function named replaceFirstLast() which takes a string argument and returns a new string with the first and last characters replaced.

NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
*/

const replaceFirstLast = (str) => {
    str = str.trim()
    if (str.length <= 1) {
        return " ";
    }
    const firstChar = str[0];
    const lastChar = str[str.length - 1];
    return lastChar + str.slice(1, -1) + firstChar;
}
console.log(replaceFirstLast(""));
console.log(replaceFirstLast("Hello"));
console.log(replaceFirstLast("Tech Global"));
console.log(replaceFirstLast("A"));
console.log(replaceFirstLast("  A  "));


console.log("\n-----------------------------\n");

/*
Write a function named hasVowel() which takes a string argument and returns true if the string has a vowel, returns false if the string doesn’t contain any vowel letter.

NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.

*/


// Task- 03
const hasVowel = (str) => {
    str = str.toLowerCase()
    if (str.includes("a") ||
        str.includes("e") ||
        str.includes("i") ||
        str.includes("o") ||
        str.includes("u")) return true
    else return false
}
console.log(hasVowel("")); // false
console.log(hasVowel("JavaScript")); // true
console.log(hasVowel("Tech Global")); // true
console.log(hasVowel("1234"));// false
console.log(hasVowel("ABC"));// true


console.log("\n-----------------------------\n");

/*
Requirement:
Write a function named checkAge() which takes a number argument to be considered as the yearOfBirth and returns a message below based on the given year.

If the age is less than 16, then print "AGE IS NOT ALLOWED”"
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"
NOTE: Consider someone born in 2013 is 10 years old as of 2023.

*/


// Task- 4

function checkAge(number) {
    let born = 2023 - number;
    if (born >= 16 && born <= 119) {
        return "AGE IS ALLOWED";
    }
    else if (born < 16) {
        return "AGE IS NOT ALLOWED";
    }
    else return "AGE IS NOT VALID";
}
console.log(checkAge(2015));
console.log(checkAge(2007));
console.log(checkAge(2050));
console.log(checkAge(1920));
console.log(checkAge(1800));


console.log("\n-----------------------------\n");

/*
Requirement:
Write a function named averageOfEdges() which takes three number arguments and will return average of min and max numbers​.
*/

// Task-05

const avarageOfEdges = (num1, num2, num3) => {
    let max = Math.max(num1, num2, num3);
    let min = Math.min(num1, num2, num3);
    return (max + min) / 2
}
console.log(avarageOfEdges(0, 0, 0)); // 0
console.log(avarageOfEdges(0, 0, 6)); // 3
console.log(avarageOfEdges(-2, -2, 10)); // 4
console.log(avarageOfEdges(-3, 15, -3)); // 6
console.log(avarageOfEdges(10, 13, 20)); // 15

console.log("\n-----------------------------\n");
/*
Requirement:
Write a function named noA() which takes an array of strings as argument and will return a new array with all elements starting with "A" or "a" replaced with "###".
*/
//-Task-07

function noA(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === "A" || arr[i][0] === "a") {
            newArray.push("###");
        }
        else newArray.push(arr[i]);
    }
    return newArray;
}
console.log(noA(["JavaScript", "hello", "123", "xyz"]));
console.log(noA(["Apple", "123", "ABC", "javascript"]));
console.log(noA(["Apple", "abc", "ABC", "Alex", "A"]));

console.log("\n-----------------------------\n");

/*
Write a function named no3and5() which takes an array of integer numbers as argument and will return a new array with elements replaced by conditions below.

*/

// task -7


const no3and5 = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 5 === 0 && array[i] % 3 === 0) {
            newArray.push(101);
        }
        else if (array[i] % 3 === 0) {
            newArray.push(100);
        }
        else if (array[i] % 5 === 0) {
            newArray.push(99);
        }
        else newArray.push(array[i]);
    }
    return newArray;
}

console.log(no3and5([7, 4, 11, 23, 17])); // -> [7, 4, 11, 23, 17]
console.log(no3and5([3, 4, 5, 6])); //  ->[100, 4, 99, 100]
console.log(no3and5([10, 11, 12, 13, 14, 15])); //  ->[99, 11, 100, 13, 14, 101]


console.log("\n-----------------------------\n");

/*
Requirement:
Write a function named countPrimes() which takes an array of integer numbers as argument and will return the number of the prime numbers in the given array.

NOTE: Prime number is a number that can be divided only by 1 and itself​.
NOTE: Negative numbers cannot be prime​.
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc.​
NOTE: Smallest prime number is 2.

*/

// Task - 8
function countPrimes(array) {
    let count = 0;
    for (const num of array) {
        if (num < 2) continue;
        if (num % Math.sqrt(num) === 0) continue;
        else count++
    }
    return count;
}
console.log(countPrimes([-10, -3, 0, 1])); // 0
console.log(countPrimes([7, 4, 11, 23, 17])); //4
console.log(countPrimes([41, 53, 19, 47, 67])); //5


console.log("\n-----------------------------\n");

/*
Requirement:
Write a function named removeDuplicates() which takes an array argument and returns a new array with all the duplicates removed.

*/

// Task- 9

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));
console.log(removeDuplicates([1, 2, 5, 2, 3]));
console.log(removeDuplicates([0, -1, -2, -2, -1]));
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));
console.log(removeDuplicates(["1", "2", "3", "2", "3"]));


console.log("\n-----------------------------\n");


/*
Requirement: 
Write a method named isDateFormatValid() that takes a string as an argument and returns true if the given date is valid or returns false otherwise.
Expected Format: nn/nn/nnnn
So, it must be presented as <2digits>/<2digits>/<4digits>

*/

// Task-10
function isDateFormatValid(str) {
    let array = str.trim().split("/")
    if (array.length !== 3) return false;
    if (array[0].length !== 2 || parseInt(array > 12 || array < 1)) return false;
    if (array[1].length !== 2 || parseInt(array > 31 || array < 1)) return false;
    if (array[2].length !== 4) return false;
    else return true;
}
console.log(isDateFormatValid("")); // false
console.log(isDateFormatValid("15/30/2020")); // false
console.log(isDateFormatValid("10-30-2020")); // false
console.log(isDateFormatValid("10.30.2020")); // false
console.log(isDateFormatValid("5/30/2020")); // false
console.log(isDateFormatValid("05/30/2020")); // true
console.log(isDateFormatValid("10/2/2020")); // false
console.log(isDateFormatValid("10/02/2023")); // true


console.log("\n-----------------------------\n");
/*
Requirement: 
Write a method named secondMax() takes an array argument and returns the second max number from the array.

NOTE: Assume that you will not be given empty array and if the array has only 1 element, it will be returned as second max number.

NOTE: Be careful when there is multiple max numbers.
*/

// Task-11
function secondMax(array) {
    let max = Math.max(...array);
    let secondMax = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array.length === 1) return array[i]
        if (array[i] > secondMax && array[i] < max) {
            secondMax = array[i];
        }
    }
    return secondMax;
}
console.log(secondMax([7, 4, 4, 4, 23, 23, 23])); // 7
console.log(secondMax([3, 4, 5, 6])); // 5
console.log(secondMax([10])); // 10

console.log("\n-----------------------------\n");

/*
Write a method named secondMin() takes an array argument and returns the second min number from the array.

NOTE: Assume that you will not be given empty array and if the array has only 1 element, it will be returned as second min number.

NOTE: Be careful when there is multiple min numbers.

*/

// Task-12
function secondMin(array) {
    let min = Math.min(...array)
    let secondMin = Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array.length === 1) return array[i];
        if (array[i] < secondMin && array[i] > min) {
            secondMin = array[i]
        }
    }
    return secondMin;
}
console.log(secondMin([7, 4, 4, 4, 23, 23, 23])); // 7
console.log(secondMin([3, 4, 5, 6])); // 4
console.log(secondMin([10])); // 10


// task 13 not able to solve or understand this issue. tools have not beeing explained in the school. 