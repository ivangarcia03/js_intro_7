/*
Write a function called isPositive that takes an argument and returns true if the arg is positive, and false otherwise.

isPositive(5)   -> true
isPositive(0)   -> false
isPositive(-7)   -> false
isPositive(15)   -> true
isPositive(123)   -> true
*/

function isPositive(arg0){
    return arg0 > 0;
}

console.log(isPositive(5)); // true
console.log(isPositive(0)); // false
console.log(isPositive(-7)); // false
console.log(isPositive(123)); // true


/*
Write a function called isNegative that takes an argument and returns true if the arg is negative, and false otherwise.

isNegative(5)   -> false
isNegative(0)   -> false
isNegative(-7)   -> true
isNegative(15)   -> false
isNegative(123)   -> false
*/

function isNegative(arg0){
    return arg0 < 0;
}

console.log(isNegative(5)); // false
console.log(isNegative(0)); // false
console.log(isNegative(-7)); // true
console.log(isNegative(123)); // false


/*
Write a functions called getFirstChar that takes an argument and returns the first character from the argument

getFirstChar("Hello")       -> "H"
getFirstChar("12345")       -> "1"
getFirstChar("")            -> undefined
getFirstChar("   ")         -> " "
*/

function getFirstChar(str){
    return str[0];
}

console.log(getFirstChar("Hello")); // "H"
console.log(getFirstChar("")); // undefined

/*
Write a functions called getFirstLastChar that takes an argument and returns the first and last 
characters from the argument

getFirstLastChar("Hello")       -> "Ho"
getFirstLastChar("12345")       -> "15"
getFirstLastChar("")            -> NaN
getFirstLastChar("   ")         -> "  "
getFirstLastChar("a")           -> "aa"
*/

function getFirstLastChar(str){
    return str[0] + str[str.length-1];
}

console.log(getFirstLastChar("Hello")); // "Ho"
console.log(getFirstLastChar("a")); // "aa"
console.log(getFirstLastChar("")); // NaN

/*
Write a functions called getRandomNumber that takes 2 args and return a random number between them (both inclusive)

getRandomNumber(5, 10)  -> 7
getRandomNumber(15, 17)  -> 17
*/

function getRandomNumber(start, end){
    return Math.floor(Math.random() * (end - start + 1)) + start;
} 

console.log(getRandomNumber(5, 10));
console.log(getRandomNumber(50, 100));
console.log(getRandomNumber(3, 5));
console.log(getRandomNumber(0, 1));
console.log(getRandomNumber(0, 1));
console.log(getRandomNumber(0, 1));

/*
Write a function called average5 that takes 5 arguments and returns their average


average5(1, 2, 3, 4, 5)     -> 3
average5(3, 7, 10, 5, 5)     -> 6
*/

function average5(n1, n2, n3, n4, n5){
    return (n1 + n2 + n3 + n4 + n5) / 5;
}

console.log(average5(1, 2, 3, 4, 5));
console.log(average5(3, 7, 10, 5, 5));


// TRICKY PART
console.log(average5("1", "2", "3", "4", "5")); // 2469
console.log(average5("1", 2, 3, 4, 5)); // 2469
console.log(average5(1, 2, 3, 4, "5")); // 21
console.log(average5(1, 2, "3", 4, 5)); // 669