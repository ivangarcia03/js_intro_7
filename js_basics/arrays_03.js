const students = [];

students.push('Alex');

console.log(students); // [ 'Alex' ]

students.push('John', 'John', 'Jane');

console.log(students); // [ 'Alex', 'John', 'John', 'Jane' ]

students.push(['Mark', 'Max', 'Mariia']);

console.log(students); // [ 'Alex', 'John', 'John', 'Jane', [ 'Mark', 'Max', 'Mariia' ] ]
console.log(students.length); // 5

students.pop();
students.pop();

console.log(students); // [ 'Alex', 'John', 'John' ]


const newArr = [];
let result = newArr.shift(); // same result for pop() as well

console.log(result); // undefined
console.log(newArr); // []