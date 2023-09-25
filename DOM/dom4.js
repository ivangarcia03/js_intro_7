/**
 * DOM Events
 */

// addEventListener
// element.addEventListener('event type', callback);

/**
 * 1. Mouse events
 */

// click
const clickBtn = document.getElementById('clickBtn');

// clickBtn.addEventListener('click', (event) => {
//     console.log('You clicked => ', event.target);
// });

// dblclick
const dblclick = document.getElementById('dblclickBtn');

dblclick.addEventListener('dblclick', (event) => {
    console.log('You double clicked => ', event.target);
});

// mousedown
const mousedownBtn = document.getElementById('mousedownBtn');

mousedownBtn.addEventListener('mousedown', (event) => {
    console.log('You pressed down => ', event.target);
})

// mouseup
const mouseupBtn = document.getElementById('mouseUpBtn');

mouseupBtn.addEventListener('mouseup', (event) => {
    console.log('You released button => ', event.target);
});

// mousemove
const mouseMoveBtn = document.getElementById('mouseMoveBtn');

mouseMoveBtn.addEventListener('mousemove', (event) => {
    console.log('You moving inside button => ', event.target);
});


// mouseout
const mouseOutBtn = document.getElementById('mouseOutBtn');

mouseOutBtn.addEventListener('mouseout', (event) => {
    console.log('You going out from button => ', event.target);
});


/**
 * 2. Keyword Events
 */

const body = document.querySelector('body');

// keydown
// body.addEventListener('keydown', (event) => {
//     // if(event.key === 13) {
//         console.log('Keydown event => ', event.target);
//     // }
// });

// // keyup
// body.addEventListener('keyup', (event) => {
//         console.log('Keyup event => ', event.target);
// });

// // keypress
// body.addEventListener('keypress', (event) => {
//     console.log('Keypress event => ', event.target);
// });

/**
 * Form events
 */

// change
const changeInput = document.getElementById('changeInput');

changeInput.addEventListener('change', (event) => {
    // event.target.value => whatever user types on input 
    console.log(event.target.value);
});


// input
const inputInput = document.getElementById('inputInput');

inputInput.addEventListener('input', (event) => {
    console.log(event.target.value);
});

// focus
const formInput = document.getElementById('formInput');

formInput.addEventListener('focus', (event) => {
    let element =  event.target;
    element.style.backgroundColor = 'darkred';
    element.style.color = 'white';
})
// blur
formInput.addEventListener('blur', (event) => {
    let element =  event.target;
    element.style.backgroundColor = '';
    element.style.color = '';
})

// submit
const formEl = document.querySelector('form');

// Uncomment button element for this to work
// formEl.addEventListener('submit', (event) => {
//     event.preventDefault();
//     console.log('Form successfully submitted!');
//     console.log({
//         name: 'Joe',
//         email: 'joe@gmail.com'
//     });
// })


// keypress
formEl.addEventListener('keypress', (event) => {
    event.preventDefault();
    if(event.key === "Enter") {
        console.log('Form successfully submitted!');
        console.log({
            name: 'Joe',
            email: 'joe@gmail.com'
        });
    }
   
})

/**
 * 4. Window event
 */

// scroll
window.addEventListener('scroll', () => {
    console.log('You are scrolling the page!')
    console.log(`And your coordinates are X: ${window.scrollX} and Y: ${window.scrollY} `);
});


/*
   Activity: Todo list

    Step 1: Create an input to take a list

    Step 2: Either keypress or submit 

    Step 3: Show that list in the UI

*/