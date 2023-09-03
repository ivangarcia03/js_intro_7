const numbers = [-5, 0, 5, 10, 23, -10];

// Find all the positive numbers -> [5, 10, 23]
const newArr1 = [];

// 1. using loops
for(const number of numbers) {
    if(number > 0) newArr1.push(number);
}

console.log(newArr1); // [ 5, 10, 23 ]


// 2. using forEach()
const newArr2 = [];
numbers.forEach( (number) => {
    if(number > 0) newArr2.push(number);
});

console.log(newArr2); // [ 5, 10, 23 ]

// 3. using filter()
const newArr3 = numbers.filter(x => x > 0);
console.log(newArr3); // [ 5, 10, 23 ]


// Find all the even numbers -> [ 0, 10, -10]
// Find all the odd numbers -> [ -5, 5, 23]

console.log(numbers.filter(x => x % 2 === 0)); // [ 0, 10, -10]
console.log(numbers.filter(x => x % 2 !== 0)); // [ -5, 5, 23]


// Replace all the negative numbers with zero -> [0, 0, 5, 10, 23, 0];
console.log(numbers.map(x => (x < 0 ? 0 : x))); // [ 0, 0, 5, 10, 23, 0 ]


const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];

// Find all the fruits that starts with M   -> [ 'Mango', 'Melon' ]
// Find all the fruits that has apple  -> [ 'Apple', 'Pineapple' ]
// Find all the fruits that has length of 5  -> [ 'Apple', 'Mango', 'Melon' ]
// Find all the fruits that has length different than 5  -> [ 'Orange', 'Kiwi', 'Pineapple' ]
// Find all the fruits that has a or e  -> [ 'Apple', 'Orange', 'Pineapple', 'Mango', 'Melon' ]
// Count how many fruits has i  -> 2
// Count how many fruits ends with e  -> 3
// Store the first and last letters of the fruits as shown -> ['Ae', 'Oe', 'Ki', 'Pe', 'Mo', 'Mn']

console.log(fruits.filter(fruit => fruit.toUpperCase()[0] === 'M')); // [ 'Mango', 'Melon' ]
console.log(fruits.filter(fruit => fruit.toLowerCase().includes('apple'))); // [ 'Apple', 'Pineapple' ]
console.log(fruits.filter(fruit => fruit.length === 5)); // [ 'Apple', 'Mango', 'Melon' ]
console.log(fruits.filter(fruit => fruit.length !== 5)); // [ 'Orange', 'Kiwi', 'Pineapple' ]

console.log(fruits.filter(fruit => {
    fruit = fruit.toLowerCase();
    return fruit.indexOf('a') >= 0 || fruit.indexOf('e') >= 0;
})); // [ 'Apple', 'Orange', 'Pineapple', 'Mango', 'Melon' ]

console.log(fruits.filter(x => x.toLowerCase().indexOf('i') >= 0).length); // 2
console.log(fruits.filter(x => x.toLowerCase().endsWith('e')).length); // 3

console.log(fruits.map(fruit => fruit[0] + fruit[fruit.length-1])); // [ 'Ae', 'Oe', 'Ki', 'Pe', 'Mo', 'Mn' ]