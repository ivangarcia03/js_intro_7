
// ** Different ways of writing builtin array methods
var numbers = [1,2,3];

// normal forEach loop
numbers.forEach(function(item) {
  console.log(item)
});

// arrow function syntax
numbers.forEach((item) => {
  console.log(item);
});
// one line
numbers.forEach((item) => console.log(item));

// callback
numbers.forEach(logItems);

function logItems(items) {
  console.log(items)
}


// ** How can i find a sum of numbers => 6
let sum = 0;
numbers.forEach((n) => sum+=n);
// same with (for of) 
// reduce function
let sumWithReduce = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log("sum: ", sumWithReduce); // ? => 6