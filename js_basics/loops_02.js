/*
Write a program that generates a random number between 10 and 20 (both inclusive)
And it outputs all the odd numbers starting from 1 to random number (both inclusive)

start point: 1
end point: randomNumber
update: ++
*/

for(let i = 1; i <= Math.floor(Math.random() * 11) + 10; i++){
    if(i % 2 !== 0) console.log(i);
}


/*
Print all the numbers between 2 random numbers in the range of 1 to 10 (both inclusive) in ascending order

r1 r2
7, 5    -> 5 6 7
4, 8    -> 4 5 6 7 8
5, 5    -> 5

start point: Math.min(r1, r2)
termination: Math.max(r1, r2)
update: ++
*/

let r1 = Math.ceil(Math.random() * 10);
let r2 = Math.ceil(Math.random() * 10);

for(let i = Math.min(r1, r2); i <= Math.max(r1, r2); i++){
    console.log(i);
}


/*
Output each character from TechGlobal School -> 
T
e 
c 
h 
G 
l 
o 
b 
a 
l  

S 
c 
h 
o 
o 
l
*/

let school = 'TechGlobal School';

for(let i = 0; i <= school.length-1; i++){
    console.log(school[i]);
}

/*
Count the total occurrences of letter o in TECHGLOBAL School  -> 3
*/

let count = 0;

for(let i = 0; i <= school.length-1; i++){
   if(school[i].toLowerCase() === 'o') count++; // 3
}

console.log(count);