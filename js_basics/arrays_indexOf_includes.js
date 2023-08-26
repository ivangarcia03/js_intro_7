const numbers = [25, 27, 7, 100, 7];

// includes() function
console.log(numbers.includes(10)); // false
console.log(numbers.includes(7)); // true


// indexOf() function
console.log(numbers.indexOf(5)); // -1
console.log(numbers.indexOf(7)); // 2
console.log(numbers.indexOf(numbers[3])); // 3


// lastIndexOf() function
console.log(numbers.lastIndexOf(7)); // 4
console.log(numbers.lastIndexOf(101)); // -1
console.log(numbers.lastIndexOf(14 / 2)); // 4