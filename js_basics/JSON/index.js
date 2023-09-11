// Regular object
let person = {
    name: 'Alex',
    age: 28
};

console.log(person); // object 
console.log(typeof person); // object
console.log(person.name) // 'Alex'
console.log(person.age) // 28

// JSON.stringify() -> converts objects to JSON format

// Logic to send this person object to server
let formattedPerson = JSON.stringify(person);
console.log(formattedPerson); // string
console.log(typeof formattedPerson); // string
console.log(formattedPerson.name); // ? => undefined
console.log(formattedPerson.age); // ? => undefined

let x;
console.log(x); // ? => undefined
console.log(y); // ? => y is not defined

// JSON.parse() -> converts JSON format to objects

const data = '{"name": "Alex", "age": 28}'; // JSON

const convertedData = JSON.parse(data);

console.log(convertedData); // object
console.log(typeof convertedData); // object
console.log( convertedData.name); // object
console.log( convertedData.age); // object

// JSON.stringify(object, fun)
let person2 = {
    name: 'Alex',
    age: 28
};
console.log(person2);

const OnlyNameJSON = JSON.stringify(person2, (key, value) => {
    console.log("key", key);

    if(key === "age" && value < 30) {
        return undefined;
    }
    return value;
})
console.log(OnlyNameJSON);

// Pass that second argument as an array
const keys = ['name', 'age', 'email'];
const OnlyNameJSON2 = JSON.stringify(person2, keys);
console.log(OnlyNameJSON2);