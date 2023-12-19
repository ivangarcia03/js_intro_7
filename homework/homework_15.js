
/*
Requirement:
Write a function named toCamelCase() which takes a string as its argument
and returns a new string in camelCase. Assume the string only contains letters
and spaces
Examples:
toCamelCase("first name")  ->"firstName"
toCamelCase("last     name")  ->"lastName"
toCamelCase("   ZIP CODE")  ->"zipCode"
toCamelCase(“I Learn Java Script”)    -> "iLearnJavaScript"
toCamelCase(“helloWorld”)     -> “helloWorld
*/

// Task-01


function toCamelCase(inputString){

if(!inputString.includes(" ")) return inputString

 let words = inputString.trim().split(/\s+/);
 let Camel = words[0].toLowerCase();

 for(let i = 1; i < words.length; i++){
     let CapitalWord = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
       Camel += CapitalWord
 }
 return Camel;
}
console.log(toCamelCase("first name")); //  ->"firstName"
console.log(toCamelCase("last     name")); //  ->"lastName"
console.log(toCamelCase("   ZIP CODE")); //  ->"zipCode"
console.log(toCamelCase("I learn Java Script"));
console.log(toCamelCase("helloWorld"))

console.log("\n---------------\n");

/*
Requirement:
Write a function named toSnakeCase() which takes a string as its argument 
and returns a new string in snake_case. Assume the string only contains letters 
and spaces
NOTE: In snake case words are separated by underscores (_) and are all 
lowercase.
Examples:
toSnakeCase("first name")  ->"first_name"
toSnakeCase("last    name")  ->"last_name"
toSnakeCase("    I love Java Script")  ->"i_love_java_script"
toSnakeCase("already_snake_case")   -> "already_snake_case"
toSnakeCase("hello")     -> "hello

*/
// Task -02
function toSnakeCase(str){
    let splitStr = str.trim().replace(/\s+/g, " ").split(" ")
    return splitStr.map(word => word.toLowerCase()).join('_')
  }
  console.log(toSnakeCase("first name")); //  ->"first_name"
  console.log(toSnakeCase("last    name")); //  ->"last_name"
  console.log(toSnakeCase("    I love Java Script")); //  ->"i_love_java_script"
  console.log(toSnakeCase("already_snake_case")); //   -> "already_snake_case"
  console.log(toSnakeCase("hello")); //     -> "hello

  console.log("\n---------------\n");
/*
Requirement:
Write a function named alternatingCases() which takes a string argument and 
returns the string with alternating capitalization.
NOTE: The first letter should always be uppercase and non-letter characters are 
ignored.
Examples:
alternatingCases("Hello")  -> "HeLlO"
alternatingCases("basketball")  -> "BaSkEtBaLl"
alternatingCases("Tech Global")  -> "TeCh GlObAl"
alternatingCases("")  -> ""
alternatingCases("123!@#aB")  -> "123!@#Ab"

*/
// Task- 03
function alternatingCases(str) {
    let alternate = str.charAt(0).toUpperCase();

    for(let i = 1; i < str.length; i++) {
        let previousChar = str.charAt(i - 1);
        if(previousChar === previousChar.toUpperCase())
            alternate += str.charAt(i).toLowerCase();
        else if(previousChar === previousChar.toLowerCase())
            alternate += str.charAt(i).toUpperCase();
    }
    return alternate;
}
console.log(alternatingCases("Hello")); //  -> "HeLlO"
console.log(alternatingCases("basketball")); //  -> "BaSkEtBaLl"
console.log(alternatingCases("Tech Global")); //  -> "TeCh GlObAl"
console.log(alternatingCases("")); //  -> ""
console.log(alternatingCases("123!@#aB")); //  -> "123!@#Ab"

console.log("\n---------------\n");

/*
Requirement:
Write a function named isNeutral() that takes two strings comprised of + and 
-, and return a new string which shows how the two strings interact in the 
following way:
When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are 
shown as the number 0.
Note: The two strings will be the same length.
Examples
isNeutral("-", "+")      ->  "0"
isNeutral("-+", "-+")  ->   "-+"
isNeutral("-++-", "-+-+")            ->  "-+00"
isNeutral("--++--", "++--++")      ->  "000000"
isNeutral("+++", "+++")            ->  "+++"

*/

// task - 04
const isNeutral = (str1, str2) =>{
    let neutral = [];

    for(let i = 0; i < str1.length; i++){
      if(str1[i] === "+" && str2[i] === "+") neutral.push("+");
      else if(str1[i] === "-" && str2[i] === "-") neutral.push("-")
      else neutral.push("0");
    }
    return neutral.join("");
  }

  console.log(isNeutral("-", "+")); //      ->  "0"
  console.log(isNeutral("-+", "-+")); //  ->   "-+"
  console.log(isNeutral("-++-", "-+-+")); //            ->  "-+00"
  console.log(isNeutral("--++--", "++--++")); //      ->  "000000"
  console.log(isNeutral("+++", "+++")); //            ->  "+++"


  console.log("\n---------------\n");
/*
Requirement:
Write a function named isTrueOrFalse() which takes a string with sets of character/words 
separated by space. Looking at the first letter of each word (case insensitive-"A" and "a" should 
be treated the same), you need to determine whether it falls into the positive/first half of the 
alphabet ("a"-"m") or the negative/second half ("n"-"z"). Return true if there are more (or 
equal) positive words than negative words, false otherwise.
NOTE: alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
NOTE: Ignore all the digits, spaces and special characters.
Examples
isTrueOrFalse("A big brown fox caught a bad rabbit")  -> true
isTrueOrFalse("Xylophones can obtain Xenon.")    ->  false
isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK")  -> true
isTrueOrFalse("All FOoD tAsTEs NIcE for someONe")  -> true
isTrueOrFalse("Got stuck in the Traffic")  -> false


*/

// Task-05
const isTrueOrFalse = string => {
    let firstCount = 0
    let secondCount = 0
    let str = string.split(' ')
    for (const el of str) {
        if ('ABCDEFGHIJKLM'.toLowerCase().includes(el[0].toLowerCase()))
            firstCount++
        else if ('NOPQRSTUVWXYZ'.toLowerCase().includes(el[0].toLowerCase()))
            secondCount++
    }
    return firstCount >= secondCount ? true : false
}
console.log(isTrueOrFalse("A big brown fox caught a bad rabbit")); // true
console.log(isTrueOrFalse("Xylophones can obtain Xenon.")); // false
console.log(isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK")); // true
console.log(isTrueOrFalse("All FOoD tAsTEs NIcE for someONe")); // true
console.log(isTrueOrFalse("Got stuck in the Traffic")); // false