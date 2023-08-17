// Task 1

let str1 = "5", str2 = "2";

console.log("The sum of 5 and 2 =" + (parseInt(str1) + parseInt(str2)));
console.log("The product of 5 and 2 = " + (str1 * str2));
console.log("The division of 5 and 2 = " + (str1 / str2));
console.log("The subtraction of 5 and 2 = " + (str1 - str2));
console.log("The remainder of 5 and 2 = " + (str1 % str2));
console.log("The exponentiation of 5 and 2 = " + (str1 ** str2));


// Task 2

let s1 = "200", s2 = "-50";
let max = Math.max(s1, s2);
let min = Math.min(s1, s2);
let avrg = (parseInt(s1) + parseInt(s2))/2;
let abs = Math.abs(s1 - s2);

console.log("The greather valueis is = " + max);
console.log("The smaller value is = " + min);
console.log("The avarage value is = " + avrg);
console.log("The absolute diference is = " + abs);

// Task 3

let ra1 = Math.ceil(Math.random() * 50);
let ra2 = Math.ceil(Math.random() * 50);

console.log("The obsolute difference between numbers is = "+ Math.abs(ra1 - ra2));


// Task 4

let r1 = Math.ceil(Math.random() * 50);
let r2 = Math.ceil(Math.random() * 50);
let r3 = Math.ceil(Math.random() * 50);
let r4 = Math.ceil(Math.random() * 50);
let r5 = Math.ceil(Math.random() * 50);

console.log("The max value is = " + Math.max(r1, r2, r3, r4, r5));
console.log("The min value is = " + Math.min(r1, r2, r3, r4, r5));

// Task 5

let ran1 = Math.ceil(Math.random() * 51) + 49;
let ran2 = Math.ceil(Math.random() * 51) + 49;
let ran3 = Math.ceil(Math.random() * 51) + 49;

console.log("The number 1 is = " + ran1);
console.log("The number 2 is = " + ran2);
console.log("The number 3 is = " + ran3);
console.log("The sum of the numbers is = " + (ran1 + ran2 + ran3));

// Task 6

let rNumber1 = Math.floor(Math.random() * 101);
let rNumber2 = Math.floor(Math.random() * 101);
let rNumber3 = Math.floor(Math.random() * 101);

console.log(rNumber1, rNumber2, rNumber3);
console.log(rNumber1 > 25 && rNumber2 > 25 && rNumber3 > 25);
console.log(!(rNumber1 <= 25 || rNumber2 <=25 || rNumber3 <= 25));

// Task 7

0
let Fname = "David"

console.log("The lenght of the name is = " + Fname.length);
console.log("The first character of the name is = " + Fname[0]);
console.log("The last character in the name is = " + Fname[Fname.length - 1]);
console.log("The first 3 character in the name are = " + Fname.slice(0, 3));
console.log("The last 3 character in th name are = " + Fname.slice(Fname.length - 3));

