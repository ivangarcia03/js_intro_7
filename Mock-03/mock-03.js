





/*
Is Power Of 3
Write a function named isPowerOf3() which takes a number argument and returns true if given
number is equal to 3 power of the X. Otherwise, return false.
NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243….
NOTE: Ignore negative scenarios.
Examples:
isPowerOf3(1) -> true
isPowerOf3(2) -> false
isPowerOf3(3) -> true
isPowerOf3(27) -> true
isPowerOf3(100) -> false
isPowerOf3(81) -> true
isPowerOf3(9) -> true
*/

function isPowerOf3(num){
    for(let i = num; i > 0; i/=3){
    if(i === 1) return true
    }
    return false;
}




console.log(isPowerOf3(1)); // -> true
console.log(isPowerOf3(2)); // -> false
console.log(isPowerOf3(3)); // -> true
console.log(isPowerOf3(27)); // -> true
console.log(isPowerOf3(100)); // -> false
console.log(isPowerOf3(81)); // -> true
console.log(isPowerOf3(9)); // -> true

console.log("\n-----------------------------\n");

/*
Find Biggest Number
Write a function named findBiggestNumber() which takes a string argument and returns the
biggest number appears in the string.
Examples:
findBiggestNumber("abc$") -> 0
findBiggestNumber("a1b4c 6#") -> 6
findBiggestNumber("ab110c045d") -> 110
findBiggestNumber("525") -> 525
findBiggestNumber("3 for 10 dollars") -> 10


*/
function findBiggestNumber(str){
    let numbers = str.match(/\d+/g)

    if(!numbers){
        return 0
    }
    let maxNumber = Math.max(...numbers.map(Number))
    return maxNumber;
}



console.log(findBiggestNumber("abc$")); // 		-> 0
console.log(findBiggestNumber("a1b4c 6#")); // 		-> 6
console.log(findBiggestNumber("ab110c045d")); // 		-> 110
console.log(findBiggestNumber("525")); //		-> 525
console.log(findBiggestNumber("3 for 10 dollars")); // 	-> 10


console.log("\n-----------------------------\n");

/*
Find Sum Numbers
Write a function named findSumNumbers() which takes a string argument and returns sum of
the all numbers appears in the string.
Examples:
findSumNumbers("abc$") -> 0
findSumNumbers("a1b4c 6#") -> 11
findSumNumbers("ab110c045d") -> 155
findSumNumbers("525") -> 525
findSumNumbers("3 for 10 dollars") -> 13


*/
const findSumNumbers = (str) =>{
    let numbers = str.match(/\d+/g);
    if(numbers) return numbers.reduce((sum, num) => sum + parseInt(num), 0 )
    else return 0
}




console.log(findSumNumbers("abc$")); // -> 0
console.log(findSumNumbers("a1b4c  6#")); // -> 11
console.log(findSumNumbers("ab110c045d")); // -> 155
console.log(findSumNumbers("525")); // -> 525
console.log(findSumNumbers("3 for 10 dollars")); // -> 13

console.log("\n-----------------------------\n");

/*
Fibonacci Series 1
Write a function named fibonacciSeries1() which takes a number n argument and returns the
n series of Fibonacci numbers as an array.
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
Examples:
fibonacciSeries1(3) -> [0, 1, 1]
fibonacciSeries1(5) -> [0, 1, 1, 2, 3]
fibonacciSeries1(7) -> [0, 1, 1, 2, 3, 5, 8]
fibonacciSeries1(8) -> [0, 1, 1, 2, 3, 5, 8, 13]
fibonacciSeries1(1) -> [0]
fibonacciSeries1(2) -> [0, 1]


*/

function fibonacciSeries1(num){
    if(num === 1) return [0]
    if(num === 2) return [0, 1]
    let results = [0, 1]

    for(let i = 2; i < num; i++){
        results.push(results[i - 1] + results[i - 2])

    }
    return results
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
const fibonacciSeries2 = (num) =>{
    if(num === 1) return 0
    if(num === 2) return 1
    let result = [0, 1]

    for(let i = 2; i < num; i++){
        result.push(result[result.length -1] + result[result.length -2])
    }
    return result[result.length -1]
}  



console.log(fibonacciSeries2(2)); // 1
console.log(fibonacciSeries2(4)); // 2
console.log(fibonacciSeries2(8)); //13
console.log(fibonacciSeries2(9)); //21
console.log(fibonacciSeries2(1)); // 0


/*
Find Uniques
Write a function named findUniques() which takes two array of number arguments and returns
the array which has only the unique values from both given arrays.
NOTE: If both arrays are empty, then return an empty array.
NOTE: If one of the array is empty, then return unique values from the other array.
Examples:
findUniques([], []) -> []
findUniques([], [1, 2, 3, 2]) -> [1, 2, 3]
findUniques([1, 2, 3, 4], [3, 4, 5, 5]) -> [1, 2, 5]
findUniques([8, 9], [9, 8, 9]) -> []
findUniques([-1, -2], [1, 2]) -> [-1, -2, 1, 2]


*/
const findUniques = (arr1, arr2) =>{
    let uniqueArr = arr1.concat(arr2);

    let filterArr = uniqueArr.filter(i => !(arr1.includes(i) && arr2.includes(i)))

    const set = new Set(filterArr);

    return [...set]

}



console.log(findUniques([], [])); // -> []
console.log(findUniques([], [1, 2, 3, 2])); // -> [1, 2, 3]
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5])); // -> [1, 2, 5]
console.log(findUniques([8, 9], [9, 8, 9])); // -> []
console.log(findUniques([-1, -2], [1, 2])); // -> [-1, -2, 1, 2]

console.log("\n-----------------------------\n");

/*
Reverse Number
Write a function named reverseNumber() which takes a number argument and returns it back
reversed without converting it to a String.
Note: Do not convert number to string to complete the task.
Examples:
reverseNumber(371) -> 173
reverseNumber(123) -> 321
reverseNumber(12) -> 21
reverseNumber(0) -> 0
reverseNumber(111) -> 111

*/
function reverseNumber(num){
    let reversed = 0
    for(let i = num; i > 0; i = Math.floor(i/10)){
        reversed = (reversed * 10) + (i % 10)
    }
    return reversed
}



console.log(reverseNumber(371)); //  -> 173
console.log(reverseNumber(123)); //  -> 321
console.log(reverseNumber(12)); //  -> 21
console.log(reverseNumber(0)); //  -> 0
console.log(reverseNumber(111)); //  -> 111

console.log("\n-----------------------------\n");

/*
Is Armstrong
Write a function named isArmstrong() which takes a number argument and returns true if
given number is armstrong, return false otherwise.
NOTE: An armstrong number is a number that is equal to the sum of its own digits raised to the
power of the number of digits. In other words, an n-digit number is an Armstrong number if the
sum of its digits, each raised to the nth power, is equal to the number itself.
• Let's take an example to understand it better. Consider the number 153.
• To determine if 153 is an armstrong number, we need to check if the sum of its
digits, each raised to the power of the number of digits, equals the original
number.
• 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
• In this case, the sum of the individual digits raised to the power of 3 (the number
of digits in 153) is equal to the original number, which means 153 is an armstrong
number.
Examples:
isArmstrong(153) -> true
isArmstrong(123) -> false
isArmstrong(1634) -> true
isArmstrong(153) -> true
isArmstrong(1111) -> false

*/


const isArmstrong = (num) =>{
    let strNum = num.toString();
    let n = strNum.length
    let sum = 0
    for(let i = 0; i < n; i++){
      sum += Math.pow(parseInt(strNum[i]), n)
    }
    return sum === num;
  }
  console.log(isArmstrong(153)); // true
  console.log(isArmstrong(123)); //  -> false
  console.log(isArmstrong(1634)); //  -> true
  console.log(isArmstrong(153)); //  -> true
  console.log(isArmstrong(1111)); //  -> false

  console.log("\n-----------------------------\n");

  /*
Is Anagram
Write a function named isAnagram() which takes two string arguments and returns true if the
given strings are anagram. Return false otherwise.
NOTE: An anagram is a word or phrase formed by rearranging the letters of another word or
phrase. In the context of strings, checking if two strings are anagrams of each other means
verifying if they contain the same characters in the same quantities, regardless of the order of
those characters.
NOTE: This method is case-insensitive and ignore the white spaces.
Examples:
isAnagram("Apple", "Peach") -> false
isAnagram("listen", "silent") -> true
isAnagram("astronomer", "moon starer") -> true
isAnagram("CINEMA", "iceman") -> true
isAnagram("123", "1234") - > false


  */

const isAnagram = (str, str1) => {
    let duplicated = ""
    let strF = str.split("").join(" ")
    for (let i = 0; i <= str1.length; i++) {
        if(strF.toLowerCase().includes(str1[i])) {
        strF = strF.replace(str1[i], " ")
        duplicated +=str1[i]
        }
    }
    return duplicated === str1
}

console.log(isAnagram("Apple", "Peach")); //		-> false
console.log(isAnagram("listen", "silent")); //		-> true
console.log(isAnagram("astronomer", "moon starer")); //	-> true
console.log(isAnagram("CINEMA", "iceman")); //	-> true
console.log(isAnagram("123", "1234")); //		-> false


console.log("\n-----------------------------\n");
/*
Count Palindrome
Write a function named countPalindrome() which takes a string and returns the number
of palindrome words.
Note: A palindrome word is a word that reads the same forwards and backwards. Example:
level, radar, deed, refer.
Examples:
countPalindrome("Mom and Dad") -> 2
countPalindrome("See you at noon") -> 1
countPalindrome("Kayak races attracts racecar drivers") -> 2
countPalindrome("") -> 0
countPalindrome("No palindrome here") -> 0

*/

function countPalindrome(str){
    let words = str.toLowerCase().split(" ")
    let count = 0
    if(str === "") return 0

    for(let i = 0; i < words.length; i++){
        let reversed = words[i].toLowerCase().split("").reverse().join("")
        let letters = words[i].toLowerCase()

       if(reversed === letters) count++
    }
    return count;
}



console.log(countPalindrome("Mom and Dad" )); //  -> 2
console.log(countPalindrome("See you at noon")); //  -> 1
console.log(countPalindrome("Kayak races attracts racecar drivers")); //  -> 2
console.log(countPalindrome("")); //  -> 0
console.log(countPalindrome("No palindrome here")); //  -> 0


console.log("\n-----------------------------\n");

/*
Can Form String
Write a function named canFormString() which takes two string arguments and returns true if
the second string can be formed by rearranging the characters of first string. Return false
otherwise.
NOTE: This method is case-insensitive and ignore the white spaces.
Examples:
canFormString("Hello", "Hi") -> false
canFormString("programming", "gaming") -> true
canFormString("halogen", "hello") -> false
canFormString("CONVERSATION", "voices rant on") -> true
canFormString("12", "123") -> false

*/
function canFormString(str1, str2){
    let arr1 = str1.toLowerCase().split("");
    let arr2 = str2.toLowerCase().split("").filter(x => x != " ")

    for(let i = 0; i < arr2.length; i++){
        if(arr1.includes(arr2[i])) arr1.splice(arr1.indexOf(arr2[i]), 1)
        else return false
    }
    return true;
}



console.log(canFormString("Hello", "Hi")); //			-> false
console.log(canFormString("programming", "gaming")); //		-> true
console.log(canFormString("halogen", "hello")); //		-> false
console.log(canFormString("CONVERSATION", "voices rant on")); //	-> true
console.log(canFormString("12", "123")); // 			-> false

console.log("\n-----------------------------\n");

/*

Count Occurrence
Write a function named countOccurrence() which takes two string arguments and returns how
many times that the first string can form the second string.
NOTE: This method is case-insensitive and ignore the white spaces.
Examples:
countOccurrence("Javascript", "Java") -> 1
countOccurrence("Hello", "World") -> 0
countOccurrence("Can I can a can", "anc") -> 3
countOccurrence("Hello", "l") -> 2
countOccurrence("IT conversations", "IT") -> 2

*/

function countOccurrence(str1, str2){
    let duplicated = ""
    for(let i = 0; i < str1.length; i++){
        if(str2.toLowerCase().includes(str1[i].toLowerCase())){
            duplicated += str1[i]
        }
    }
    if(duplicated.length >= str2.length) return Math.floor(duplicated.length/ str2.length)
    else return 0
}




console.log(countOccurrence("Javascript", "Java")); // 1
console.log(countOccurrence("Hello", "World")); // 0
console.log(countOccurrence("Can I can a can", "anc")); // 3
console.log(countOccurrence("Hello", "l")); // 2
console.log(countOccurrence("IT conversations", "IT")); // 2