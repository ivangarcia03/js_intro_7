let firstName = "John", lastName = "doe";

let age, address, favNumber;

age = 25, address = "IL", favNumber = 4;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(address);
console.log(favNumber);

console.log(firstName + lastName); // johnDoe
console.log(age + favNumber); // 29

console.log(address + age);//IL25

console.log(favNumber + firstName); // 4john

console.log(age + favNumber + address); // 29IL
console.log(address + age + favNumber); // IL254
console.log(address + (age + favNumber)); // IL254

console.log(favNumber * 2 + age);// 33

// my fullname is John Doe.
console.log("My name is John Doe.");
