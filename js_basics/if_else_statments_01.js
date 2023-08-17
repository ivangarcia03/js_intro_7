

/*
Genera a random number between 0 and 1 ( both inclusive)
print " the number is Zero" if the generated is zero 
Print " the number is one" if the generated number is one
*/

let num = Math.floor(Math.random()* 2);

if(num === 0){
    console.log("The number is Zero");
}
else{
    console.log("The number is One");
}


let num2 = Math.floor(Math.random()*11);

if(num2 % 2 === 0){
    console.log("The number is Even");
} 
else{
    console.log("The number is ODD");
}


function getRandomNumber(start, end){
    return Math.floor(Math.random() * (end - start + 1)) + start;
} 

/*
Generate a random number between -2 and 2 ( both inclusive)
Print "The number is POSITIVE" if generated number is positive
Print "The number is NEGATIVE" if generated number is negative
Print "The number is ZERO" if generated number is zero
*/

let num3 = getRandomNumber(-2, 2)

console.log(num3);

if(num3 > 0){
    console.log("The number is POSITIVE");
}
else if(num3 < 0){
    console.log("The number is NEGATIVE");
}
else{
    console.log("The number is ZERO")
}


let r06 = getRandomNumber(0,6);

if(r06 === 0 || r06 === 6){
    console.log("WEEKEND");
}
else{
    console.log("WEEKDAY");
}


console.log(typeof NaN);


let point = 1;

let randomNumber = getRandomNumber(1,100);

console.log(randomNumber);

if(randomNumber % 10 === 0){
    console.log(point * 6);
}
else if(randomNumber % 2 === 0){
    console.log(point * 2);
}
else if(randomNumber === 7){
    console.log(point * 7);
}
else{
    console.log(point);
}

let days = getRandomNumber(0,6)

console.log(days);

if( days === 0 ){
    console.log("RED\nVACATION");
}
else if(days === 6){
    console.log("GREEN\nVACATION");
}
else{
    console.log("BLACK\nWORK");
}