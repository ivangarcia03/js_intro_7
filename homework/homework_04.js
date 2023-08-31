

// Task -1 

for(let i = 1; i <= 100; i++){
    if(i % 7 === 0) console.log(i);
 }


 // Task - 2

 for(let i = 1; i <= 50; i++){
    if(i % 2 === 0 && i % 3 === 0) console.log(i);
 }

 // Task - 3

 for(let i = 100; i >= 50; i--){
    if(i % 5 === 0) console.log(i);
 }


 // Task - 4

 for(let i = 0; i <= 7; i++){
    console.log(`The square ${i} is = ${i * i}`);
 }

 // Task - 5

 let sum = 0;
for(let i = 1; i <= 10; i++){
    sum += i;
}
console.log(sum);

// Task - 6

let randomNum = Math.ceil(Math.random() * 10);
for (let i = randomNum; i > 1; i--) {
    randomNum *= (i - 1);
}
console.log(randomNum);

// Task - 7

let randomNumber;
let attempts = 0
while(randomNumber % 5 !== 0){
    randomNumber = Math.ceil(Math.random() * 100);
    attempts++;
    console.log(randomNumber);
}
console.log(`The random number is ${randomNumber} and it toke ${attempts} attemp/s
to generate it`);

// Task - 8

const country = ["Germany", "Argentina", "Ukraine", "Romania"];
console.log(country);
console.log(country.sort());

// Task - 9

const cartoon = ["Scooby Doo", "Snoopy", "blue", "Pluto", "Dino", "Sparky"];
console.log(cartoon);
console.log(cartoon.includes("Pluto"));

// Task - 10

const cartoonCats = ["Garfield", "Tom", "Sylvester", "Azrael"];
console.log(cartoonCats.sort());
console.log(cartoonCats.includes(("Garfield") && ("Felix")));

// Task - 11

const nums = [10.5, 20.75, 70, 80, 15.75]

console.log(nums);
for(let i = 0; i < nums.length; i++){
    console.log(nums[i]);
}

// Task - 12

const schoolSupply = ["Pen", "notebook", "Book", "Paper", "bag", "pencil", "Ruler"];
let count = 0;
console.log(schoolSupply);
for(let i = 0; i < schoolSupply.length; i++){
    if(schoolSupply[i].toLowerCase().startsWith("b") || schoolSupply[i].toLowerCase().startsWith("p")){
     count++;
    }
}
let count1 = 0
for(let i = 0; i < schoolSupply.length; i++){
    if(schoolSupply[i].toLowerCase().includes("book") || schoolSupply[i].toLowerCase().includes("pen")){
        count1++
}
}
console.log(count);
console.log(count1);

// Task - 13

const numbers1 = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78]
let moreThanTen = 0;
let lessThanTen = 0;
let equalTen = 0;
for(let i = 0; i < numbers1.length; i++){
    if(numbers1[i] > 10){
    moreThanTen++
    }else if(numbers1[i] < 10){
        lessThanTen++
    }else{
        equalTen++
    }
}
    console.log(numbers1);
    console.log(`Elements that are more than 10 = ${moreThanTen}`);
    console.log(`Elements that are less than 10 = ${lessThanTen}`);
    console.log(`Elements that are equal to 10 = ${equalTen}`);


    
// Task - 14

const firstArray = [5, 8, 13, 1, 2];
const secondArray = [9, 3, 67, 1, 0];
const thridArray = [];
for(i = 0; i < firstArray.length; i++){
    let maxNumber = Math.max(firstArray[i], secondArray[i]);
    thridArray.push(maxNumber);
}
console.log(firstArray);
console.log(secondArray);
console.log(thridArray);

// Task - 15
function firstDuplicate(array){
    for(let i = 0; i < array.length; i++){
        for( let j = i + 1; j < array.length; j++){
            if (array[i] === array[j]){
                return array[i];
            }
        }
    }
    return -1
}
console.log(firstDuplicate([3, 7, 10, 0, 3, 10]));
console.log(firstDuplicate([5, 7, 7, 0, 5, 10]));
console.log(firstDuplicate([5,'5', 3, 7, 4]));
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc']));
console.log(firstDuplicate([1, 2, 3]));
console.log(firstDuplicate(['foo', 'abc', 123, 'bar']));


// Task - 16

function getDuplicates(arr){
    const duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        }
    }
    return duplicates;
}
console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0]));
console.log(getDuplicates([1, 2, 5, 0, 7,]));
console.log(getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo' ]));
console.log(getDuplicates(['foo', '12', 12, 'bar', 'a']));


// Task -17


function reverseStringWords(str){
    const words = str.split(" ");
    for(let i = 0; i < words.length; i++){
        words[i] = words[i].split("").reverse().join("");
    }
    const reverseString = words.join(" ");
    return reverseString
}
console.log(reverseStringWords("Hello Wordl"));
console.log(reverseStringWords("I like JavaScript"));
console.log(reverseStringWords("Hello"));
console.log(reverseStringWords(" "));
console.log(reverseStringWords(""));


// Task - 18

function getEvens(num1, num2) {
    let evens = [];
    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
      if (i % 2 === 0) {
        evens.push(i);
      }
    }
    return evens;
  }
  console.log(getEvens(2, 7));
  console.log(getEvens(17, 5));
  console.log(getEvens(4, 4));
  console.log(getEvens(3, 3));

  // Task - 19
  
  function getMultipleOf5(num1, num2) {
  let multipleOf5 = [];
  for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
    if (i % 5 === 0) {
      multipleOf5.push(i);
    }
  }
  return multipleOf5;
}
console.log(getMultipleOf5(3, 17));
console.log(getMultipleOf5(23, 5));
console.log(getMultipleOf5(5, 5));
console.log(getMultipleOf5(2, 4));


// Task- 20

function fizzBuzz(arg1, arg2){

    const r = [];

    for(i = Math.min(arg1, arg2); i < Math.max(arg1, arg2); i++){
        if((i % 5 === 0) && (i % 3 === 0)) r.push("FizzBuzz");
        else if(i % 3 === 0) r.push("Fizz");
        else if(i % 5 === 0) r.push("Buzz");
        else r.push(i);
    }
    return r.join(" | ")
}
console.log(fizzBuzz(13, 30));

