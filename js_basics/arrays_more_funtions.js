const arr1 = [2, 3, 5];

const arr2 = arr1.reverse();

console.log(arr1); // [ 5, 3, 2 ]
console.log(arr2); // [ 5, 3, 2 ]


const arr3 = arr2.reverse();

console.log(arr1); // [ 2, 3, 5 ]
console.log(arr2); // [ 2, 3, 5 ]
console.log(arr3); // [ 2, 3, 5 ]


// slice() and splice()
// slice() is used to get sub-array from an array
// splice() is used to add or remove elements from an array

const arr = ['Grapes', 'Kiwi', 'Apple', 'Orange'];

const sub_array_1 = arr.slice();
const sub_array_2 = arr.slice(0);
const sub_array_3 = arr.slice(1);

console.log(sub_array_1); // [ 'Grapes', 'Kiwi', 'Apple', 'Orange' ]
console.log(sub_array_2); // [ 'Grapes', 'Kiwi', 'Apple', 'Orange' ]
console.log(sub_array_3); // [ 'Kiwi', 'Apple', 'Orange' ]

const sub_array_4 = arr.slice(0, 1);
const sub_array_5 = arr.slice(1, 3);
const sub_array_6 = arr.slice(2, 8);

console.log(sub_array_4); // [ 'Grapes' ]
console.log(sub_array_5); // [ 'Kiwi', 'Apple' ]
console.log(sub_array_6); // [ 'Apple', 'Orange' ]

console.log(arr.slice(-Infinity, Infinity));

// [ 'Grapes', 'Kiwi', 'Apple', 'Orange' ]
console.log(arr.slice(3, 1)); // []

console.log(arr); // [ 'Grapes', 'Kiwi', 'Apple', 'Orange' ]



// [ 'Grapes', 'Kiwi', 'Apple', 'Orange' ]
arr.splice(1, 0, 'Pineapple'); 
console.log(arr); // [ 'Grapes', 'Pineapple', 'Kiwi', 'Apple', 'Orange' ]

arr.splice(1, 3);
console.log(arr); // [ 'Grapes', 'Orange' ]

arr.splice(5, 3);
console.log(arr); // [ 'Grapes', 'Orange' ]

arr.splice(5, 0, 'Peach', 'Berry');
console.log(arr); // [ 'Grapes', 'Orange', 'Peach', 'Berry' ]

arr.sort();
console.log(arr); // [ 'Berry', 'Grapes', 'Orange', 'Peach' ]

arr.push('apple');
arr.push('Banana');
console.log(arr); // [ 'Berry', 'Grapes', 'Orange', 'Peach', 'apple', 'Banana' ]

arr.sort()
console.log(arr); // [ 'Banana', 'Berry', 'Grapes', 'Orange', 'Peach', 'apple' ]


const chars = [['a', 'b'], ['1', '2'], ['#', '&', '^', '('], ' '];
const chars_flat = chars.flat();

console.log(chars);
console.log(chars_flat);