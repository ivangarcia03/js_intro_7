const person = { 
  fName : 'John',
  age : 25,
  city : 'Chicago'
};

 console.log(person);

 // adding more properties
 person.lName = 'Doe'; 
 person['gender'] = 'Male';

 console.log(person);// { fName: 'John', age: 25, city: 'Chicago', lName: 'Doe' }

 let personAge = person.age;
 
 console.log(personAge); // 25

 // accessing object properties
 console.log(person.fName);
 console.log(person['city']);

 //updating values for the specified key
 person.fName = 'Jane';
 person['lName'] = 'Smith';

 console.log(person.fName); //Jane
 console.log(person.lName); // Smith


 /*
 Create a car object with below information
    color : 'red',
    year : 2023,
    make : 'BMW',
    model : 'X7'
Then, output all the values to the console.
    red
    2023
    BMW
    X7


 */

    const car ={
        color : 'red',
        year : 2023,
        make : 'BMW',
        model : 'X7'
    }
 
car.color = 'black'
 console.log(car.color); // black
 console.log(car.year); // 2023
 console.log(car.make); // BMW
 console.log(car.model); // X7

