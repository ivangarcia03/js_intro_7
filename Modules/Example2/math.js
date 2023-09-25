
// Named export
export const add = (num1, num2) => {
    console.log('add from math.js');
    return num1 + num2;
};

export const substract = (num1, num2) => {
    return num1 - num2;
}

// Different way of exporting named functions
// export {
//     add,
//     substract
// }


const multiply = (num1, num2) => {
    return num1 * num2;
};

export default multiply;

// Not allowed
// const myVar = 10;
// export default  myVar;