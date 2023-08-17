// extracting substrings

let sentence = "JavaScript is the most used programing language";
let world = "JavaScript";

console.log(world.substring(0,4));
console.log(world.substring(4,0));

// slice() function
console.log(world.slice(0,4)); // java
console.log(world.slice(4,10)); // Script
console.log(world.slice(4)); // Script

/*
vaS
Scr
ipt
aScri
*/

console.log(world.slice(2,5));
console.log(world.slice(4,7));
console.log(world.slice(7));
console.log(world.slice(3,8));


// substring() function
console.log(world.substring(2,5));
console.log(world.substring(4,7));
console.log(world.substring(7));
console.log(world.substring(3,8));

//TRICKY PART
let car = "Tesla";
console.log(car.slice(2,15));
console.log(car.substring(2,15));

console.log(car.slice(-3,-1)); // 
console.log(car.substring(-3,2)); // te


// split function
let sentence1 = "JavaScript is the most used programing language";

console.log(sentence1.split(" "));
console.log(sentence1.split("most"));
console.log(sentence1.split(""));