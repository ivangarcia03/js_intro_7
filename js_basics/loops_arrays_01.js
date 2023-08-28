const names = ['John', 'Max', 'Alex', 'Jane'];

// output all the names to the console one by one
// John -> it is name of names
// Max  -> it is name of names
// Alex -> it is name of names
// Jane -> it is name of names
// console.log(names[0]); // WORST IDEA
// console.log(names[1]); // STAY AWAY
// console.log(names[2]); // DON'T DO
// console.log(names[3]); // DO NOT EVEN ATTEMPT

for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

for(let name of names){
    console.log(name);
}

/*
Output these names uppercased
JOHN
MAX
ALEX
JANE
*/
for(let i = 0; i < names.length; i++){
    console.log(names[i].toUpperCase());
}

for(const name of names){
    console.log(name.toUpperCase());
}




/*
Assume you are given an array that stores numbers
Count how many positive numbers you have in the below array     -> 4
Negatives   -> 3
Neutral     -> 3
Even        -> 7
Odd         -> 3
Number divisivible by __ -> 


*/
console.log('\n--------TASK-1 Count Positives---------\n');
const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];

let countPos = 0;

for(const number of numbers){
    if(number > 0) countPos++;
}

console.log(countPos);

console.log('\n--------TASK-2 Count Evens---------\n');
//Count even numbers

let countEven = 0;

for(const number of numbers){
    if(number % 2 === 0) countEven++;
}

console.log(countEven);


console.log('\n--------TASK-3 Print each number multiplied by 5---------\n');
for(const number of numbers){
    console.log(number * 5);
}


/*
Write a function that takes a number and returns it multiplied by 5
multiply5

Arrow function
*/

console.log('\n--------TASK-3 Print each number multiplied by 5 using forEach() function---------\n');

function multiply5(number) {
    console.log(number * 5);
}

numbers.forEach((number) => {
    console.log(number * 5);
});