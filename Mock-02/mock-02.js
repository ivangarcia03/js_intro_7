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
