// Log window object
// console.log(window);  => not defined
console.log(global); // => huge object


/**
 * Global Scope
 */

let globalVariable = 'This is global variable';

console.log(globalVariable); // 'This is global variable'

// Global variable is accessible inside function
function someFunction() {
    console.log(globalVariable); // 'This is global variable'
}
someFunction();

// Global variable is accessible inside block
if(true) {
    console.log(globalVariable); //  'This is global variable'
}

/**
 * Local Scope
 */

// Inside function
function printColor() {
    var color = "blue";
    let color2 = "red";
    const color3 = "orange";
    // console.log(color); // blue
}
// console.log(color); // ? => color is not defined
// console.log(color2); // ? => color2 is not defined
// console.log(color3); // ? => color3 is not defined
printColor();

// Inside block
if(true) {
    var color4 = "blue";
    let color5 = "red";
    const color6 = "orange";
}
// console.log(color4); // ? => blue
// console.log(color5); // ? => color5 is not defined
// console.log(color6); // ? => color6 is not defined


// Reassignment
var color7 = 'purple';
let color8 = 'purple2';
const color9 = 'purple3';

if(true) {
    color7 = 'black';
    color8 = 'white';
    // color9 = 'red'; // error (more on this in ES6 topic)
    console.log('color7', color7) // black
    console.log('color8', color8) // white
    // console.log('color9', color9) // ?
}