// Import all elements
const parentElement = document.getElementById('parent');
console.log(parentElement);

/**
 * Get all the childNodes or children of parentElement 
 */
const childLIs = parentElement.childNodes;
console.log(childLIs); // nodes + text

const children = parentElement.children;
console.log(children); // elements

/*
    If you have get nodes and extra information like text use childNodes,
    else use children. 
*/


/**
 * Get parent element
 */
const countiesHeading = document.getElementById('countries');
const parentOfHeading = countiesHeading.parentElement;
console.log(parentOfHeading);


/**
 * Get first and last child node
 */
const firstLi = parentElement.firstChild;
const lastLi = parentElement.lastChild;
console.log(firstLi); // gives text
console.log(lastLi); // gives text


/**
 * Get first and last child element
 */
const firstLiElement = parentElement.firstElementChild;
const lastLiElement = parentElement.lastElementChild;
console.log(firstLiElement); // gives USA
console.log(lastLiElement); // gives Germany

/**
 * Get Sibling elements
 */

const leftSibling = firstLiElement.previousElementSibling;
console.log(leftSibling); // null
const rightSibling = firstLiElement.nextElementSibling;
console.log(rightSibling); // Nigeria

const leftSiblingOfUl = parentElement.previousElementSibling;
console.log(leftSiblingOfUl); // countries

const leftSiblingOfLast = lastLiElement.previousElementSibling;
console.log(leftSiblingOfLast); // Japan
const rightSiblingOfLast = lastLiElement.nextElementSibling;
console.log(rightSiblingOfLast); // null


/**
 * Node attributes
 *  - getAttribute()
 *  - setAttribute();
 */

const container = document.querySelector('.container');
const images = document.querySelectorAll('img');
// const images = container.children; => same as above

console.log(container);

const firstImage = images[0];
// get src of image element
console.log(firstImage.src); // url
console.log(firstImage.alt); // alt text

const newUrl = 'https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fHww&w=1000&q=80';
// update src of first image
firstImage.src = newUrl;
console.log(firstImage);

// getAttribute
const imgUrl = firstImage.getAttribute('src');
console.log(imgUrl === newUrl); // true

// setAttribute
firstImage.setAttribute('alt', 'Beautiful nature');
const altText = firstImage.getAttribute('alt'); // 'Beautiful nature'
console.log(altText === 'Beautiful nature'); // true

/**
 * STYLING
 */

const bodyEl = document.querySelector('body');
console.log(bodyEl);

// change bg color of body element
bodyEl.style.backgroundColor = 'lightgray';
// align elements inside body to center
bodyEl.style.textAlign = 'center';

for(let i=0; i < images.length; i++) {
    let imageEl = images[i];

    // style image element
    imageEl.style.width = '250px';
    imageEl.style.height = '150px';
    imageEl.style.border = '4px solid green';

    if(i > 1) {
        imageEl.style.border = '4px solid blue';
    }
}

// style parent element
parentElement.style.backgroundColor = 'yellow';
parentElement.style.width = '150px';
parentElement.style.listStyle = 'none';
parentElement.style.paddingLeft = '0';


/**
 * className vs classList
 */
const boxEl = document.querySelector('.box');

console.log(boxEl.className); // ?
console.log(boxEl.classList); // ?


// boxEl.className = 'box2'; // this will wipe out everything and just insert box2
boxEl.className += ' box2'; // use this if you need to append extra class name

boxEl.classList.add('box3'); // this will add box3 to existing class names
boxEl.classList.remove('box'); // this will remove box from existing class names

/**
 * innerHTML
 */

// bodyEl.innerHTML = '';

// Add html into dom
// parentElement.innerHTML = `
//         <li>USA</li>
//         <li>Nigeria</li>
//         <li>Japan</li>
//         <li>Germany</li>
//         <li>France</li>
// `;

// or append
parentElement.innerHTML += `<li>France</li>`;

/**
 * Create an element
 * And append it to DOM
 */

const p2 = document.createElement('p');
console.log(p2); // <p></p>

// add a content to p2 element
// 1st way
p2.innerHTML = 'Box 2'; 
console.log(p2); // <p>Box 2</p>

// 2nd way
// const textNode = document.createTextNode('Box 3'); // #text
// p2.appendChild(textNode); // <p>Box 3</p>
console.log(p2);

// Append p2 to box element
boxEl.append(p2);

// append -> takes node or text(string)
// appendChild -> only takes text(string)

parentElement.append(p2); // add p2 inside ul element

/*
    Activity

    Objective: Practice DOM 
    
    Instructions: Create a simple TODO List


    1. Ask user a list

    2. Create an element based on users input

    3. Show that in the DOM(UI)

    Bonus: Ask 3 lists from user

*/