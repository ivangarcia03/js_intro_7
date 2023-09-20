// CLOSURE
function outerFunction() {
    const outerVariable = "I am from outerFunction";
    function innerFunction() {
        console.log(outerVariable);
    }
    return innerFunction; // Return the inner function
}
const closure = outerFunction(); // Execute outerFunction and store its inner function in 'closure'
closure(); // Call the inner function
// Output: "I am from outerFunction"



// IIFE
(function () {
    console.log("I am an IIFE");
})();

(function (a, b) {
    console.log(a + b);
})(5, 10);



// CURRYING
function add(a, b) {
    return a + b;
}

function curryAdd(a) {
    return function (b) {
        return a + b;
    };
}
console.log(add(2, 3));
console.log(curryAdd(2)(3));

// Ramez's example
function add(a) {
    return function(b) {
        return a + b;
    };
}
const deductThree = add(-3);
console.log(deductThree(5)); // Output: 8 , (5+3)