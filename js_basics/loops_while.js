let countEven = 0
for(let i = 1; i < 10; i++){
    if(i % 2 === 0) countEven++;
}

console(countEven); // 4


// while version of above - count how many evens you have -> 4



let num = 1;
let countE = 0;

while(num < 10){
   if(num % 2 === 0) countE++;
   num++;
}

console.log(countE);


// Playing the number guess game
let number = 2;

let randomNumber = Math.floor(Math.random() * 10) + 1; // 7

let attempts = 1;

while(number !== randomNumber){
    console.log(randomNumber);
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attempts++;
}

console.log(`The random number is finally ${randomNumber} and it is the number we looking for
It took ${attempts} time/s attempts to generate it!`);


/*
Write a program that generates a random number between 1 to 50 (both inclusive)
Continue generating the number till you get a random number divisible by 10
*/

let ranNum = 1; // undefined
let att = 0;

while(ranNum % 10 !== 0){
    ranNum = Math.ceil(Math.random() * 50);
    att++;
    console.log(ranNum);
}

console.log(`Above random generator got the ${ranNum} finally after ${att} time/s.`); // 10, 20, 30, 40 or 50