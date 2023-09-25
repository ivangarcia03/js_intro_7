
import { add, substract } from './math.js';
// import MyMultiply from './math.js'; // works fine
import multiply from './math.js';

// Renaming exports
import { getCurrentYear, add as dateAdd } from './date.js';


console.log(add(4, 5)); // 9
console.log(substract(6, 5)); // 1

console.log(multiply(2,2)); // 4
// console.log(MyMultiply(2,2)); // 4

console.log(getCurrentYear()); // 2023

console.log(dateAdd(8, 10)) // 18