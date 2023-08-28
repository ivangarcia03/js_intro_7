const numbers = [3, 4, 7, 3, 2, 2, 7];

//Find the average of these numbers -> 4

let sum = 0;

for(const number of numbers){
    sum += number;
}

console.log(sum / numbers.length);

/*
Requirement:
-Create 2 arrays that stores numbers below.
First array-> 		[ 5, 8, 2, 1, 2 ]
Second array -> 	[ 9, 3, 5, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will multiply the numbers of the same indexes from the first 2 arrays and output the third array as well.

Third array->       [ 45, 24, 10, 1, 0 ]
*/

const arr1 = [ 5, 8, 2, 1, 2 ];
const arr2 = [ 9, 3, 5, 1, 0 ];

const arr3 = [];

for(let i = 0; i < arr1.length; i++){ 
    arr3.push(arr1[i] * arr2[i]);
}

console.log(arr3);

/*
Please find the first even number from the below array
[1, 3, 0, 2, 6, 8] -> 0
*/

const nums = [1, 3, 0, 2, 6, 8];
let firstEven = null;

for(const num of nums){
   if( num % 2 === 0 ) {
    firstEven = num;
    break;
   }
}

console.log(firstEven);

firstEven = null;

for(let i = 0; i < nums.length; i++){
    if( nums[i] % 2 === 0 ) {
        firstEven = nums[i];
        break;
    }
}

console.log(firstEven);


// How to reverse a string
// John     -> nhoJ 
/*
n   name[3]
h   name[2]
o   name[1]
J   name[0]
*/

let name = 'John'; 

let reversedName = '';

for(let i = name.length-1; i >= 0; i--){
    reversedName += name[i];
}

console.log(reversedName); // nhoJ


let reversedName2 = name.split('').reverse().join(''); // nhoJ

console.log(reversedName2); // nhoJ


// Find the first city that has the odd length  -> Chicago

const cities = ['Berlin', 'Rome', 'Chicago', 'Kiev', 'Istanbul', 'Tokyo'];
let firstOdd = null;

for(const city of cities){
    if(city.length % 2 !== 0) {
        firstOdd = city;
        break;
    }
}

console.log(firstOdd);

// Find all the cities that has length more than 5 -> [ 'Berlin', 'Chicago', 'Istanbul' ]

const longCities = [];

for(const city of cities){
    if(city.length > 5) longCities.push(city);
}

console.log(longCities);



const longCities2 = cities.filter(city => city.length > 5);
console.log(longCities2);