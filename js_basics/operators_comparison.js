
let num1 = 3, num2 = 5, num3 = 3, num4 = "3", num5 = "5";

console.log(num1 == num2); // false
console.log(num1 == num3); // true
console.log(num1 == num4); // true

console.log(num1 === num4); // false

console.log(num1 != num3); // false
console.log(num1 !== num3); // false

console.log(num2 > num5); // false
console.log(num1 <= num3); // true

console.log(num1 + num5 < 2 * num4); // false

console.log(num4 * num5 != num3); // true

console.log(typeof (num4 * num5)); // number

console.log("abc" * "5"); // NaN - Not a Number
console.log(typeof NaN); // number


console.log("3" + "5" < 20); // 35 < 20 -> false
console.log("3" * "5" + 10 === 25); // true

console.log((10 >= "10") < 20); // true

console.log(true + 10); // 11
console.log(false + 10); // 10

console.log(null + 10); // 10
console.log("" + 10); // 10
console.log(undefined + 10); // NaN
console.log(NaN + 10); // NaN

console.log("Hello" + 10); // Hello10
console.log("5" % "2" === "1"); // false