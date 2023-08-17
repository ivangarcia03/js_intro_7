
let name = "Jason"

if(name[0] === "j" || name[0] === "J"){ // name.toLowerCase()[0] === "j"
    console.log("PARTY");
}
else{
    console.log("SORRY");
}



/*
write a program that generates a randowm number between -3 and 3 (both inclusive).

print them being and EVEN and ODD
print them being POS, NEG and ZERO


test Data:
0

expected Output:
Even
ZERO

Test data:
3

Expected Output:
ODD
POS
*/



function getRandomNumber(start, end){
    return Math.floor(Math.random() * (end - start + 1)) + start;
}



let num = getRandomNumber(-3, 3);

console.log(num);
if(num % 2 === 0) {
    console.log("EVEN");
    if(num > 0){
        console.log("POS");
    }
    else if(num < 0){
        console.log("NEG");
    }
    else {
        console.log("ZERO");
    }
}
else {
    console.log("ODD");
    if(num > 0){
        console.log("POS");
    }
    else if(num < 0){
        console.log("NEG");
    }
    else {
        console.log("ZERO");
    }
}
if(num > 0){
    console.log("POS");
    if(num % 2 === 0){
        console.log("EVEN");
    }
    else{
        console.log("ODD");
    }
}
else if(num < 0){
    console.log("NEG");
    if(num % 2 === 0){
        console.log("EVEN");
    }
    else{
        console.log("ODD");
    }
}
else {
    console.log("ZERO");
    console.log("EVEN");
}


/*
Write a funtion named checkDLAge it takes an argument as an age
And returns true if the age is more than 15
returns false if the age is less than 16

EXAMPLES:
checkDLAge(10) -> false
checkDLAge(15) -> false
checkDLAge(16) -> True
checkDLAge(25) -> True

*/

function checkDLAge(age){
    if(age > 15) return true;
    else return false;
}

console.log(checkDLAge(10));
console.log(checkDLAge(15));
console.log(checkDLAge(16));
console.log(checkDLAge(25));

/*
Retirment age = 65
if the age is more than or equals 65 -> you can be retired
if the age is less than 65
    64 -> you have 1 year left to get retired!
    55 -> you have 10 years left to get retired!
    43 -> you have 22 years left to get retired!
*/

let age = 60;

if(age >= 65){
 console.log("You can be retired!");
}
else{
    if (age === 64){
 console.log("You have 1 year left to get retired!");
    }
    else{
        console.log(`You have ${65 - age} left to get retired`);
}
}
