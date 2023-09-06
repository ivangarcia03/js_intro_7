const numbers = [-5, 0, 5, 10, 23, -10];

// check if some elements are divisible by 5    -> true
const r1 = numbers.some(x => x % 5 === 0);
const r2 = numbers.find(x => x % 5 === 0) !== undefined;
const r3 = numbers.findIndex(x => x % 5 === 0) !== -1;

let r4 = false;

for(const number of numbers){
    if(number % 5 === 0) {
        r4 = true;
        break;
    }
}

console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);


const data = [true, 'str', 34];

// check if every element is boolean     -> false
console.log(data.every(x => (x === true || x === false)));


const cities = ['Rome', 'Kyiv', 'Paris', 'Milan']; 

// Check if every city has 4 or 5 letters   -> true
console.log(cities.every(city => city.length === 4 || city.length === 5));