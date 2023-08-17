function getRandomNumber(start, end){
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

/*
Write a code that generates a random number between 0 and 6 (both inclusive)
0 represents Sunday
1 represents Monday
.
.
.
.
6 represents Saturday

Print "WEEKEND" if the number is 0 or 6
Print "WEEKDAY" if the numbers is either 1, 2, 3, 4 or 5
*/

let day = getRandomNumber(0, 6);
console.log("The day is = " + day);

if(day === 6 || day === 0) {
    console.log("WEEKEND");
}
else {
    console.log("WEEKDAY");
}


if(day > 0 && day < 6) { 
    console.log("WEEKDAY");
}
else {
    console.log("WEEKEND");
}

/*
even -> 2 * points 
divided 10 -> 3 * points 
7 -> points * 7

2,4,6,8,10,12 -> multiply with 2
10,20,30...   -> multiply with 3
7 -> multiply 7

divisible 10 -> multiply with 6
even    -< multiply with 2
7 -> multiply 7

*/

let point = 1;

let randomNumber = getRandomNumber(1, 100);

if(randomNumber % 10 === 0){
    console.log(point * 6);
}
else if(randomNumber % 2 === 0){
    console.log(point * 2);
} 
else if(randomNumber === 7){
    console.log(point * 7);
}
else {
    console.log(point);
}


/*
Write a code that generates a random number between 0 and 6 (both inclusive)
0 represents Sunday
1 represents Monday
.
.
.
.
6 represents Saturday


0 -> print "RED"
6 -> print "GREEN"
1,2,3,4,5 -> print "BLACK"

If it is weekend -> "VACATION"
if it is weekday -> "WORK"

0 -> RED\nVACATION
6 -> GREEN\nVACATION
1,2,3,4,5 -> BLACK\nWORK
*/

let randomDay = getRandomNumber(0, 6);

// WAY-1
if(randomDay === 0 || randomDay === 6) {
    console.log("VACATION");
}
else {
    console.log("WORK");
}


if(randomDay === 0) {
    console.log("RED");
}
else if(randomDay === 6) {
    console.log("GREEN");
}
else {
    console.log("BLACK");
}


// WAY-2
if(randomDay === 6) {
    console.log("VACATION");
    console.log("GREEN");
}
else if(randomDay === 0) {
    console.log("VACATION");
    console.log("RED");
}
else {
    console.log("WORK");
    console.log("BLACK");
}


// WAY-3
if(randomDay === 0 || randomDay === 6) {
    console.log("VACATION");
    // GREEN or RED
    if(randomDay === 6){
        console.log("GREEN");
    }
    else {
        console.log("RED");
    }
}
else {
    console.log("WORK");
    console.log("BLACK");
}


// WAY-4
if(randomDay > 0 && randomDay < 6){
    console.log("WORK");
    console.log("BLACK");
}
else{
    console.log("VACATION");
    // GREEN or RED
    if(randomDay === 6){
        console.log("GREEN");
    }
    else {
        console.log("RED");
    }
}