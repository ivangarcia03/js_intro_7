/*
Reverse String
Write a function named reverseString() which takes a string argument and returns the given 
string reversed.
UNIT TESTS:
reverseString("Hello World") -> "dlroW olleH"
reverseString("TechGlobal") -> "labolGhceT"
reverseString("Basketball is fun") -> "nuf si llabteksaB"
reverseString("") -> ""
reverseString("Apples 456") -> "654 selppA"

*/

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Hello World")); //-> "dlroW olleH"
console.log(reverseString("TechGlobal")); // -> "labolGhceT"
console.log(reverseString("Basketball is fun")); // -> "nuf si llabteksaB"
console.log(reverseString("")); // -> ""
console.log(reverseString("Apples 456")); // -> "654 selppA"

console.log("\n-----------------------------\n");

/*
Reverse Number
Write a function named reverseNumber() which takes a number argument and returns it back 
reversed without converting it to a String.
NOTE: Do not convert numbers to strings to complete the task.
UNIT TESTS:
reverseNumber(371) -> 173
reverseNumber(123) -> 321
reverseNumber(12) -> 21
reverseNumber(0) -> 0
reverseNumber(111) -> 111

*/
function reverseNumber(num) {
  let reverse = 0;
  for (let i = num; i > 0; i = Math.floor(i / 10)) {
    reverse = reverse * 10 + (i % 10);
  }
  return reverse;
}

console.log(reverseNumber(371)); // -> 173
console.log(reverseNumber(123)); // -> 321
console.log(reverseNumber(12)); // -> 21
console.log(reverseNumber(0)); // -> 0
console.log(reverseNumber(111)); // -> 111

console.log("\n-----------------------------\n");

/*
Reverse String Words
Write a function named reverseStringWords() which takes a string as an argument and returns 
the string with each word separately reversed.
NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces 
before and after words in the given string.
UNIT TESTS:
reverseStringWords("Hello World") -> "olleH dlroW"
reverseStringWords("I like JavaScript") -> "I ekil tpircSavaJ"
reverseStringWords("Hello") -> "olleH"
reverseStringWords("") -> ""
reverseStringWords(" ") -> ""

*/
function reverseStringWords(str) {
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("").reverse().join("");
  }

  return words.join(" ");
}

console.log(reverseStringWords("Hello World")); // -> "olleH dlroW"
console.log(reverseStringWords("I like JavaScript")); // -> "I ekil tpircSavaJ"
console.log(reverseStringWords("Hello")); // -> "olleH"
console.log(reverseStringWords("")); // -> ""
console.log(reverseStringWords(" ")); // -> ""

console.log("\n-----------------------------\n");

/*
Reverse Sentence
Write a function named reverseSentence() which takes a string as argument and returns the 
words in reverse order. If there are not enough words reverse, return "There are not enough 
words!".
UNIT TESTS:
reverseSentence("Hello") -> "There are not enough words!"
reverseSentence("Javascript is fun") -> "Fun is javascript"
reverseSentence("A b c") -> "C b a"
reverseSentence("Five dollars") -> "Dollars five"

*/

function reverseSentence(str) {
  let first = str.slice(0, str.indexOf(" "));
  let middle = str.slice(str.indexOf(" "), str.lastIndexOf(" ") + 1);
  let last = str.slice(str.lastIndexOf(" ") + 1);

  if (str.includes(" ")) return last + middle + first;
  else return "There are not enough words!";
}

console.log(reverseSentence("Hello")); // -> "There are not enough words!"
console.log(reverseSentence("Javascript is fun")); // -> "Fun is javascript"
console.log(reverseSentence("A b c")); // -> "C b a"
console.log(reverseSentence("Five dollars")); // -> "Dollars five"

console.log("\n-----------------------------\n");

/*
Palindrome
Write a function named isPalindrome() which takes a string word as an argument and returns 
true if the word is palindrome or returns false otherwise.
NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam
NOTE: The function should ignore case sensitivity
UNIT TESTS:
isPalindrome("Hello") -> false
isPalindrome("Kayak") -> true
isPalindrome("abba") -> true
isPalindrome("ab a") -> false
isPalindrome("123454321") -> true
isPalindrome("A") -> true
isPalindrome("") -> true


*/
function isPalindrome(str) {
  let reverse = str.toLowerCase().split("").reverse().join("");
  let words = str.toLowerCase();

  if (words === reverse) return true;
  else return false;
}

console.log(isPalindrome("Hello")); // -> false
console.log(isPalindrome("Kayak")); // -> true
console.log(isPalindrome("abba")); // -> true
console.log(isPalindrome("ab a")); // -> false
console.log(isPalindrome("123454321")); // -> true
console.log(isPalindrome("A")); // -> true
console.log(isPalindrome("")); // -> true

console.log("\n-----------------------------\n");

/*
Count Palindrome
Write a function named countPalindrome() which takes a string and returns the number of 
palindrome words.
NOTE:: A palindrome word is a word that reads the same forwards and backwards. Example: 
level, radar, deed, refer.
UNIT TESTS:
countPalindrome("Mom and dad") -> 2
countPalindrome("See you at noon") -> 1
countPalindrome("") -> 0
countPalindrome("No palindrome here") -> 0

*/

function countPalindrome(str) {
  if (str === "") return 0;
  let count = 0;
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    let reverse = words[i].toLowerCase().split("").reverse().join("");
    let letters = words[i].toLowerCase();

    if (reverse === letters) count++;
  }
  return count;
}

console.log(countPalindrome("Mom and dad")); // -> 2
console.log(countPalindrome("See you at noon")); // -> 1
console.log(countPalindrome("")); // -> 0
console.log(countPalindrome("No palindrome here")); // -> 0

console.log("\n-----------------------------\n");

/*
Fizz Buzz
Write a function named fizzBuzz() which takes a number argument and returns an array 
consisting of numbers starting from 1 to the given number.
However, it will return "Fizz" for the numbers divided by 3, "Buzz" for the numbers divided by 5, 
and "FizzBuzz" for the numbers divided by 3 and 5.
UNIT TESTS:
fizzBuzz(3) -> [ 1, 2, 'Fizz' ]
fizzBuzz(5) -> [ 1, 2, 'Fizz', 4, 'Buzz' ]
fizzBuzz(10) -> [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz' ]
fizzBuzz(15) -> [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz' ]
fizzBuzz(2) -> [ 1, 2 ]


*/

function fizzBuzz(num) {
  let newArray = [];

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) newArray.push("FizzBuzz");
    else if (i % 3 === 0) newArray.push("Fizz");
    else if (i % 5 === 0) newArray.push("Buzz");
    else newArray.push(i);
  }
  return newArray;
}

console.log(fizzBuzz(3)); // -> [ 1, 2, 'Fizz' ]
console.log(fizzBuzz(5)); // -> [ 1, 2, 'Fizz', 4, 'Buzz' ]
console.log(fizzBuzz(10)); // -> [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz' ]
console.log(fizzBuzz(15)); // -> [ 1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz' ]
console.log(fizzBuzz(2)); // -> [ 1, 2 ]

console.log("\n-----------------------------\n");

/*
Factorial
Write a function named factorial() which takes a number as an argument and returns the 
factorial of the number.
NOTE: Mathematically, the factorial of a non-negative integer n is defined as: n! = n × (n-1) × 
(n-2) × ... × 2 × 1
NOTE: Assume you will not be given a negative number.
UNIT TESTS:
factorial(5) -> 120
factorial(4) -> 24
factorial(0) -> 1
factorial(1) -> 1

*/
function factorial(num) {
  let factorial = 1;

  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log(factorial(5)); // -> 120
console.log(factorial(4)); // -> 24
console.log(factorial(0)); // -> 1
console.log(factorial(1)); // -> 1

console.log("\n-----------------------------\n");

/*
Array Factorial
Write a function named arrFactorial() which takes an array of numbers as argument and 
returns the array with every number replaced with their factorials.
UNIT TESTS:
arrFactorial([1, 2, 3 ,4]) -> [1, 2, 6, 24]
arrFactorial([0, 5]) -> [1,120]
arrFactorial([5 , 0, 6]) -> [120, 1, 720]
arrFactorial([]) -> []

*/

function arrFactorial(array) {
  let newArray = [];

  for (const num of array) {
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
      factorial *= i;
    }
    newArray.push(factorial);
  }
  return newArray;
}

console.log(arrFactorial([1, 2, 3, 4])); // -> [1, 2, 6, 24]
console.log(arrFactorial([0, 5])); // -> [1,120]
console.log(arrFactorial([5, 0, 6])); // -> [120, 1, 720]
console.log(arrFactorial([])); // -> []

console.log("\n-----------------------------\n");

/*
Fibonacci Series
Write a function named fibonacciSeries() which takes a number n argument and returns the n 
series of Fibonacci numbers as an array. 
NOTE: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21…
UNIT TESTS:
fibonacciSeries(3) -> [0, 1, 1]
fibonacciSeries(5) -> [0, 1, 1, 2, 3]
fibonacciSeries(7) -> [0, 1, 1, 2, 3, 5, 8]
fibonacciSeries(8) -> [0, 1, 1, 2, 3, 5, 8, 13]

*/
function fibonacciSeries(num) {
  let results = [0, 1];

  for (let i = 2; i < num; i++) {
    results.push(results[i - 1] + results[i - 2]);
  }
  return results;
}

console.log(fibonacciSeries(3)); // -> [0, 1, 1]
console.log(fibonacciSeries(5)); // -> [0, 1, 1, 2, 3]
console.log(fibonacciSeries(7)); // -> [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacciSeries(8)); // -> [0, 1, 1, 2, 3, 5, 8, 13]

console.log("\n-----------------------------\n");

/*
Is Armstrong
Write a function named isArmstrong() which takes a number argument and returns true if the 
given number is Armstrong, return false otherwise.
NOTE: An Armstrong number is a number that is equal to the sum of its digits raised
to the power of the number of digits. In other words, an n-digit number is an Armstrong number 
if the sum of its digits, each raised to the nth power, is equal to the number itself.
• Let's take an example to understand it better. Consider the number 153.
• To determine if 153 is an Armstrong number, we need to check if the sum of its digits, 
each raised to the power of the number of digits, equals the original number.
• 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
• In this case, the sum of the individual digits raised to the power of 3 (the number of digits 
in 153) is equal to the original number, which means 153 is an Armstrong number.
UNIT TESTS:
isArmstrong(153) -> true
isArmstrong(123) -> false
isArmstrong(1634) -> true
isArmstrong(153) -> true
isArmstrong(1111) -> false


*/
function isArmstrong(num) {
  let strN = num.toString();
  let n = strN.length;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += Math.pow(parseInt(strN[i]), n);
  }
  return num === sum;
}

console.log(isArmstrong(153)); // -> true
console.log(isArmstrong(123)); // -> false
console.log(isArmstrong(1634)); //-> true
console.log(isArmstrong(153)); // -> true
console.log(isArmstrong(1111)); // -> false

console.log("\n-----------------------------\n");

/*
Is Anagram
Write a function named isAnagram() which takes two string arguments and returns true if the 
given strings are anagram. Return false otherwise.
NOTE: An anagram is a word or phrase formed by rearranging the letters of another word or 
phrase. In the context of strings, checking if two strings are anagrams of each other means 
verifying if they contain the same characters in the same quantities, regardless of the order of 
those characters.
NOTE: This method is case-insensitive and ignores the white spaces.
UNIT TESTS:
isAnagram("Apple", "Peach") -> false
isAnagram("listen", "silent") -> true
isAnagram("astronomer", "moon starer") -> true
isAnagram("CINEMA", "iceman") -> true
isAnagram("123", "1234") -> false


*/
function isAnagram(str1, str2) {
  let duplicated = "";
  let strF = str1.split("").join(" ");

  for(let i = 0; i <= str2.length; i++){
    if(strF.toLowerCase().includes(str2[i])){
      strF = strF.replace(str2[i], " ")
      duplicated += str2[i]
    }
  }
  return duplicated === str2
}

console.log(isAnagram("Apple", "Peach")); // -> false
console.log(isAnagram("listen", "silent")); // -> true
console.log(isAnagram("astronomer", "moon starer")); // -> true
console.log(isAnagram("CINEMA", "iceman")); // -> true
console.log(isAnagram("123", "1234")); // -> false

console.log("\n-----------------------------\n");

/*
Prime Number
Write a function named isPrime() which takes a number as an argument and returns true if the 
number is prime or returns false otherwise.
NOTE: Mathematically, the Prime number is a number that can be divided only by itself and 1. It 
cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even 
prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
NOTE: The smallest prime number is 2 and there are no negative prime numbers.
UNIT TESTS:
isPrime(5) -> true
isPrime(2) -> true
isPrime(29) -> true
isPrime(-5) -> false
isPrime(0) -> false
isPrime(1) -> false



*/

function isPrime(num){
  if(num <= 1) return false
  if(num === 2) return true

  for(let i = 2; i < num; i++){
    if(num % i === 0) return false
    else return true
  }
}


console.log(isPrime(5)); // -> true
console.log(isPrime(2)); // -> true
console.log(isPrime(29)); // -> true
console.log(isPrime(-5)); // -> false
console.log(isPrime(0)); // -> false
console.log(isPrime(1)); //-> false

console.log("\n-----------------------------\n");

/*
Count Prime Numbers
Write a function named countPrimes() which takes an array of integer numbers as an 
argument and will return the number of the prime numbers in the given array.
NOTE: Mathematically, the Prime number is a number that can be divided only by itself and 1. It 
cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even 
prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
NOTE: The smallest prime number is 2 and there are no negative prime numbers.
UNIT TESTS:
countPrimes([-10, -3, 0, 1]) -> 0
countPrimes([7, 4, 11, 23, 17]) -> 4
countPrimes([41, 53, 19, 47, 67]) -> 5
countPrimes([0]) -> 0
countPrimes([2, 2, 2, 2, 2, 2]) -> 6
countPrimes([29,31,37]) -> 3


*/

function countPrimes(array){
   return array.filter( num =>{
    if(num < 2) return false;
    if(num === 2) return true
    for(let i = 2; i < num; i++){
      if(num % i === 0) return false
      else return true
    }
   }).length
}


console.log(countPrimes([-10, -3, 0, 1])); // -> 0
console.log(countPrimes([7, 4, 11, 23, 17])); // -> 4
console.log(countPrimes([41, 53, 19, 47, 67])); // -> 5
console.log(countPrimes([0])); // -> 0
console.log(countPrimes([2, 2, 2, 2, 2, 2])); // -> 6
console.log(countPrimes([29,31,37])); // -> 3

console.log("\n-----------------------------\n");



/*
Most Repeated Element in an Array
Write a method named mostRepeated() takes an array argument and returns the most counted 
element from the array.
NOTE: Assume that you will not be given an empty array and the count of one element will 
always be more than the others.
UNIT TESTS:
mostRepeated([4, 7, 4, 4, 4, 23, 23, 23]) -> 4
mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"]) -> "pen"
mostRepeated(["TechGlobal"]) -> "TechGlobal"
mostRepeated([‘A’, ‘B’, ‘A’, ‘B’, ‘A’]) -> ‘A’
*/










/*
The Biggest Number in a String
Write a function named biggestNumber() which takes a string argument and returns the 
biggest number appears in the string.
UNIT TESTS:
biggestNumber("abc$") -> 0
biggestNumber("a1b4c 6#") -> 6
biggestNumber("ab110c045d") -> 110
biggestNumber("525") -> 525
biggestNumber("3 for 10 dollars") -> 10
*/
function biggestNumber(str){
  let num = str.match(/\d+/g);
  
  if(!num){
    return 0
  }
   let maxNumber = Math.max(...num.map(Number))
   return maxNumber;
}




console.log(biggestNumber("abc$")); // -> 0
console.log(biggestNumber("a1b4c 6#")); // -> 6
console.log(biggestNumber("ab110c045d")); // -> 110
console.log(biggestNumber("525")); // -> 525
console.log(biggestNumber("3 for 10 dollars")); // -> 10

console.log("\n-----------------------------\n");

/*
Sum of the Digits in a String
Write a function named sumDigits() which takes a string and returns the sum of the digits in 
the given String. Return -1 if the given string does not have any digits. Ignore negative numbers.
UNIT TESTS:
sumDigits("Javascript") -> -1
sumDigits("23abc45") -> 14
sumDigits("Hi-23") -> 5
sumDigits("ab12") -> 3
sumDigits("n0numh3r3") -> 6

*/
function sumDigits(str){
  let strF = str.split("").join (" ")
  let numbers = strF.match(/\d+/g)
  

  if(numbers) return numbers.reduce((sum, num) => sum + parseInt(num), 0)
  else return -1
}


console.log(sumDigits("Javascript")); // -> -1
console.log(sumDigits("23abc45")); // -> 14
console.log(sumDigits("Hi-23")); // -> 5
console.log(sumDigits("ab12")); // -> 3
console.log(sumDigits("n0numh3r3")); // -> 6

console.log("\n-----------------------------\n");

/*
Sum of the Numbers in a String
Write a function named sumNumbers() which takes a string argument and returns sum of all
numbers appears in the string.
UNIT TESTS:
sumNumbers("abc$") -> 0
sumNumbers("a1b4c 6#") -> 11
sumNumbers("ab110c045d") -> 155
sumNumbers("525") -> 525
sumNumbers("3 for 10 dollars") -> 13

*/

function sumNumbers(str){
  let numbers = str.match(/\d+/g)

  if(numbers) return numbers.reduce((sum, num) => sum + parseInt(num), 0)
  else return 0
}



console.log(sumNumbers("abc$")); // -> 0
console.log(sumNumbers("a1b4c 6#")); // -> 11
console.log(sumNumbers("ab110c045d")); // -> 155
console.log(sumNumbers("525")); // -> 525
console.log(sumNumbers("3 for 10 dollars")); // -> 13

console.log("\n-----------------------------\n");

/*
Max Number in an Array
Write a method named max() takes an array argument and returns the max number from the 
array.
NOTE: Assume that you will not be given an empty array.
UNIT TESTS:
max([7, 4, 4, 4, 23, 23, 23]) -> 23
max([3, 4, 5, 6]) -> 6
max([10]) -> 10
max([-1, -2, -3, -4]]) -> -1
max([0]) -> 0
max([1, 2]) -> 2

*/

function max(array){
  return Math.max(...array)
}



console.log(max([7, 4, 4, 4, 23, 23, 23])); // -> 23
console.log(max([3, 4, 5, 6])); // -> 6
console.log(max([10])); // -> 10
console.log(max([-1, -2, -3, -4])); // -> -1
console.log(max([0])); // -> 0
console.log(max([1, 2])); // -> 2

console.log("\n-----------------------------\n");

/*
Min Number in an Array
Write a method named min() takes an array argument and returns the min number from the 
array.
NOTE: Assume that you will not be given an empty array.
UNIT TESTS:
min([7, 4, 4, 4, 23, 23, 23]) -> 4
min([3, 4, 5, 6]) -> 3
min([10]) -> 10
min([-1, -2, -3, -4]) -> -4
min([0]) -> 0
min([1, 2]) -> 1

*/

function min(array){
  return Math.min(...array)
}


console.log(min([7, 4, 4, 4, 23, 23, 23])); // -> 4
console.log(min([3, 4, 5, 6])); // -> 3
console.log(min([10])); // -> 10
console.log(min([-1, -2, -3, -4])); // -> -4
console.log(min([0])); // -> 0
console.log(min([1, 2])); // -> 1

console.log("\n-----------------------------\n");



/*
Second Max Number in an Array
Write a method named secondMax() takes an array argument and returns the second max 
number from the array.
NOTE: Assume that you will not be given an empty array and if the array has only 1 element, it 
will be returned as a second max number.
NOTE: Be careful when there are multiple max numbers.
UNIT TESTS:
secondMax([7, 4, 4, 4, 23, 23, 23]) -> 7
secondMax([3, 4, 5, 6]) -> 5
secondMax([10]) -> 10
secondMax([-1, -2, -3, -4]]) -> -2
secondMax([0]) -> 0


*/

function secondMax(array){
  let secondMax = -Infinity
  let max = Math.max(...array)

  for(let i = 0; i < array.length; i++){
    if(array.length === 1) return array[i]
    if(array[i] > secondMax && array[i] < max ){
      secondMax = array[i]
    }
    
  }
  return secondMax
}


console.log(secondMax([7, 4, 4, 4, 23, 23, 23])); //-> 7
console.log(secondMax([3, 4, 5, 6])); // -> 5
console.log(secondMax([10])); // -> 10
console.log(secondMax([-1, -2, -3, -4])); // -> -2
console.log(secondMax([0])); // -> 0

console.log("\n-----------------------------\n");

/*
Second Min Number in an Array
Write a method named secondMin() takes an array argument and returns the second min 
number from the array.
NOTE: Assume that you will not be given an empty array and if the array has only 1 element, it 
will be returned as a second min number.
NOTE: Be careful when there are multiple min numbers.
UNIT TESTS:
secondMin([7, 4, 4, 4, 23, 23, 23]) -> 7
secondMin([3, 4, 5, 6]) -> 4
secondMin([10]) -> 10
secondMin([-1, -2, -3, -4]) -> -3
secondMin([0]) -> 0
secondMin([1, 2]) -> 2

*/

function secondMin(array){
  let min = Math.min(...array)
  let second = Infinity

  for(let i = 0; i < array.length; i++){
     if(array.length === 1) return array[i]
     if(array[i] < second && array[i] > min){
      second = array[i]
     }
  }
  return second
}




console.log(secondMin([7, 4, 4, 4, 23, 23, 23])); // -> 7
console.log(secondMin([3, 4, 5, 6])); // -> 4
console.log(secondMin([10])); // -> 10
console.log(secondMin([-1, -2, -3, -4])); // -> -3
console.log(secondMin([0])); // -> 0
console.log(secondMin([1, 2])); // -> 2

console.log("\n-----------------------------\n");

/*
Count Words
Write a function named countWords() which takes a string argument and returns the total
count of words in the given string.
NOTE: Be careful about the extra whitespaces before and after the string.
Examples:
countWords(" Javascript is fun ") -> 3
countWords("Cypress is a UI automation tool. ") -> 6
countWords("1 2 3 4") -> 4

*/
function countWords(str){
  return str.trim().split(" ").length
}



console.log(countWords(" Javascript is fun ")); // -> 3
console.log(countWords("Cypress is a UI automation tool. ")); // -> 6
console.log(countWords("1 2 3 4")); // -> 4

console.log("\n-----------------------------\n");

/*
Remove Extra Spaces
Write a function named removeExtraSpaces() which takes a string word as an argument and 
returns the string back with all extra spaces removed.
UNIT TESTS:
removeExtraSpaces("Hello") -> "Hello"
removeExtraSpaces(" Hello World ") -> "Hello World"
removeExtraSpaces(" JavaScript is fun") -> "JavaScript is fun”
removeExtraSpaces("") -> ""

*/

function removeExtraSpaces(str){
  return str.trim().replace(/\s+/g, " ")
}


console.log(removeExtraSpaces("Hello")); // -> "Hello"
console.log(removeExtraSpaces(" Hello World ")); // -> "Hello World"
console.log(removeExtraSpaces(" JavaScript is fun")); // -> "JavaScript is fun”
console.log(removeExtraSpaces("")); // -> ""

console.log("\n-----------------------------\n");

/*
Middle Number of Three
Write a function named middle() which takes three number arguments and return the middle 
number. 
UNIT TESTS:
middle(1, 2, 2) -> 2
middle(5, 5, 8) -> 5
middle(5, 3, 5) -> 5
middle(1, 1, 1) -> 1
middle(-1, 25, 10) -> 10

*/


function middle(a, b, c){
  if(a >= b && a < c) return a
  else if(b > a && b <= c) return b
  else return c

}




console.log(middle(1, 2, 2)); // -> 2
console.log(middle(5, 5, 8)); // -> 5
console.log(middle(5, 3, 5)); // -> 5
console.log(middle(1, 1, 1)); // -> 1
console.log(middle(-1, 25, 10)); // -> 10

console.log("\n-----------------------------\n");

/*
First Duplicate Element
Write a function named as firstDuplicate() which takes an array argument and returns the first 
duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates 
in the array. For two elements to be considered duplicated, the value and data types of the 
elements must be the same.
UNIT TESTS:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ]) -> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ]) -> 5
firstDuplicate([ 5, '5', 3, 7, 4 ]) -> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]) -> 'abc'
firstDuplicate([ 1, 2, 3]) -> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ]) -> -1

*/
function firstDuplicate(array){
  for(let i = 0; i < array.length; i++){
   for(let j = i + 1; j < array.length; j++){
    if(array[i] === array[j]) return array[i]
   }

  }
  return -1
}


console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ])); // -> 3
console.log(firstDuplicate([ 5, 7, 7, 0, 5, 10 ])); // -> 5
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ])); // -> -1
console.log(firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])); // -> 'abc'
console.log(firstDuplicate([ 1, 2, 3])); // -> -1
console.log(firstDuplicate([ 'foo', 'abc', '123', 'bar' ])); // -> -1

console.log("\n-----------------------------\n");

/*
All The Duplicate Elements
Write a function named as getDuplicates() which takes an array argument and returns all the 
duplicate elements in the array.
NOTE: Make your code dynamic that works for any array and return an empty array if there are 
no duplicates in the array. For two elements to be considered duplicated, the value and data 
types of the elements must be the same.
UNIT TESTS:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]) -> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ]) -> [ ]
getDuplicates(['A', 'foo', '12’, 12, 'bar', 'a', 'a', 'foo' ]) -> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12', 12, 'bar', 'a' ]) -> [ ]

*/

function getDuplicates(array){
  let duplicates = []

  for(let i = 0; i < array.length; i++){
    for(let j = i +1; j < array.length; j++){
    if(array[i] === array[j] && !duplicates.includes(array[i])) duplicates.push(array[i])
    }
  }
  return duplicates
}




console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])); // -> [ 0, -7 ]
console.log(getDuplicates([ 1, 2, 5, 0, 7 ])); // -> [ ]
console.log(getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo' ])); // -> [ 'foo', 'a’ ]
console.log(getDuplicates([ 'foo', '12', 12, 'bar', 'a' ])); // -> [ ]

console.log("\n-----------------------------\n");

/*
Remove Duplicates
Write a function named removeDuplicates() which takes an array argument and returns a new 
array with all the duplicates removed.
UNIT TESTS:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]) -> [10, 20, 35, 60, 70]
removeDuplicates([1, 2, 5, 2, 3]) -> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1]) -> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) -> ["abc", "xyz", "123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"]) -> ["1", "2", "3"]
*/
function removeDuplicates(array){
  return [... new Set(array)]
}

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])); // -> [10, 20, 35, 60, 70]
console.log(removeDuplicates([1, 2, 5, 2, 3])); // -> [1, 2, 5, 3]
console.log(removeDuplicates([0, -1, -2, -2, -1])); // -> [0, -1, -2]
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])); // -> ["abc", "xyz", "123", "ab", "ABC"]
console.log(removeDuplicates(["1", "2", "3", "2", "3"])); // -> ["1", "2", "3"]

console.log("\n-----------------------------\n");

/*
Add Arrays
Write a function named add() which takes two arrays of numbers as arguments and returns a 
new array with the sum of given arrays elements.
UNIT TESTS:
add([3, 0, 0, 7, 5, 10], [6, 3, 2]) -> [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]) -> [16, 11, 9, 3, 2, 7, 5, 10, 34]
add([-5, 6, -3, 11], [5, -6, 3, -11]) -> [0, 0, 0, 0]
add([1, 2, 3, 4], []) -> [1, 2, 3, 4]
add([0.1, 0.2, 0.3, 0.4], [0.1, 0.2, 0.3, 0.4]) -> [1, 2, 3, 4]
add([], []) -> []

*/

function add(array1, array2){
  let sum = []
  let max = Math.max(array1.length, array2.length)

  for(let i = 0; i < max; i++){
    let A = array1[i] || 0
    let b = array2[i] || 0

    sum.push(A + b)

  }
  return sum
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2])); // -> [9, 3, 2, 7, 5, 10]
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])); // -> [16, 11, 9, 3, 2, 7, 5, 10, 34]
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11])); // -> [0, 0, 0, 0]
console.log(add([1, 2, 3, 4], [])); //-> [1, 2, 3, 4]
console.log(add([0.1, 0.2, 0.3, 0.4], [0.1, 0.2, 0.3, 0.4])); // -> [1, 2, 3, 4]
console.log(add([], [])); // -> []

console.log("\n-----------------------------\n");

/*
Get Common Elements from Arrays
Write a function named getCommons() which takes two string arrays as arguments and 
returns all the common words.
UNIT TESTS:
getCommons(ç, ["abc", "xyz", "123"]) -> []
getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"]) -> ["Javascript"]
getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"]) -> ["C#"]
getCommons( ["a", "b", "c"], ["a", "b", "c"]) -> ["a", "b", "c"]
getCommons( ["a", "b", "c", "a", "b", "c"], ["a", "b", "c", "a", "b", "c"]) -> ["a", "b", "c"]

*/

function getCommons(array1, array2){
  let commons = [];

  for(let i = 0; i < array1.length; i++){
    if(array2.includes(array1[i]) && !commons.includes(array1[i])) commons.push(array1[i])
  }
 return commons
}



console.log(getCommons(["c"], ["abc", "xyz", "123"])); // -> []
console.log(getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"])); // -> ["Javascript"]
console.log(getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"])); // -> ["C#"]
console.log(getCommons( ["a", "b", "c"], ["a", "b", "c"])); // -> ["a", "b", "c"]
console.log(getCommons( ["a", "b", "c", "a", "b", "c"], ["a", "b", "c", "a", "b", "c"])); // -> ["a", "b", "c"]

console.log("\n-----------------------------\n");

/*
Categorize Characters
Write a function named categorizeCharacters() which takes a string word as argument and 
return an array as letters at index of 0, digits at index of 1 and specials at index of 2.
UNIT TESTS:
categorizeCharacters("1234") -> [ '' , '1234', '' ]
categorizeCharacters("abc123$#%") -> [ 'abc', '123', '$#%' ]
categorizeCharacters("12ab$%3c%") -> [ 'abc', '123', '$%%' ]
categorizeCharacters("") -> [ '' , '', '' ]

*/

function categorizeCharacters(str){
  let letters = [];
  let numbers = [];
  let special = [];

  for(let i = 0; i < str.length; i++){
    if(str[i].match(/[a-z]/)) letters.push(str[i]);
    else if(str[i].match(/[0-9]/)) numbers.push(str[i]);
    else special.push(str[i])
  }
return [letters.join(""), numbers.join(""), special.join("")]
}

console.log(categorizeCharacters("1234")); // -> [ '' , '1234', '' ]
console.log(categorizeCharacters("abc123$#%")); //-> [ 'abc', '123', '$#%' ]
console.log(categorizeCharacters("12ab$%3c%")); // -> [ 'abc', '123', '$%%' ]
console.log(categorizeCharacters("")); //-> [ '' , '', '' ]

console.log("\n-----------------------------\n");

/*
Is Power Of 3
Write a function named isPowerOf3() which takes a number argument and returns true if given 
number is equal to 3 power of the X. Otherwise, return false.
NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243….
NOTE: Ignore negative scenarios.
UNIT TESTS:
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
 return false
}


console.log(isPowerOf3(1)); // -> true
console.log(isPowerOf3(2)); // -> false
console.log(isPowerOf3(3)); // -> true
console.log(isPowerOf3(27)); // -> true
console.log(isPowerOf3(100)); // -> false
console.log(isPowerOf3(81)); // -> true
console.log(isPowerOf3(9)); // -> true

console.log("\n-----------------------------\n");