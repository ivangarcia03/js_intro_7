const numbers = [5, 10, 100];

// max  -> 100

let max = numbers[0];

for(const number of numbers) {
    max = Math.max(max, number);
}

console.log(max); // 100


console.log(numbers.reduce((max, number) =>  Math.max(max, number)));

// Find the sum of these numbers => 115

let sum = 0;

for(const number of numbers){
    sum += number;
}

console.log(sum);

const sumWithReduce = numbers.reduce((sum, num) => {
    return sum + num;
}, 0);

console.log(sumWithReduce);


// Find sum of the even numbers     -> 110
console.log(numbers.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0));

const sumEvens = numbers.reduce((acc, curr) => {
    if(curr % 2 === 0) return acc + curr;
    else return acc;
}, 0);

console.log(sumEvens);