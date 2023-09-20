/*
* Over the course of this activity you are going to be using constructors to create simplistic characters for use within a very basic Roleplaying Game (RPG)
* Each character created using your constructor should have the following properties...
  * Name: The character's name --> String
  * Profession: What the character does for a living --> String
  * Gender: The character's gender --> String
  * Age: The character's age --> Integer
  * Strength: Abstraction for how strong the character is --> Integer
  * HitPoints (HP): Abstraction for how much health the character has --> Integer
  * PrintStats: Function which prints all of a character's properties to the screen
  * Once you have created your constructor, create two new characters and print their properties to the screen
  * Fool around and get comfortable with your constructor before moving onto the next parts of the activity
* Now that you feel comfortable with your constructor, it is time to start making this character creation system a little more reactive by adding in some more methods...
  * IsAlive: Function which prints whether or not this character is alive by looking into their hitpoints and determining whether they are above or below zero.
  * Attack: Function which takes in a second character's hitpoints and subtracts this character's strength from it.
  * LevelUp: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.

*/


// create Character class

class Character {
    constructor(name, profession, gender, age, strength, hitpoints) {
        this.name = name;
        this.profession = profession ;
        this.gender = gender;
        this.age = age;
        this.strength = strength;
        this.hitpoints = hitpoints;
    }
    
    printStats() {
        console.log(`My name is ${this.name}, profession is ${this.profession} my gender is ${this.gender}
        age is ${this.age} i have that much power ${this.strength} and my hit points is ${this.hitpoints}`)
    }
    isAlive() {
        if(this.hitpoints > 0) {
            console.log(` ${this.name} is alive`);
            return true;
        }
    }
    attack(attakedCharacter){
        attakedCharacter.hitpoints -= this.strength
    }
    levelUp() {
        this.age += 1;
        this.strength += 5;
        this.hitpoints += 25;
    }

}

const mario = new Character('Mario', 'farmer', 'male', 100, 8, 9)
const lara = new Character('Lara Soft', 'fighter', 'famale', 40, 10, 20);

console.log(mario);
console.log(lara);

// stats summary
mario.printStats()
lara.printStats()

// levelUp
mario.levelUp()
lara.levelUp()

// stats summary
mario.printStats();
lara.printStats();


// attack on characters
lara.attack(mario); // Mario(75 hitpoints), Lara(15 strenght) => 75-15=60
// mario.attack(lara);

// stats summary
mario.printStats()
lara.printStats()