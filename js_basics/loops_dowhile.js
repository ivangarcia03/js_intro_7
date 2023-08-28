let number = 2;

let randomNumber;

let attempts = 0;

do {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attempts++;
} 
while(number !== randomNumber);


console.log(`The random number is finally ${randomNumber} and it is the number we looking for
It took ${attempts} time/s attempts to generate it!`);














let num = 1;
while(num <= 3){
    console.log("While loop - Hello World");
    num++;
}

num = 1;
do {
    console.log("Do while Loop - Hello World"); // 3 times
    num++;
} while(num <= 3);