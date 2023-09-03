const numbers = [-5, 0, 5, 10, 23, -10]



    let pos = [];

    for(const number of numbers){
        if(number > 0) pos.push(number);
    }

console.log(pos);

// 2. using for each()

const newArr2 = [];
numbers.forEach(number =>{
     if(number > 0) newArr2.push(number)
});

console.log(newArr2);

// 3. using filter()

const newArr3 = numbers.filter(x => x >0)

console.log(newArr3);


let even = [];
for(number of numbers){
    if(number % 2 === 0) even.push(number);
}

console.log(even);

const newArr4 = numbers.filter(x => x % 2 ===0);

console.log(newArr4);

const newArr5 = numbers.filter(x => x % 2 !==0);
const newArr6 = numbers.filter(x => x < 0);

console.log(newArr6);



const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];
// Find all the fruits that starts with M   -> [ 'Mango', 'Melon' ]
const newr1 = fruits.filter(x => x.startsWith("M"));
console.log(newr1);
// Find all the fruits that has apple  -> [ 'Apple', 'Pineapple' ]
const newr2 = fruits.filter(x => x.toLowerCase().includes("apple") );
console.log(newr2);
// Find all the fruits that has length of 5  -> [ 'Apple', 'Mango', 'Melon' ]
const newr3 = fruits.filter(x => x.length === 5 );
console.log(newr3);
// Find all the fruits that has length different than 5  -> [ 'Orange', 'Kiwi', 'Pineapple' ]
const newr4 = fruits.filter(x => x.length !== 5 );
console.log(newr4);
// Find all the fruits that has a or e  -> [ 'Apple', 'Orange', 'Pineapple', 'Mango', 'Melon' ]
const newr5 = fruits.filter(x => x.toLowerCase().indexOf('a') >= 0 ||x.toLowerCase().indexOf('e') >= 0 );
console.log(newr5);
// Count how many fruits has i  -> 2
const newr6 = fruits.filter(x => x.toLowerCase().indexOf('i') >= 0);
console.log(newr6.length);

// Count how many fruits ends with e  -> 3
const newr7 = fruits.filter(x => x.toLowerCase().endsWith('e'));
console.log(newr7.length);
// Store the first and last letters of the fruits as shown -> ['Ae', 'Oe', 'Ki', 'Pe', 'Mo', 'Mn']

const newr8 = fruits.map(x =>{
    let firstLetter = x[0];
    let lastLetter = x[x.length -1];
    return firstLetter + lastLetter;
});

console.log(newr8);