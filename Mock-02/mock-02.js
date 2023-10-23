/*
Double or Triple the Word 
Write a function named as doubleOrTripleWord() which takes a string word as an argument 
and returns the given word back tripled if the string length is even or doubled if the string length 
is odd when invoked. 
 
Examples: 
doubleOrTripleWord("Tech")    -> "TechTechTech" 
doubleOrTripleWord("Apple")    -> "AppleApple” 
doubleOrTripleWord("")     -> "" 
doubleOrTripleWord(" ")     -> " " 
doubleOrTripleWord("1")     -> "11" 
doubleOrTripleWord("22")     -> "222222" 

*/
function doubleOrTripleWord(str) {
    if (str.length % 2 === 0) return str + str + str;
    else return str + str;
}



console.log(doubleOrTripleWord("Tech")); //    -> "TechTechTech" 
console.log(doubleOrTripleWord("Apple")); //    -> "AppleApple” 
console.log(doubleOrTripleWord("")); //     -> "" 
console.log(doubleOrTripleWord(" ")); //     -> " " 
console.log(doubleOrTripleWord("1")); //     -> "11" 
console.log(doubleOrTripleWord("22")); //     -> "222222"

console.log("\n-----------------------------\n");


/*
First and Last Word 
Write a function named as firstlastWord() which takes a string word as an argument and 
returns the first and last words from the given string when invoked. 
NOTE: Return empty string if the given string does not have any word. 
 
Examples: 
firstLastWord("Hello World")    -> "HelloWorld" 
firstLastWord("I like JavaScript")   -> "IJavaScript” 
firstLastWord("Hello")     -> "HelloHello" 
firstLastWord("")      -> "" 
firstLastWord(" ")     -> ""

*/

function firstLastWord(str) {


    return str.slice(0, str.indexOf(" ")) + str.slice(str.lastIndexOf(" ") + 1)
}

console.log(firstLastWord("Hello World")); //    -> "HelloWorld" 
console.log(firstLastWord("I like JavaScript")); //   -> "IJavaScript” 
console.log(firstLastWord("Hello")); //     -> "HelloHello" 
console.log(firstLastWord("")); //      -> "" 
console.log(firstLastWord(" ")); //     -> ""


console.log("\n-----------------------------\n");


/*
Has Vowel 
Write a function named hasVowel() which takes a string argument and returns true if the 
string has a vowel, returns false if the string doesn’t contain any vowel letter. 
NOTE: Vowels are = a, e, o, u, i. 
NOTE: Ignore upper/lower cases. 
 
Examples: 
hasVowel("")      -> false 
hasVowel("Javascript")    -> true 
hasVowel("Tech Global")    -> true 
hasVowel("1234")     -> false 
hasVowel("ABC")     -> true 

*/

function hasVowel(str) {
    str = str.toLowerCase();
    if (str.includes("a") ||
        str.includes("e") ||
        str.includes("i") ||
        str.includes("o") ||
        str.includes("u")
    ) return true;
    else return false;
}

console.log(hasVowel("")); //      -> false 
console.log(hasVowel("Javascript")); //    -> true 
console.log(hasVowel("Tech Global")); //    -> true 
console.log(hasVowel("1234")); //     -> false 
console.log(hasVowel("ABC")); //     -> true 


console.log("\n-----------------------------\n");

/*
Start Vowel 
Write a function named as startVowel() which takes a string word as an argument and returns 
true if given string starts with a vowel, and false otherwise when invoked. 
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 
 
Examples: 
startVowel("Hello")    -> false 
startVowel("Apple")    -> true 
startVowel("orange")   -> true 
startVowel("")    -> false 
startVowel(" ")    -> false 
startVowel("123")    -> false

*/

function startVowel(str){
    str = str.toLowerCase();
    if(str.startsWith("a") ||
    str.startsWith("e") ||
    str.startsWith("i") ||
    str.startsWith("o") ||
    str.startsWith("u") 
    ) return true;
    else return false; 
}


console.log(startVowel("Hello")); //    -> false 
console.log(startVowel("Apple")); //    -> true 
console.log(startVowel("orange")); //   -> true 
console.log(startVowel("")); //    -> false 
console.log(startVowel(" ")); //    -> false 
console.log(startVowel("123")); //    -> false


console.log("\n-----------------------------\n");

/*
Average of Edges 
Write a function named averageOfEdges() which takes three number arguments and will 
return average of min and max numbers. 
 
Examples: 
averageOfEdges(0, 0, 0)   -> 0 
averageOfEdges(0, 0, 6)   -> 3 
averageOfEdges(-2, -2, 10)   -> 4 
averageOfEdges(-3, 15, -3)   -> 6 
averageOfEdges(10, 13, 20)   -> 15

*/
function averageOfEdges(a, b, c){
    let max = Math.max(a, b, c);
    let min = Math.min(a, b, c);
    return (max + min)/ 2;
}

console.log(averageOfEdges(0, 0, 0)); //   -> 0 
console.log(averageOfEdges(0, 0, 6)); //   -> 3 
console.log(averageOfEdges(-2, -2, 10)); //   -> 4 
console.log(averageOfEdges(-3, 15, -3)); //   -> 6 
console.log(averageOfEdges(10, 13, 20)); //   -> 15

console.log("\n-----------------------------\n");


/*
Swap First and Last Characters 
Write a function named replaceFirstLast() which takes a string argument and returns a new 
string with the first and last characters replaced. 
NOTE: If the length is less than 2, return an empty string. 
NOTE: Ignore extra spaces before and after the string. 
 
Examples: 
replaceFirstLast("")      ->  "" 
replaceFirstLast("Hello")     ->  "oellH" 
replaceFirstLast("Tech Global")    -> "lech GlobaT" 
replaceFirstLast("A")     -> "" 
replaceFirstLast("    A      ")     -> "" 

*/

function replaceFirstLast(str){
    str = str.trim(); 
    if(str.length < 2) return ""
    let first = str[0];
    let middle = str.slice(1, -1);
    let last = str[str.length - 1];
    return last+middle+first;
}

console.log(replaceFirstLast("")); //      ->  "" 
console.log(replaceFirstLast("Hello")); //     ->  "oellH" 
console.log(replaceFirstLast("Tech Global")); //    -> "lech GlobaT" 
console.log(replaceFirstLast("A")); //     -> "" 
console.log(replaceFirstLast("    A      ")); //     -> "" 


console.log("\n-----------------------------\n");


/*
Swap First and Last Four Characters 
Write a function named as swap4() which takes a string word as an argument and returns the 
string back with its first and last 4 characters swapped when invoked. 
NOTE: Return empty string if the given string does not have 8 or more characters. 
 
Examples: 
swap4("abc")     -> "" 
swap4("JavaScript")     -> "riptScJava" 
swap4("TechGlobal")    -> "obalGlTech" 
swap4("")      -> "" 
swap4(" ")     -> "" 
swap4("Apple")     -> ""

*/

function swap4(str){
    if(str.length < 8) return ""
    let first4 = str.slice(0, 4);
    let middle = str.slice(4, - 4);
    let last4 = str.slice(-4);
    return last4 + middle + first4;
}


console.log(swap4("abc")); //     -> "" 
console.log(swap4("JavaScript")); //     -> "riptScJava" 
console.log(swap4("TechGlobal")); //    -> "obalGlTech" 
console.log(swap4("")); //      -> "" 
console.log(swap4(" ")); //    -> "" 
console.log(swap4("Apple")); //     -> ""

console.log("\n-----------------------------\n");

/*
Swap First and Last Words 
Write a function named as swapFirstLastWord() which takes a string word as an argument 
and returns the string back with its first and last words swapped when invoked. 
NOTE: Return empty string if the given string does not have 2 or more words. 
 
Examples: 
swapFirstLastWord("Hello World")     -> "World Hello" 
swapFirstLastWord("I like JavaScript")  -> "JavaScript like I" 
swapFirstLastWord("foo bar foo bar")    -> "bar bar foo foo" 
swapFirstLastWord("")      -> "" 
swapFirstLastWord(" ")      -> "" 
swapFirstLastWord("Hello")      -> "" 
swapFirstLastWord("Hello   ")     -> ""

*/
function swapFirstLastWord(str){
    str= str.trim()
    let first = str.slice(0, str.indexOf(" "))
    let middle = str.slice(str.indexOf(" "), str.lastIndexOf(" ") + 1);
    let last = str.slice(str.lastIndexOf(" ") + 1, str.length);
    if(str.includes(" ")) return last + middle + first;
    else return ""
}



console.log(swapFirstLastWord("Hello World")); //     -> "World Hello" 
console.log(swapFirstLastWord("I like JavaScript")); //  -> "JavaScript like I" 
console.log(swapFirstLastWord("foo bar foo bar") ); //   -> "bar bar foo foo" 
console.log(swapFirstLastWord("")); //      -> "" 
console.log(swapFirstLastWord(" ")); //      -> "" 
console.log(swapFirstLastWord("Hello")); //      -> "" 
console.log(swapFirstLastWord("Hello   ")); //     -> ""

console.log("\n-----------------------------\n");
/*
Count Positive Numbers 
Write a function named countPos() which takes an array of numbers as an argument and 
returns how many elements are positive when invoked.  
 
Examples: 
countPos([-45, 0, 0, 34, 5, 67])    -> 3 
countPos([-23, -4, 0, 2, 5, 90, 123])   -> 4 
countPos([0, -1, -2, -3])     -> 0

*/

function countPos(array){
    let count = 0;
    for(const num of array){
        if(num > 0) count++
    }
    return count;
}



console.log(countPos([-45, 0, 0, 34, 5, 67])); //    -> 3 
console.log(countPos([-23, -4, 0, 2, 5, 90, 123])); //   -> 4 
console.log(countPos([0, -1, -2, -3])); //     -> 0

console.log("\n-----------------------------\n");

/*
Find Even Numbers 
Write a function named as getEvens() which takes 2 number arguments and returns all the 
even numbers as an array stored from smallest even number to greatest even number when 
invoked. 
NOTE: Make your code dynamic that works for any numbers and return empty array if there are 
no even numbers in the range of given 2 numbers. 
Assume you will not be given negative numbers. 
 
Examples: 
getEvens(2, 7)   -> [ 2, 4, 6 ] 
getEvens(17, 5)   -> [ 6, 8, 10, 12, 14, 16 ] 
getEvens(4, 4)   -> [ 4 ] 
getEvens(3, 3)   -> [ ] 

*/
function getEvens(a, b){
    let newArray = [];
    for(let i = Math.min(a, b); i <= Math.max(a, b); i++){
        if( i % 2 === 0) newArray.push(i);
    }
return newArray;
}

console.log(getEvens(2, 7)); //   -> [ 2, 4, 6 ] 
console.log(getEvens(17, 5)); //   -> [ 6, 8, 10, 12, 14, 16 ] 
console.log(getEvens(4, 4)); //   -> [ 4 ] 
console.log(getEvens(3, 3)); //   -> [ ] 

console.log("\n-----------------------------\n");

/*
Find Numbers Divisible By 5 
Write a function named as getMultipleOf5() which takes 2 number arguments and returns all the 
numbers divisible by 5 as an array stored from first found match to last found match when 
invoked. 
NOTE: Make your code dynamic that works for any numbers and return empty array if there are 
no numbers divisible by 5 in the range of given 2 numbers. 
Assume you will not be given negative numbers. 
Examples: 
getMultipleOf5(3, 17)   -> [ 5, 10, 15] 
getMultipleOf5(23, 5)   -> [ 20, 15, 10, 5 ] 
getMultipleOf5(5, 5)    -> [ 5 ] 
getMultipleOf5(2, 4)    -> [ ]

*/
function getMultipleOf5(a, b){
    let newArray = [];
    if(a > b){
        for(let i = a; i > b; i--){
           if(i % 5 === 0) newArray.push(i);
        }
    
    }
    else {
        for( let i = a; i <= b; i++){
            if(i % 5 === 0) newArray.push(i);

        }
    }
    return newArray;
}

console.log(getMultipleOf5(3, 17)); //   -> [ 5, 10, 15] 
console.log(getMultipleOf5(23, 5)); //   -> [ 20, 15, 10, 5 ] 
console.log(getMultipleOf5(5, 5)); //    -> [ 5 ] 
console.log(getMultipleOf5(2, 4)); //    -> [ ]

console.log("\n-----------------------------\n");


/*
Count Negative Numbers 
Write a function named countNeg() which takes an array of numbers as an argument and 
returns how many elements are negative when invoked.  
 
Examples: 
countNeg([-45, 0, 0, 34, 5, 67])    -> 1 
countNeg([-23, -4, 0, 2, 5, 90, 123])   -> 2 
countNeg([0, -1, -2, -3])     -> 3 


*/

function countNeg(array){
    let count = [];
    for(const num of array){
        if(num < 0) count++
    }
    return count;
}


console.log(countNeg([-45, 0, 0, 34, 5, 67])); //    -> 1 
console.log(countNeg([-23, -4, 0, 2, 5, 90, 123])); //   -> 2 
console.log(countNeg([0, -1, -2, -3])); //    -> 3 

console.log("\n-----------------------------\n");



/*
Count A 
Write a function named countA() which takes a string argument and returns how many A or a 
there are in the given string when invoked. 
NOTE: Ignore case sensitivity.  
 
Examples: 
countA("TechGlobal is a QA bootcamp")     -> 4 
countA("QA stands for Quality Assurance")    -> 5 
countA("Cypress")        -> 0

*/
function countA(str){
    let count = 0;
for(const word of str){
    if(word.toLowerCase().includes("a")) count++
}
return count; 
}

console.log(countA("TechGlobal is a QA bootcamp")); //     -> 4 
console.log(countA("QA stands for Quality Assurance")); //    -> 5 
console.log(countA("Cypress")); //        -> 0

console.log("\n-----------------------------\n");

/*
Count Words 
Write a function named countWords() which takes a string argument and returns the total 
count of words in the given string when invoked. 
NOTE: Be careful about the extra whitespaces before and after the string. 
 
Examples: 
countWords("     Javascript is fun       ")      -> 3 
countWords("Cypress is an UI automation tool.    ")    -> 6  
countWords("1 2 3 4")        -> 4

*/

/*function countWords(str){
    let count = 1;
    str = str.trim()
    for(const word of str){
    if(word.includes(" ")) count++
    }
    return count;
}

*/

function countWords(str){
    return str.trim().split(/\s+/).length
}

console.log(countWords("     Javascript is fun       ")); //      -> 3 
console.log(countWords("Cypress is an UI automation tool.    ")); //    -> 6  
console.log(countWords("1 2 3 4")); //        -> 4

console.log("\n-----------------------------\n");

/*
Factorial 
Write a function named as factorial() which takes a number as an argument and returns the 
factorial of the number when invoked. 
NOTE: Mathematically, the factorial of a non-negative integer n is defined as: 
n! = n × (n-1) × (n-2) × ... × 2 × 1 
Assume you will not be given a negative number. 
 
Examples: 
factorial(5)    -> 120 
factorial(4)   -> 24 
factorial(0)   -> 1 
factorial(1)   -> 1

*/

function factorial(num){
    let factorial = 1
    if(num < 2) return 1
    for(let i = 2; i <= num; i++){
        factorial *= i ;

    }
    return factorial;
}

console.log(factorial(5)); //    -> 120 
console.log(factorial(4)); //   -> 24 
console.log(factorial(0)); //   -> 1 
console.log(factorial(1)); //   -> 1


console.log("\n-----------------------------\n");
/*
Count 3 or Less 
Write a function named as count3OrLess() which takes a string word as an argument and 
returns the count of the words that has 3 characters or less when invoked. 
 
Examples: 
count3OrLess("Hello")      -> 0 
count3OrLess("Hi John")      -> 1 
count3OrLess("JavaScript is fun")     -> 2 
count3OrLess("My name is John Doe")    -> 3 
count3OrLess("")       -> 0

*/
const count3OrLess = (str) => str.trim().split(" ").filter(word => word.length > 0 && word.length <=3).length;



/*
// second option : 


const count3OrLess = (str) =>{
    let count = 0;
    str = str.trim().split(" ")
   for(const word of str){
    if(word.length > 0 && word.length <= 3) count++
    }
    return count;
}

*/

console.log(count3OrLess("Hello")); //     -> 0 
console.log(count3OrLess("Hi John")); //      -> 1 
console.log(count3OrLess("JavaScript is fun")); //     -> 2 
console.log(count3OrLess("My name is John Doe")); //    -> 3 
console.log(count3OrLess("")); //       -> 0


console.log("\n-----------------------------\n");

/*
Remove Extra Spaces 
Write a function named as removeExtraSpaces() which takes a string word as an argument 
and returns the string back with all extra spaces removed when invoked. 
 
Examples: 
removeExtraSpaces("Hello")       -> "Hello" 
removeExtraSpaces("   Hello    World  ")     -> "Hello World" 
removeExtraSpaces("  JavaScript is       fun")    -> "JavaScript is fun” 
removeExtraSpaces("")        -> ""  


*/
const removeExtraSpaces = (str) =>{
    return str.trim().replace(/\s+/g, " ");
}


console.log(removeExtraSpaces("Hello")); //       -> "Hello" 
console.log(removeExtraSpaces("   Hello    World  ")); //     -> "Hello World" 
console.log(removeExtraSpaces("  JavaScript is       fun")); //    -> "JavaScript is fun” 
console.log(removeExtraSpaces("")); //        -> ""  

console.log("\n-----------------------------\n");

/*
Middle Number
Write a function named middleInt() which takes three number arguments and return the middle
number.
Examples:
middleInt(1, 2, 2) -> 2
middleInt(5, 5, 8) -> 5
middleInt(5, 3, 5) -> 5
middleInt(1, 1, 1) -> 1
middleInt(-1, 25, 10) -> 10



*/

function middleInt(a, b, c){
    if(a >= b && a < c){
        return a
    }
    else if(b < a && b >= c ){
        return b
    }
    else return c;


}


console.log(middleInt(1, 2, 2)); // -> 2
console.log(middleInt(5, 5, 8)); // -> 5
console.log(middleInt(5, 3, 5)); // -> 5
console.log(middleInt(1, 1, 1)); // -> 1
console.log(middleInt(-1, 25, 10)); // -> 10


console.log("\n-----------------------------\n");


/*
First Duplicate Element
Write a function named as firstDuplicate() which takes an array argument and returns the first
duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates
in the array. For two elements to be considered as duplicated, value and data types of the
elements must be same.
Examples:
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
console.log(firstDuplicate([ 'foo', 'abc', '123', "bar" ])); // -> -1


console.log("\n-----------------------------\n");

/*
Find All Duplicate Elements
Write a function named as getDuplicates() which takes an array argument and returns all the
duplicated elements in the array when invoked.
NOTE: Make your code dynamic that works for any array and return empty array if there are no
duplicates in the array. For two elements to be considered as duplicated, value and data types
of the elements must be same.
Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]) -> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ]) -> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ]) -> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]) -> [ ]


*/
function getDuplicates(array){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i] === array[j]) newArray.push(array[i])
        }
    }
 return newArray;
}


console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])); // -> [ 0, -7 ]
console.log(getDuplicates([ 1, 2, 5, 0, 7 ])); // -> [ ]
console.log(getDuplicates(['A',"foo", "12", 12, "bar", "a", "a", "foo"])); // -> [ 'foo', 'a’ ]
console.log(getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])); // -> [ ]

console.log("\n-----------------------------\n");

/*
Count Vowels
Write a function named as countVowels() which takes a string word as an argument and
returns the count of the vowel letters when invoked.
NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
countVowels("Hello") -> 2
countVowels("JavaScript is fun") -> 5
countVowels("") -> 0

*/
function countVowels(str){
    let count = 0
    str = str.trim()
    for(const word of str){
        let words = word.toLowerCase();
        if(words.includes("a") ||
        words.includes("e") ||
        words.includes("i") ||
        words.includes("o") ||
        words.includes("u") 
        ) count++
    }
    return count;
}


console.log(countVowels("Hello")); // -> 2
console.log(countVowels("JavaScript is fun")); // -> 5
console.log(countVowels("") ); //-> 0

console.log("\n-----------------------------\n");

/*
Reverse String Words
Write a function named as reverseStringWords() which takes a string as an argument and
returns string back with each word separately reversed when invoked.
NOTE: Make your code dynamic that works for any string. Make sure you consider extra spaces
before and after words in the given string.
Examples:
reverseStringWords("Hello World") -> "olleH dlroW"
reverseStringWords("I like JavaScript") -> "I ekil tpircSavaJ"
reverseStringWords("Hello") -> "olleH"
reverseStringWords("") -> ""
reverseStringWords(" ") -> ""



*/


function reverseStringWords(str){
    str = str.trim().split(" ");
    for(let i = 0; i < str.length; i++){
    str[i] = str[i].split("").reverse().join("")
    }
    return str.join(" ");
}


console.log(reverseStringWords("Hello World")); // -> "olleH dlroW"
console.log(reverseStringWords("I like JavaScript")); // -> "I ekil tpircSavaJ"
console.log(reverseStringWords("Hello")); // -> "olleH"
console.log(reverseStringWords("")); // -> ""
console.log(reverseStringWords(" ")); //-> ""

console.log("\n-----------------------------\n");


/*
Count Consonants
Write a function named as countConsonants() which takes a string word as an argument and
returns the count of the consonant letters when invoked.
NOTE: A letter that is not vowel is considered as a consonant letter.
Examples:
countConsonants("Hello") -> 3
countConsonants("Hello World") -> 8
countConsonants("JavaScript is fun") -> 12
countConsonants("") -> 0


*/

function countConsonants(str){
    let count = 0
    str = str.trim();
    for(const word of str){
        let words = word.toLowerCase();
        if(words !== "a" &&
        words !== "e" &&
        words !== "i" &&
        words !== "o" &&
        words !== "u" 
        ) count++
    }
    return count;
}




console.log(countConsonants("Hello")); // -> 3
console.log(countConsonants("Hello World")); // -> 8
console.log(countConsonants("JavaScript is fun")); // -> 12
console.log(countConsonants("")); // -> 0

console.log("\n-----------------------------\n");

/*
Count Multiple Words
Write a function named as countMultipleWords() which takes an array as an argument and
returns the count of the elements that has multiple words when invoked.
NOTE: Be careful about the extra whitespaces before and after the array element.
Examples:
countMultipleWords([ "foo", "", " ", "foo bar", " foo" ]) -> 1
countMultipleWords([ "foo", "bar", "foobar", " foobar " ]) -> 0
countMultipleWords([ "f o o", "b a r", "foo bar", " foo bar " ]) -> 4
countMultipleWords([ ]) -> 0

*/

function countMultipleWords(array){
    let count = 0
    for(const word of array){
        let words = word.trim();
        if(words.includes(" ")) count++
    }
    return count;
}

console.log(countMultipleWords([ "foo", "", " ", "foo bar", " foo" ])); // -> 1
console.log(countMultipleWords([ "foo", "bar", "foobar", " foobar " ])); // -> 0
console.log(countMultipleWords([ "f o o", "b a r", "foo bar", " foo bar " ])); // -> 4
console.log(countMultipleWords([ ])); // -> 0

console.log("\n-----------------------------\n");


/*
FizzBuzz
Write a function named as fizzBuzz() which takes 2 number arguments and returns a string
composed with below requirements when invoked.
• You need to find all the numbers within the range of given 2 numbers (both inclusive)
and store them in a string from smallest to greatest number with a ' | ' separator for each
number.
• You will need to convert numbers divisible by 3 to 'Fizz'
• You will need to convert numbers divisible by 5 to 'Buzz'
• You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
• The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.
Examples:
fizzBuzz(13, 18) -> "13 | 14 | FizzBuzz | 16 | 17 | Fizz"
fizzBuzz(12, 5) -> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
fizzBuzz(5, 5) -> "Buzz"
fizzBuzz(9, 6) -> "Fizz | 7 | 8 | Fizz"



*/

function fizzBuzz(a, b){
    let newArray = [];
    for(let i = Math.min(a, b); i <= Math.max(a, b); i++){
        if(i % 3 === 0 && i % 5 === 0) newArray.push("FizzBuzz");
        else if(i % 3 === 0) newArray.push("Fizz");
        else if(i % 5 === 0) newArray.push("Buzz")
        else newArray.push(i);
    }
    return newArray.join(" | ");
}





console.log(fizzBuzz(13, 18)); // -> "13 | 14 | FizzBuzz | 16 | 17 | Fizz"
console.log(fizzBuzz(12, 5)); // -> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"
console.log(fizzBuzz(5, 5)); // -> "Buzz"
console.log(fizzBuzz(9, 6)); // -> "Fizz | 7 | 8 | Fizz"


console.log("\n-----------------------------\n");

/*
Palindrome
Write a function named as isPalindrome() which takes a string word as an argument and
returns true if the word is palindrome or returns false otherwise when invoked.
NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam
NOTE: your function should ignore case sensitivity
Examples:
isPalindrome("Hello") -> false
isPalindrome("Kayak") -> true
isPalindrome("civic") -> true
isPalindrome("abba") -> true
isPalindrome("ab a") -> false
isPalindrome("123454321") -> true
isPalindrome("A") -> true
isPalindrome("") -> true


*/
function isPalindrome(str){
    let reverse = str.split("").reverse().join("");
    if(str === reverse) return true;
    else return false;
}



console.log(isPalindrome("Hello")); // -> false
console.log(isPalindrome("Kayak")); // -> true
console.log(isPalindrome("civic")); // -> true
console.log(isPalindrome("abba")); // -> true
console.log(isPalindrome("ab a") ); //-> false
console.log(isPalindrome("123454321")) ; // -> true
console.log(isPalindrome("A")); // -> true
console.log(isPalindrome("")); // -> true


console.log("\n-----------------------------\n");

/*
Prime Number
Write a function named as isPrime() which takes a number as an argument and returns true if
the number is prime or returns false otherwise when invoked.
NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. It
cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even
prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
NOTE: The smallest prime number is 2 and there is no negative prime numbers.
Examples:
isPrime(5) -> true
isPrime(2) -> true
isPrime(29) -> true
isPrime(-5) -> false
isPrime(0) -> false
isPrime(1) -> false


*/

function isPrime(num){
    if(num < 2 ) return false;
    if(num = 2 ) return true;
    for(let i = 2; i < num; i++){
        if(num % i === 0) return false;
        else return true;
    }
}


console.log(isPrime(5)); // -> true
console.log(isPrime(2)); // -> true
console.log(isPrime(29)); // -> true
console.log(isPrime(-5)); // -> false
console.log(isPrime(0)); // -> false
console.log(isPrime(1)); // -> false

console.log("\n-----------------------------\n");


/*
Add Two Arrays
Write a function named add() which takes two array of numbers as argument and returns a new
array with sum of given arrays elements.
NOTE: Be careful about the array sizes as they could be different.
Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2]) -> [9, 3, 2, 7, 5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34]) -> [16, 11, 9, 3, 2, 7, 5, 10, 34]
add([-5, 6, -3, 11], [5, -6, 3, -11]) -> [0, 0, 0, 0]

*/

function add(array1, array2){
    let newArray = [];
    let max = Math.max(array1.length, array2.length);
    for(let i = 0; i < max; i++){
        let num1 = array1[i] || 0;
        let num2 = array2[i] || 0;
        newArray.push(num1 + num2);
    }
    return newArray;
}


console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2])); // -> [9, 3, 2, 7, 5, 10]
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])); // -> [16, 11, 9, 3, 2, 7, 5, 10, 34]
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11])); // -> [0, 0, 0, 0]

console.log("\n-----------------------------\n");

/*
No Elements With A
Write a function named noA() which takes an array of strings as argument and will return a
new array with all elements starting with "A" or "a" replaced with "###".
Examples:
noA(["javascript", "hello", "123", "xyz"]) -> ["javascript", "hello", "123", "xyz"]
noA(["apple", "123", "ABC", "javascript"]) -> ["###", "123", "###", "javascript"]
noA(["apple", "abc", "ABC", "Alex", "A"]) -> ["###", "###", "###", "###", "###"]

*/


function noA(array){
    let newArray = [];
    for(const str of array){
        if(str.startsWith("a") || str.startsWith("A")) newArray.push("###");
        else newArray.push(str);

    }
    return newArray;
}

console.log(noA(["javascript", "hello", "123", "xyz"])); // -> ["javascript", "hello", "123", "xyz"]
console.log(noA(["apple", "123", "ABC", "javascript"])); // -> ["###", "123", "###", "javascript"]
console.log(noA(["apple", "abc", "ABC", "Alex", "A"])); // -> ["###", "###", "###", "###", "###"]

console.log("\n-----------------------------\n");

/*
No Elements Divisible By 3 and 5
Write a function named no3and5() which takes an array of integer numbers as argument and
will return a new array with elements replaced by conditions below.
If element can be divided by 5, replace it with 99
If element can be divided by 3, replace it with 100
If element can be divided by both 3 and 5, replace it with 101
Examples:
no3and5([7, 4, 11, 23, 17]) -> [7, 4, 11, 23, 17]
no3and5([3, 4, 5, 6]) -> [100, 4, 99, 100]
no3and5([10, 11, 12, 13, 14, 15]) -> [99, 11, 100, 13, 14, 101]

*/

function no3and5(array){
    let newArray = [];
    for(const num of array){
        if(num % 3 === 0 && num % 5 === 0) newArray.push(101);
        else if(num % 3 === 0) newArray.push(100);
        else if(num % 5 === 0) newArray.push(99);
        else newArray.push(num);

    }
    return newArray;
}

console.log(no3and5([7, 4, 11, 23, 17])); //-> [7, 4, 11, 23, 17]
console.log(no3and5([3, 4, 5, 6])); // -> [100, 4, 99, 100]
console.log(no3and5([10, 11, 12, 13, 14, 15])); // -> [99, 11, 100, 13, 14, 101]

console.log("\n-----------------------------\n");

/*
No Elements Equals 13
Write a function named no13() which takes an array of numbers as argument and return a new
array with all 13s replaced with 0s.
Examples:
no13([1, 2, 3 ,4]) -> [1, 2, 3 ,4]
no13([13, 2, 3]) -> [0, 2, 3]
no13([13, 13, 13 , 13, 13]) -> [0, 0, 0, 0, 0]
no13([]) -> []


*/

function no13(array){
    let newArray = [];
    for(const num of array){
        if(num === 13) newArray.push(0)
        else newArray.push(num)
    }
    return newArray;
}

console.log(no13([1, 2, 3 ,4])); // -> [1, 2, 3 ,4]
console.log(no13([13, 2, 3])); // -> [0, 2, 3]
console.log(no13([13, 13, 13 , 13, 13])); // -> [0, 0, 0, 0, 0]
console.log(no13([])); // -> []

console.log("\n-----------------------------\n");



/*
Remove Duplicates
Write a function named removeDuplicates() which takes an array argument and returns a new
array with all the duplicates removed.
Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]) -> [10, 20, 35, 60, 70]
removeDuplicates([1, 2, 5, 2, 3]) -> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1]) -> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]) -> ["abc", "xyz", "123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"]) -> ["1", "2", "3"]


*/

function removeDuplicates(array){
    return [...new Set(array)];
}


console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])); //-> [10, 20, 35, 60, 70]
console.log(removeDuplicates([1, 2, 5, 2, 3])); // -> [1, 2, 5, 3]
console.log(removeDuplicates([0, -1, -2, -2, -1])); // -> [0, -1, -2]
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])); // -> ["abc", "xyz", "123", "ab", "ABC"]
console.log(removeDuplicates(["1", "2", "3", "2", "3"])); // -> ["1", "2", "3"]

console.log("\n-----------------------------\n");

/*
No Digits
Write a function named noDigit() which takes a string argument and returns a new string with
all digits removed from the original string.
Examples:
noDigit("") -> ""
noDigit("Javascript") -> "Javascript"
noDigit("123Hello") -> "Hello"
noDigit("123Hello World149") -> "Hello World”
noDigit("123Tech456Global149") -> "TechGlobal"


*/

function noDigit(str){
    return str.trim().replace(/["0-9"]/g, "");
}


console.log(noDigit("")); // -> ""
console.log(noDigit("Javascript")); // -> "Javascript"
console.log(noDigit("123Hello")); // -> "Hello"
console.log(noDigit("123Hello World149")); // -> "Hello World”
console.log(noDigit("123Tech456Global149")); // -> "TechGlobal"

console.log("\n-----------------------------\n");

/*
No Vowel
Write a function named noVowel() which takes a string argument and returns a new string
with all vowels removed from the original string.
Examples:
noVowel("TechGlobal") -> "TchGlbl"
noVowel("AEOxyz") -> "xyz"
noVowel("Javascript") -> "Jvscrpt"
noVowel("") -> ""
noVowel("125$") -> "125$"


*/

function noVowel(str){
    return str.trim().replace(/["aeiouAEIOU"]/g, "");
}


console.log(noVowel("TechGlobal")); // -> "TchGlbl"
console.log(noVowel("AEOxyz")); // -> "xyz"
console.log(noVowel("Javascript")); // -> "Jvscrpt"
console.log(noVowel("")); // -> ""
console.log(noVowel("125$")); // -> "125$"

console.log("\n-----------------------------\n");


/*
Sum Of Digits
Write a function named sumOfDigits() which takes a string argument and returns sum of all
digits from the original string.
Examples:
sumOfDigits("Javascript") -> 0
sumOfDigits("John’s age is 29") -> 11
sumOfDigits("$125.0") -> 8
sumOfDigits("") -> 0


*/

function sumOfDigits(str){
    let sum = 0
    for(let i = 0; i < str.length; i++){
        if(parseInt(str[i])){
            sum += parseInt(str[i]);
        }
    }
    return sum;
}



console.log(sumOfDigits("Javascript")); // -> 0
console.log(sumOfDigits("John’s age is 29")); // -> 11
console.log(sumOfDigits("$125.0")); // -> 8
console.log(sumOfDigits("")); // -> 0

console.log("\n-----------------------------\n");

/*
Array Factorial
Write a function named arrFactorial() which takes an array of numbers as argument and return
the array with every number replaced with their factorials.
Examples:
arrFactorial([1, 2, 3 ,4]) -> [1, 2, 6, 24]
arrFactorial([0, 5]) -> [1,120]
arrFactorial([5 , 0, 6]) -> [120, 1, 720]
arrFactorial([]) -> []


*/


function arrFactorial(array){
    let newArray = [];
    for(const num of array){
        let factorial = 1
        for(let i = 2; i <= num; i++){
            factorial *= i;
        }
        newArray.push(factorial);
    }
    return newArray;
}



console.log(arrFactorial([1, 2, 3 ,4])); // -> [1, 2, 6, 24]
console.log(arrFactorial([0, 5])); // -> [1,120]
console.log(arrFactorial([5 , 0, 6])); // -> [120, 1, 720]
console.log(arrFactorial([])); //-> []