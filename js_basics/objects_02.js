/*
Create a student object with below info
firstName : Alex
lastName : Smith
hobbies : Soccer and Watching movies
exam_scores : midterm = 60 and final = 90 

Output your object to the console
*/

const student = {
    firstName : 'Alex',
    lastName : 'Smith',
    hobbies : ['Soccer',  'Watching movies'],
    examScores :{ 
        midterm : 60,
        final : 90}
};

console.log(student);

console.log(student.hobbies);
console.log(student.examScores);
console.log(student.hobbies[0]);
console.log((student['examScores']['midterm'] + student['examScores']['final'])/ 2 );


const book = {
    name: 'Amok',
    Author: {
        firstName : 'Stefan',
        lastName : 'Zweig'
    },
    genre : 'Novela'
};

const books = [

    {
        name: 'Amok',
        author: {
            firstName : 'Stefan',
            lastName : 'Zweig'
        },
        genre : 'Novela'
    },
    {
        name : 'My name is red',
        author : {
            firstName : 'Orhan',
            lastName : 'Pamuk'
        },
        genre : 'Historical Novel'
    },
    {
        name : '1984',
        author : {
            firstName : 'George',
            lastName : 'Orwell'
        },
    },
];

console.log(books.length);
console.log(books[1]); // { name: 'My name is red', author: { firstName: 'Orhan', lastName: 'Pamuk' }, genre: 'Historical Novel'}
console.log(books[2].author.lastName); // Orwell

// Count the books where Author first name has an 'a' ->

let count = 0 ;

for( let i = 0; i < books.length; i++){
    if(books[i].author.firstName.includes('a')) count++;
};

console.log(count);