// Equality and Comparison

// === vs ==

console.log(10 === '10'); // false
console.log(10 == '10'); // true

// !== vs !=
console.log(10 !== '10'); // true
console.log(10 != '10'); // false

// Examples
console.log([] == false); // true (true == false)
// console.log([] === false); // false (true === false)

if([]) {
    // true
    console.log('pass!');
}

console.log([] == ![]) // true
console.log(false == !false) // true

// Conditional Statements
if({}) {
    // true 
    console.log('--- empty object is true') // 
}
if(undefined) {
    // false
    console.log('--- undefined is true') // 
}
if(null) {
    // false
    console.log('--- null is true') // 
}
if(true) { 
    // true
    console.log('--- true is true') //
} 
if(false) {
    // false
    console.log('--- false is true') // 
}
if(0) {
    // false
    console.log('--- Zero(0) is true') // 
}
if(NaN) {
    // false
    console.log('--- NaN is true') // 
}
if("") {
    // false
    console.log('--- Empty string is true') 
}
if("Some string") {
    // true
    console.log('--- String is true') // 
}

// NaN example
let num = '10';

console.log(typeof num === 'number'); // false
console.log(Number.isNaN(num)); // false
console.log(isNaN(num)); // false


// Nullish coalescing operator ??
let nullishVal = null;
let defaultVal = 'default value';

console.log(nullishVal ?? defaultVal); // defaut value 

console.log(nullishVal === true ? nullishVal : defaultVal );
console.log(nullishVal !== null || undefined ? nullishVal : defaultVal );

if(nullishVal !== null || undefined) {
    console.log(nullishVal)
} else {
    console.log(defaultVal);
}

console.log();

// Nul Check Example
const products = {
    prices: {
        regularPrice: 29.99,
        discountPrice: 25.99
    },
    title: 'Mouse',
}
debugger;
console.log(products.isAvailable); // undefined // error
console.log(products?.isAvailable); // undefined // error

if(products.isAvailable) {
    //
} else {
    console.log("products object doesn't have a key called isAvailable");
}

if('development') {
    console.log('password')
} else {
    console.log('has version of password')
}

// console => object
let response = 'WARNING';

if(response === 'SUCCESS') {
    console.log('success')
} else if(response === 'WARNING') {
    console.warn('Warning');
} else {
    console.error('Error');
}

// console.time();
console.time();
for(let i=0; i < 10000; i++) {
    console.log();
}
console.timeEnd();