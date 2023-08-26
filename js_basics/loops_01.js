// Write a code that outputs "Hello" to the console 5 times - iteration - each execution of the loop
/*
start point -> 1
condition - termination -> 5
update ++

for(start; termination; update){
    // my code to execute
}
*/

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log('End of the program');


/*
Write a program that outputs numbers from 5 to 25
5
6
7
.
.
.
.
24
25

start: 5
termination: 25
update: ++ (increment)
*/

for (let i = 5; i <= 25; i++) {
    console.log(i);
}


/*
Write program that outputs number between 15 and 1 descending
15
14
13
.
.
.
.
3
2
1

start: 15
termination: 1
update: -- (decrement)
*/

for (let i = 15; i !== 0; i--) {
    console.log(i);
}

// Preferred way
for (let i = 15; i >= 1; i--) {
    console.log(i);
}


/*
Write a program that outputs only even numbers from 0 to 10 (0 and 10 are included)
        Expected output:
        0
        2
        4
        6
        8
        10
*/

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) console.log(i);
}

for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

for (let i = 0; i <= 5; i++) { // 0 1 2 3 4 5
    console.log(i * 2);
}

/*
Write a program to check numbers from 1 to 50 (both included) and ouput all the numbers that can be divided by 5
        Expected output:
        5
        10
        15
        .
        .
        .
        40
        45
        50
*/

for(let i = 1; i <= 50; i++) {
    if(i % 5 === 0) console.log(i);
}


/*
Write a program that finds the sum of numbers from 1 to 5 (both inclusive)

1 + 2 + 3 + 4 + 5

15
*/

let sum = 0;

for(let i = 1; i <= 5; i++){ // i = 1, 2, 3, 4, 5
    sum += i; // sum = 1, 3, 6, 10, 15
}

console.log(sum); // 15

/*
Write a program that finds the sum of numbers from 10 to 15 (both inclusive)

10 + 11 + 12 + 13 + 14 + 15

75
*/

sum = 0;

for(let i = 15; i >= 10; i--){
    sum += i;
}

console.log(sum); // 75