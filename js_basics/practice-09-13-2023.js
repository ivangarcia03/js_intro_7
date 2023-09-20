// Closure practice

var a = 12;
(function () {
    console.log(a); // ?
    // console.log(b); // ?
    function f() {
        let b = 13;
        console.log(a) // ?
    }
    f();
})();

// Answer: 12,
// --------------

var a = 5;
(function () {
    var a = 12;
    console.log(a); // 12
})();

const a = 5;
(function () {
    const a = 12;
    console.log(a); // 12
})();

const a = 5;
(function () {
    a = 12;
    console.log(a); // Error
})();

// --------------
var a = 10;
var x = (function () {
    var a = 12;
    return (function () {
        console.log(a); // ? => 12
    });
})();
x();
// --------------
var a = 10;
var x = (function () {
    var y = function () {
        var a = 12;
    };
    y();
    return function () {
        console.log(a); // ?
    }
})();
x();

// --------------
var a = 10;
var x = (function () {
    (function () {
        a = 12; // <<< look carefully at this line.
    })();
    return (function () {
        console.log(a);
    });
})();
x();
// --------------
var a = 10;
(function () {
    var a = 15;
    global.x = function () {
        console.log(a); // ?
    }
})();
x();

// --------------

function a() {
    var a = 1;
    console.log(a);
    var b = function () {
        console.log(a);
        var c = function () {
            console.log(a);
        }
        c(); // ?
    }
    b(); // ?
}
a();  // ?

// 1, 1, 1
// undefined, undefined, 1
// 
// --------------

var a = 1;
function b() {
    // hoisting up to b funciton body
    a = 10;
    // return;
    // console.log(a); // 10
    return a;
    function a() { }
}
b();
console.log(a); // ? => 1
// 1, 10

// --------------
function parent() {
    // var hoisted;
    // function hoisted;

    // hoisted = "I'm a variable";

    var hoisted = "I'm a variable";
    function hoisted() {
        return "I'm a function";
    }
    return hoisted();
}
console.log(parent()); // ? => TypeError: hoisted is not a function

// Does function gets hoisted?
// Does variable gets hoisted?

function parent() {
    const hoisted = "I'm a variable";
    const hoisted2 = function () {
        return "I'm a function";
    }
    return hoisted();
}
console.log(parent());


// Currying ?
function curry(n1, n2) {
    return n1 + n2;
}

curry(1, 2);
// convert this curry function
function curriedCurry(n1) {
    return function (n2) {
        return n1 + n2;
    }
}
console.log(curriedCurry(1)(2));

const add2 = curriedCurry(1);
console.log(add2(2));

// Exercise ----------

let place = 'Planet Earth';
function HQ() {
    return middleFunction('United States');

    function middleFunction(country) {
        return innerFunction('Illinois');

        function innerFunction(state) {
            city = 'Chicago';
            return innermostFunction();

            function innermostFunction() {
                return 'Techglobal is at ' + place + ', ' + country + ', ' + state + ', ' + city;
            }
        }
    }
}

console.log(HQ()); // Techglobal is at Chicago, Chicago, Chicago, Chicago -> wrong
console.log(HQ()); // Techglobal is at Planet Earth, United States, Illinois, Chicago -> right

// ------------

let counter = 0;
const incrementalChange = (num) => {
    // incremnet here
    return counter += num;
    // return counter + num;
}

incrementalChange(2); // => 2
incrementalChange(6); // => 8
incrementalChange(-1); // => 7

// incrementalChange(2); // => 2
// incrementalChange(6); // => 6
// incrementalChange(-1); // => -1