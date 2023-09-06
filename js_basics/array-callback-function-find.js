const numbers = [0, 10, -4, 5, 2, -3];



// First positive -> 10
// First negative -> -4
// first even     -> 0
// first odd      -> 5

console.log(numbers.find(x => x >0));
console.log(numbers.find(x => x < 0));
console.log(numbers.find(x => x % 2 === 0));
console.log(numbers.find(x => x % 2 !== 0));
console.log(numbers.find(x => x > 100)); // undedfined

// The index of first positive -> 1
// The index of first negative -> 1
// The index of first even     -> 1
// The index of first odd -> 1

console.log(numbers.findIndex(x => x >0));
console.log(numbers.findIndex(x => x < 0));
console.log(numbers.findIndex(x => x % 2 === 0));
console.log(numbers.findIndex(x => x % 2 !== 0));
console.log(numbers.findIndex(x => x > 100)); // -1


// Last positive  -> 2
// last negative -> -4
// Last even      -> 2
// Last odd      -> 2


const things = ['Knife', 'Spoon', 'Fork', 'Pan', 'Mug'];

/*
Find first element that has 3 letter with its index
{
    value: 'Pan',
    index: 3
}
*/

console.log(things.find(x => x.length === 3));
console.log(things.findIndex(x => x.length === 3));