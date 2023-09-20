/**
 * Object literal
 */ 
const person = {
    name: 'Yuliia',
    greet() {
        console.log(`Hello, my name is ${this.name}`)
    }
};
console.log(person);

function createPerson(name) {
    let obj = {};
    obj.name = name,
    obj.greet = function() {
        console.log(`Hello, my name is ${obj.name}`)
    }
    console.log(obj);
    return obj;
}

const yulia = createPerson('Yulia');
const alex = createPerson('Alex');
const joe = createPerson('Joe');

yulia.greet();


/**
 * Prototypical Chain
 */

// Create a new date object
const date = new Date('December 17, 1995 03:24:00');
console.log(date);
console.log(typeof date); // object

// These methods coming from Date 
const fullyear = date.getFullYear();
console.log(fullyear);
console.log(typeof fullyear);

// These methods coming from Object 
console.log(date.toString());
console.log(typeof date.toString());
console.log(date.toLocaleDateString());
console.log(typeof date.toLocaleDateString());

// date -> Date -> Object -> null


/**
 * 1.Constructor function
 */

const Animal = function(name, breed) { 
    this.name = name;
    this.breed = breed;
}

Animal.prototype.getDetails = function() {
    console.log(`${this.name} is a ${this.breed}`)
}

const Cat = function(name, breed) {
    // call
    Animal.call(this, name, breed)
}

Cat.prototype.meow = function() {
    console.log('meow');
}

const Dog = function(name, breed) {
    Animal.call(this, name, breed)
}

Dog.prototype.bark = function() {
    console.log('bark');
}


// Link prototypes
Cat.prototype = Object.create(Animal.prototype); 
Cat.prototype.constructor = Cat;
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;


const cat1 = new Cat('Leo', 'Bengal');
console.log(cat1);
console.log(cat1.getDetails());

const dog = new Dog('Lia', 'French Bulldog');
console.log(dog);
console.log(dog.getDetails());


/**
 * 2. Class
 */

class Animal2 {
    constructor(name, breed) {
        // header
        this.name = name;
        this.breed = breed;
    }
    // class body
    static getDetails() {
        console.log(`${this.name} is a ${this.breed}`)
    }
}

// const animal = new Animal2('Animal name');
// console.log(animal)
// animal.getDetails();


class Cat2 extends Animal2 {
    #owner;
    constructor(name, breed) {
        super(name, breed) // it calls parent class constructor
        this.#owner = 'Ihar';
    }

    meow() {
        console.log('meow')
    }
}

const cat2 = new Cat2('Leo', 'Bengal');
console.log(cat2)
// cat2.getDetails();
// cat2.meow();
// Cat2.meow();
console.log(cat2.owner);


class Dog2 extends Animal2 {
    constructor(name, breed) {
        super(name, breed) // it calls parent class constructor
    }

    bark() {
        console.log('bark')
    }
}

const dog2 = new Dog2('Lia', 'French Bulldog');
console.log(dog2)
dog2.getDetails();
dog2.bark();

/**
 * Object.create() => Look up examples and compare
 */

/**
 * Getter and Setter
 */

class Person {
    #name = 'Joe'

    getName() {
        return this.#name;
    }
    setName(val) {
        this.#name = val;
        // return val;
    }

    get name1() {
        return this.#name;
    }
    set name1(val) {
       if(val === 'admin') {
        this.#name = val;
       }
    }
}
const p = new Person();
// console.log(p.name);
// console.log(p.getName());
// p.setName('Igor');
// console.log(p.getName());


console.log(p.name);
console.log(p.name1);
// p.set = 'Igor';
p.name1 = 'Igor';
console.log(p.name1);

p.name  // undefined
getName() // Joe


/**
 * Activity
 */

class Course {
    constructor(title, length, price) { // ideally rename this price as well
        this.title = title;
        this.length = length;
        this._price = price;
    }

    // getPrice() { } regular function and also OK
    // getter
    get price() {
        return '$' + this._price;
    }
    // setter
    set price(val) {
        if(val < 0) {
            console.log('Invalid value')
        } 
        this._price = val;
    }
    calcLenToPriceValue() {
        return this.length / this.price; // When $ added this will print NaN
    }
    printSummary() {
        return `${this.title} lasts ${this.length} and costs ${this.price}`;
    }
}

const jsCourse = new Course('JavaScript Course', 6, 8000);
const cypressCourse = new Course('Cypress Course', 3, 4000);

console.log(jsCourse); // Course { title: 'JavaScript Course', length: 6, price: 8000 }
console.log(cypressCourse); // Course { title: 'Cypress Course', length: 3, price: 4000 }

console.log(jsCourse.calcLenToPriceValue()) // 0.00075
console.log(jsCourse.printSummary()) // JavaScript Course lasts 6 and costs 8000

console.log(cypressCourse.calcLenToPriceValue()) // 0.00075
console.log(cypressCourse.printSummary()) // Cypress Course lasts 3 and costs 4000

console.log(jsCourse.price); // $4000
jsCourse.price = 7000; 
console.log(jsCourse.price); // $7000


console.log('----------');

class PracticalCourse extends Course {
    constructor(title, length, price, numOfExercises) {
        super(title, length, price);
        this.numOfExercises = numOfExercises;
    }
}

const pCourse = new PracticalCourse('Practical Course', 2, 1000, 12);
console.log(pCourse) // PracticalCourse { title: 'Practical Course', length: 2, price: 1000, numOfExercises: 12 }
console.log(pCourse.printSummary()); // Practical Course lasts 2 and costs 1000

class TheoreticalCourse extends Course {
    publish() {
        return 'Course published today!';
    }
}

const tCourse = new TheoreticalCourse('SDLC', 3, 1500);
console.log(tCourse); // TheoreticalCourse { title: 'SDLC', length: 3, price: 1500 }
console.log(tCourse.publish()); // Course published today!
console.log(tCourse.printSummary()); // SDLC lasts 3 and costs 1500