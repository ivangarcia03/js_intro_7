/*
Write a functions called product3 that takes 3 arguments and returns their multiplication

product3(1, 2, 3)       -> 6
product3(5, 6, 10)      -> 300
product3(-3, 10, 5)     -> -150
*/

function product3(arg0, arg1, arg2){
    return arg0 * arg1 * arg2;
}


// Testing your functions by invoking it with some examples
console.log(product3(1, 2, 3)); // 6
console.log(product3(5, 6, 10)); // 300
console.log(product3(-3, 10, 5)); // -150

// TRICKY PART
console.log(product3("2", "5", "3")); // 30
console.log(product3(null, "", false)); // 0
console.log(product3("   ", true, "10")); // 0


/*
Write a function called isOdd that takes an argument and return true if the arg is odd, false otherwise.

isOdd(5)    -> true
isOdd(10)   -> false
isOdd(23)   -> true
isOdd(-5)   -> true
isOdd(-2)   -> false
isOdd(0)    -> false
*/


function isOdd(arg0){
    return arg0 % 2 !== 0;
}

console.log(isOdd(5)); // true
console.log(isOdd(10)); // false
console.log(isOdd(-5)); // true
console.log(isOdd(-2)); // false
console.log(isOdd(0)); // false


/*
Write a function called isEven that takes an argument and return true if the arg is even, false otherwise.

isEven(5)    -> false
isEven(10)   -> true
isEven(23)   -> false
isEven(-5)   -> false
isEven(-2)   -> true
isEven(0)    -> true
*/

function isEven(arg0){
    return arg0 % 2 === 0;
}

console.log(isEven(5)); // false
console.log(isEven(10)); // true
console.log(isEven(23)); // false
console.log(isEven(-5)); // false
console.log(isEven(-2)); // true
console.log(isEven(0)); // true


// TRICKY PART
console.log(isOdd("")); // false
console.log(isEven("")); // true
console.log(isOdd("" * 5 + true)); // true
console.log(isEven("2" / 1 + 8)); // true