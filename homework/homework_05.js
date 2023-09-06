// Task - 1
function countPos(array){
    let count = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > 0) count++
    }
    return count
}
console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));

console.log("\n-----------------------------\n");

// Task - 2
function countA(str){
    let count1 = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i].toLowerCase().includes('a')) count1++
    }
    return count1;
}
console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("QA stands for Quality Assurance"));
console.log(countA("Cypress"));

console.log("\n-----------------------------\n");

// Task - 3


function countVowel(str){
    let count2 = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i].toLowerCase().includes("a") ||
        str[i].toLowerCase().includes("e") ||
        str[i].toLowerCase().includes("i") ||
        str[i].toLowerCase().includes("o") ||
        str[i].toLowerCase().includes("u") ) count2++
    }
    return count2;
}
console.log(countVowel("Hello"));
console.log(countVowel("Hello World"));
console.log(countVowel("JavaScript is fun"));
console.log(countVowel(""));

console.log("\n-----------------------------\n");

// Task - 4

function countConsonants(word){
    let count = 0
    for(let i = 0; i < word.length; i++){
        let letter = word[i].toLowerCase()
        if(letter !== ('a') &&
        letter !== ('e') &&
        letter !== ('i') &&
        letter !== ('o') &&
        letter !== ('u')) count++
    }
    return count;
}
console.log(countConsonants("hello"));
console.log(countConsonants("hello world"));
console.log(countConsonants("JavaScript is fun"));
console.log(countConsonants(""));

console.log("\n-----------------------------\n");

// Task - 5

function countWords(str) {
    return str.trim().split(" ").length;
  }
  console.log(countWords("   JavaScript is fun   "));
  console.log(countWords("Cypress is an UI automation tool.  "));
  console.log(countWords("1 2 3 4 "));

  console.log("\n-----------------------------\n");

  // Task - 6


function factorial(number){
    let num = 1;
    if (number === 0){
         return 1
    }
    for(let i = 2; i <= number; i++){
        num = num * i
    }
    return num;
}
console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));



console.log("\n-----------------------------\n");
// Task-7 

function isPalindrome(word) {
    const reversedWord = word.split('').reverse().join('');
    if(word === reversedWord) return true;
    else return false;
  }

  console.log(isPalindrome("Hello")); // 		-> false
  console.log(isPalindrome("kayak")); // 		-> true 
  console.log(isPalindrome("civic")); // 		-> true
  console.log(isPalindrome("abba")); // 		-> true
  console.log(isPalindrome("ab  a")); //		-> false
  console.log(isPalindrome("123454321")) // 	-> true
  console.log(isPalindrome("A")); //      		-> true
  console.log(isPalindrome("")) //      		-> true
  

console.log("\n-----------------------------\n");

// Task -8

function countMultipleWords(array){
    let count = 0;
    for(const word of array){
        if(word.trim().includes(" ")) count++
    }
    return count ;
}
console.log(countMultipleWords(["foo","", " ", "foo bar", " foo"]));
console.log(countMultipleWords(["foo", "bar", "foobar", "  foobar "]));
console.log(countMultipleWords(["f o o", "b a r","  foo bar ", "  foo bar  " ]));
console.log(countMultipleWords([]));

console.log("\n-----------------------------\n");

// Task - 9

function count3OrLess(str){
    let count = 0
    for(word of str){
        if(count > 3) return 3
        if(word.includes(" ")) count++
    }
    return count;
}

console.log(count3OrLess("Hello"));
console.log(count3OrLess("Hi John"));
console.log(count3OrLess("JavaScript is fun"));
console.log(count3OrLess("my name is John Doe"));
console.log(count3OrLess(""));

console.log("\n-----------------------------\n");

// Task- 10

function isPrime(num){
    if(num < 2) return false
    if(num === 2) return true;
    for(let i = 2; i < num; i++){
        if(num % i === 0) return false;
        else return true; 
    }
}

console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(29));
console.log(isPrime(-5));
console.log(isPrime(0));
console.log(isPrime(1));

console.log("\n-----------------------------\n");

// Task-11


function add(array1, array2){
   let array3 = [];
   for(let i= 0; i <= array1.length -1; i++){
     array3.push((array1[i] || 0) + (array2[i] || 0));
   }
   return array3;

}


console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2])); 	//	-> [9, 3, 2, 7, 5, 10]
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]));	//-> [16, 11, 9,  3, 2, 7, 5, 10, 34]​
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11])); 	//	-> [0, 0, 0, 0]

console.log("\n-----------------------------\n");

// Task- 12

function removeExtraSpaces(str){
    return str.replace(/\s+/g, " ").trim()
}


console.log(removeExtraSpaces("Hello")); 	   //	-> "Hello" 
console.log(removeExtraSpaces("      Hello    World     ")); //	-> "Hello World" 
console.log(removeExtraSpaces("     JavaScript is          fun"));	// -> "JavaScript is fun”
console.log(removeExtraSpaces(""));            		//	-> "" 

console.log("\n-----------------------------\n");

// Task - 13 not able to solve this code

function findClosestTo10(arr) {
    return arr.reduce(function(prev, curr) {
      return (Math.abs(curr - 10) < Math.abs(prev - 10) ? curr : prev);
    });
  }

console.log(findClosestTo10([10, -13, 5, 70, 15, 57])); // 	-> 5
console.log(findClosestTo10([10, -13, 8, 12, 15, -20])); //	-> 8
console.log(findClosestTo10([0, -1, -2]));  // 		-> 0


console.log("\n-----------------------------\n");



// Task- 14 not able to solve this code
// Task- 15 not able to solve this code

