

let name = "John"; 

// length property: it returns the total count of the characters in the string
let totalChars = name.length;

console.log(totalChars); // 4

console.log(name.length); // 4

console.log(typeof totalChars); // number
console.log(typeof name.length); // number
console.log(name); // John


// String - Changing Cases toUpperCase() vs toLowerCase()
let greeting = "Good Morning";

let lowerGreeting = greeting.toLowerCase();
let upperGreeting = greeting.toUpperCase();

console.log(greeting); // Good Morning
console.log(lowerGreeting); // good morning
console.log(upperGreeting); // GOOD MORNING

console.log(greeting.toLowerCase()); // good morning
console.log(greeting.toUpperCase()); // GOOD MORNING

//Tricky strings
console.log("123 ABC @# %#$^$ %&".toLowerCase()); // 123 abc @# %#$^$ %&
console.log("".toLowerCase()); // 
console.log("     ".toLowerCase()); // 
console.log("12345".toLowerCase()); // 12345



// String - Extracting Characters
let city = "CHICAGO";

console.log(city[0]); // C
console.log(city[3]); // C
console.log(city[6]); // O

let firstChar = city[0];

console.log(firstChar); // C
console.log(typeof firstChar); // string

// Tricky part
console.log(city[7]); // undefined
console.log(city[10]); // undefined
console.log(city[100]); // undefined
console.log(city[-3]); // undefined

console.log("\n------------\n");
// charAt() function
console.log(city.charAt(0)); // C
console.log(city.charAt(city.length - 1)); // O


// Tricky part
console.log(city.charAt(7)); // ""
console.log(city.charAt(10)); // ""
console.log(city.charAt(100)); // ""
console.log(city.charAt(-3)); // ""

console.log(typeof city[100]); // undefined
console.log(typeof city.charAt(100)); // string


// charCodeAt() - return decimal representation of the character in the Unicode-ASCII
let country = "USA";
console.log(country.charCodeAt(0)); // 85
console.log(country.charCodeAt(1)); // 83
console.log(country.charCodeAt(2)); // 65

// Tricky part
console.log(country.charCodeAt(10)); // NaN
console.log(country.charCodeAt(-3)); // NaN