// Q1
const KEY = 'white_rabbit';
if (true) {
    const KEY = 'ginger_rabbit'; // OK
    KEY = 'ginger_rabbit'; // Error
}
console.log(KEY); // white_rabbit

// Q2
let x = 42;
if (true) {
    let x = 1337; 
    x = 2121; // OK
}
console.log(x); // 42

// Q3
let x2 = 42;
if (true) {
    console.log(x2); // Cannot access 'x2' before initialization 
    let x2 = 1337;
}

// Q4
var x3 = `foo ${y}`, y = `bar ${x3}`;
console.log(x3); // foo undefined

// similar example with const 
const a1 = 'a1' + b1, b1 = 'b1';
console.log(a1) // Cannot access 'b1' before initialization

// Q5
let options = {
    protocol: protocol,
    url: url,
    method: method,
    callback: callback
  };
//   equal to ==>
let options2 = {
    protocol,
    url,
    method,
    callback
  };

// Q6
var score = [12, 7, 14];
console.log(Math.max(...score));

// Q7
function stuff(arg = "url") { // Default argument
    // Do stuff..
    console.log(arg);
}
stuff();
stuff('url2');
stuff('url3');

// Q8
function stuff2(x, ...y) {
    // Do stuff..
    console.log("x", x)
    console.log("y", y)
}
stuff2(1, [2,3]);
stuff2([2,3]);

// Q9
function stuff3(x, y=x/3) {
    console.log("x", x)
    console.log("y", y)
  }
  stuff3(6);

//   Q10
const {FOO, foo, bar} = {
    foo: 'FOO',
    bar: 'BAR'
  };
  console.log(FOO)
  console.log(foo)
  console.log(bar)


//   Q11
const [first, , third] = [1, ,2,0,0,0,0,0,3];
console.log(first)
console.log(third)
// const [first1, ...rest, last] = [1, ,2,0,0,0,0,0,3]; // error
// console.log(first)
// console.log(rest)

// Q12
function stuff4(a, x=12, y=42) {
    // Do stuff..
  }
//   stuff(1, ,2); // error
  stuff4(1, undefined,2);
  stuff4(1, null,2);

  // Q13
  let point = [1,3], segment = [point,[5,5]], triangle = [...segment,[1,8]];
//  [[1,3], [5,5]]
  // [[1,3], [5,5],[1,8]]
  console.log(triangle)

//   Q14
let num1 = [40,50,60];
let num2 = [10,20,30,...num1,70,80,90,100];
console.log(num2);

// Q15
const obj = { foo: 1 }; 
obj.bar = 2;

// Q16
let a = 12,
b = 3;
// swap
[a, b] = [b, a];
console.log(a) // 3
console.log(b) // 12

// swap without ES6
let temp = 0;
temp = a;
a = b;
b = temp;


function double() { 

}
function addOne() { 

}
function ab(arr, cb) {
    // does something 
    // also using cb function
}

ab([1,2,3], double) // [2,4,6] => double
ab([1,2,3], addOne) // [2,3,4] => add +1