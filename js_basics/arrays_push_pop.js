const arr = [];

console.log(arr.length); // 0

arr.push("Apple");
console.log(arr.length); // 1
console.log(arr); // [ 'Apple' ]

arr.push("Orange", "Kiwi", "Banana");

console.log(arr.length); // 4
console.log(arr); // [ 'Apple', 'Orange', 'Kiwi', 'Banana' ]


arr.pop(); // 'Banana'
arr.pop(); // 'Kiwi'

console.log(arr.length); // 2
console.log(arr); //[ 'Apple', 'Orange' ]