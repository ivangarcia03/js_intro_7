/*
0 - Today is Sunday
1 - Today is Monday
.
.
.
.
6 - Today is Saturday

Any number less than zero or more than 6 -> This number does not represent any day of the week!
*/

let day = 4;

if (day === 0) console.log("Today is Sunday");
else if (day === 1) console.log("Today is Monday");
else if (day === 2) console.log("Today is Tuesday");
else if (day === 3) console.log("Today is Wednesday");
else if (day === 4) console.log("Today is Thursday");
else if (day === 5) console.log("Today is Friday");
else if (day === 6) console.log("Today is Saturday");
else console.error("This number does not represent any day of the week!");


// Convert above task into switch statement
switch (day) {
    case 0:
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tueday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
}


/*
0 or 6 -> WEEKEND
1,2,3,4,5 -> WEEKDAY
*/

let randomNum = 8;

switch (randomNum) {
    case 0:
    case 6:
        console.log("WEEKEND");
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("WEEKDAY");
        break;
    default:
        console.error("This number does not represent any day of the week!");
}


// BEST PRACTICES 3
if(randomNum === 0 || randomNum === 6) console.log("WEEKEND");
else if(randomNum > 0 && randomNum < 6) console.log("WEEKDAY");
else console.error("This number does not represent any day of the week!");

switch("true"){
    case randomNum === 0 || randomNum === 6:
        console.log("WEEKEND");
        break;
    case randomNum > 0 && randomNum < 6:
        console.log("WEEKDAY");
        break;
    default:
        console.error("This number does not represent any day of the week!");    
}


console.log(new Date().getDay());
console.log(new Date().getMonth());
console.log(new Date().getFullYear());
console.log(new Date().getHours());
console.log(new Date().getMinutes());
console.log(new Date().getSeconds());

console.log(new Date().toLocaleDateString());
console.log(new Date().toLocaleTimeString());