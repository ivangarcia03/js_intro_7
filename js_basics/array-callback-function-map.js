const names = ['John', 'Jane', 'Alex'];

// Create a new array with all names uppercased -> [ 'JOHN', 'JANE', 'ALEX' ]

const namesUpper = names.map((name) => name.toUpperCase());

console.log(namesUpper); // [ 'JOHN', 'JANE', 'ALEX' ]




/*
Create a new array with each name stored with its index as an object as below
    [
        { index: 0, value: 'John' },
        { index: 1, value: 'Jane' },
        { index: 2, value: 'Alex' }
    ]
*/

const result = names.map((name, i) => ({
    index: i,
    value: name
}));

console.log(result);


console.log(Object.keys(names));
console.log(Object.values(names));
console.log(Object.entries(names));


const result2 = [];

for(const [i, v] of Object.entries(names)){
    result2.push({
        index: Number(i),
        value: v
    });
}

console.log(result2);