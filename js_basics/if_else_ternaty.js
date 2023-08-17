let num = -2;

if(num % 2 === 0) console.log("EVEN");
else console.log("ODD");

num % 2 === 0 ? console.log("EVEN") : console.log("ODD");

if(num > 0) console.log("POS");
else if(num < 0) console.log("NEG");
else console.log("ZERO");

num > 0 ? console.log("POS") : num < 0 ? console.log("NEG") : console.log("ZERO");


/*
Assume you are given a number
print true if the number is divisible by 10
print false otherwise

10 -> true
20 -> true
30 -> true
5  -> false
17 -> false
93 -> false
*/

let number;

console.log(number % 10 === 0);

if(number % 10 === 0) console.log(true);
else console.log(false);

number % 10 === 0 ? console.log(true) : console.log(false);

let result = number % 10 === 0 ? true : false;

console.log(result);
console.log(number % 10 === 0 ? true : false);