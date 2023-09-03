const car = {
    color : 'red',
    year : 2023,
    make : 'BMW',
    model : 'X7' 
};

console.log(car.color); // red
console.log(car.year); // 2023
console.log(car.make); // BMW
console.log(car.model); // X7

// All the keys ->      [ 'color', 'year', 'make', 'model' ]
// All the values ->    [ 'red', 2023, 'BMW', 'X7' ]
// All the pairs ->     // [ [ 'color', 'red' ],[ 'year', 2023 ],[ 'make', 'BMW' ],[ 'model', 'X7' ] ]

const allKeys = Object.keys(car);
console.log(Array.isArray(allKeys)); // true

console.log(allKeys); // [ 'color', 'year', 'make', 'model' ]

console.log(Object.keys(car)); // [ 'color', 'year', 'make', 'model' ]


const allValues = Object.values(car);
console.log(Array.isArray(allValues)); // true

console.log(allValues); // [ 'red', 2023, 'BMW', 'X7' ]

console.log(Object.values(car)); // [ 'red', 2023, 'BMW', 'X7' ]


const allPairs = Object.entries(car);
console.log(Array.isArray(allPairs)); // true

console.log(allPairs); // // [ [ 'color', 'red' ],[ 'year', 2023 ],[ 'make', 'BMW' ],[ 'model', 'X7' ] ]

console.log(Object.entries(car)); // [ [ 'color', 'red' ],[ 'year', 2023 ],[ 'make', 'BMW' ],[ 'model', 'X7' ] ]


// looping all the values of the car object with for...of loop
console.log('\n----------------------\n')

for(const value of Object.values(car)) {
    console.log(value);
}


// looping all the values of the car object with for...in loop
console.log('\n----------------------\n')

for(const x in car){
    console.log(car[x]);
}


// looping all the keys of the car object with for...of loop
console.log('\n----------------------\n')

for(const key of Object.keys(car)){
    console.log(key);
}


// looping all the keys of the car object with for...in loop
console.log('\n----------------------\n')

for(const x in car){
    console.log(x);
}


// looping all the keys and values together with for...of loop
console.log('\n----------------------\n')

for(const [key, value] of Object.entries(car)) {
    console.log(`${key} = ${value}`);
}