
// import { add } from "./math.js";
// import { add as dateAdd } from "./date.js";

// Create a module object
import * as MATH from './math.js';
import * as DATE from './date.js';

// class example
import MathClass from './math.js';

console.log(MATH.add(1,2)); // 3
console.log(DATE.add(4,5)); // 9

console.log(MATH.substract(9, 2)) // 7
console.log(DATE.getCurrentYear()); // 2023


const mathObj = new MathClass(4,5);
console.log(mathObj.add());