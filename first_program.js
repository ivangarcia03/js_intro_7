console.log("Hello World"); // this is a coding statement
console.log("Hello World"); // this is a coding statement

console.log("My name is \"John\"!"); // My name is "John"!
console.log(`My name is "John"!`); // My name is "John"!


console.log("My last name is Doe");

console.log('I am \'25\' years old'); // I am '25' years old
console.log("I am '25' years old");
console.log(`I am '25' years old`);

console.log(`I live in Chicago`);

console.log("abc\\\\xyz"); // abc\\xyz


console.log("Hello\nWorld!");
console.log("\tHello World!"); // "     Hello World!"


function startsVowel(str){
    if (str.toLowerCase().startsWith("a") ||
    str.toLowerCase().startsWith("e") ||
    str.toLowerCase().startsWith("i") ||
    str.toLowerCase().startsWith("o") ||
    str.toLowerCase().startsWith("u")){
         return  true 
    }
    else{
         return false 
}
}

console.log(startsVowel("Tech"));
console.log(startsVowel("Aech"));
console.log(startsVowel("aech"));