/**
 * ACCESSING A DOM ELEMENTS
 */

/**
 * getElementById() - method
 */

const pageHeading = document.getElementById('page-heading');
console.log(pageHeading); // node, element
console.log(typeof pageHeading); // object

const subheading  = document.getElementById('subheading');
console.log(subheading);

/*  
    getElementsByClassName() - method
*/

const container = document.getElementsByClassName('container');
console.log(container); // HTMLCollection (think of it as an Array)

for(let i=0; i < container.length; i++) {
    // console.log(`Node ${i}: ${container[i]}`)
    console.log(container[i])
}
console.log('-------');

// Manually
const firstContainer = container[0];
const secondContainer = container[1];
const thirdContainer = container[2];

console.log(firstContainer);
console.log(secondContainer);
console.log(thirdContainer);


/**
 * getElementsByTagName - method
 */

const images = document.getElementsByTagName('img');
console.log(images); // HTMLCollection

for(let i=0; i < images.length; i++) {
    console.log(images[i])
}


/**
 * querySelector() - universal method
 */

const par1 = document.querySelector('#par1'); // by using id
const par2 = document.querySelector('.par2'); // by using class
const qSection = document.querySelector('section'); // by using tagname

console.log(par1);
console.log(par2);
console.log(qSection);


/**
 * querySelectorAll() - method
 */

const allImages = document.querySelectorAll('img');
console.log(allImages); // NodeList similar to Array or HMTLCollection

for(let i=0; i < allImages.length; i++) {
    console.log(allImages[i])
}