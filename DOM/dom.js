// DOM - Document Object Model

// window object
console.log("window", window); // ReferenceError: window is not defined


// alert
// window.alert('Here is the alert message!');


// prompt
// let promptResult = window.prompt();
// console.log(promptResult); // null || string value


// confirm
// let confirmRrsult = window.confirm('Are you ready?');
// console.log(confirmRrsult); // true || false

// innerWidth and innerHeight
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log("height", innerHeight); // without window

// scrollTo(x,y);
// window.scrollTo(0,0); // scroll page to the top

// location - object
// window.location.reload(); // reloads page

// locaStorage
console.log(window.localStorage.length); // 0 empty

// Set item into localStorage
window.localStorage.setItem('name', 'John');
window.localStorage.setItem('isLoggedIn', false);
window.localStorage.setItem('userId', 1234);
window.localStorage.setItem('userInfo', JSON.stringify({ name: 'John', email: 'john@gmail.com' }));
window.localStorage.setItem('userWalletTypes', JSON.stringify(['apple', 'google', 'cc']));

// Get item from localStorage
console.log(window.localStorage.getItem('name')); // John
console.log(window.localStorage.getItem('isLoggedIn')); // false
console.log(window.localStorage.getItem('userId')); // 1234
console.log(JSON.parse(window.localStorage.getItem('userInfo'))); // { name: 'John', email: 'john@gmail.com'}
console.log(JSON.parse(window.localStorage.getItem('userWalletTypes'))); // ['apple', 'google', 'cc']

// remove item from localStorage
window.localStorage.removeItem('name');
window.localStorage.removeItem('userId');

window.localStorage.clear(); // clear everything from localStorage


/*
    Activity

    1. Ask user a name => prompt()
        1.1. Alert users name => alert()
        1.2. Console log 'You didn't provided your name. Bye Bye!' and quit.

    2. Confirm if user wants to continue => confirm()
        3.1 If user says 'YES' => Alert 'You have chosen to continue'
        3.2 If user says 'NO' => Alert 'You canceled the action'

    3. Console log users browser innerWidth and innerHeight

    4. Reload the page after 10 seconds to start again. => setTimeout, location.reload()

    Bonus:

    5. Ask if user wants to go to different page?
        5.1. 'YES' => redirect to that page
        5.2. "NO" => reload the page 
*/

// Solution

// Ask user a name
const userName = window.prompt('What is your name?');
// console.log(userName);

if (userName && userName.length > 0) {
    window.alert(`Hi ${userName}. Welcome to our webpage!`);

    // Confirm if user wants to continue
    const doesUserWantsToContinue = window.confirm('Do you want continue browsing our webpage?');
    if (doesUserWantsToContinue) {
        window.alert('You have chosen to continue');
    } else {
        window.alert('You canceled the action')
    }

    // Log user device dimensions
    const userInnerHeight = window.innerHeight;
    const userInnerWidth = window.innerWidth;
    console.log(`You device dimension are height: ${userInnerHeight} and width: ${userInnerWidth}`);

    // Warn user that page is going to reload
    // console.log('Webpage will be reloaded or redirected in 10 seconds');

    // Ask if user wants to go to different page
    const doesUserWantsToRedirect = window.confirm('Do you want go to google.com?');
    if (doesUserWantsToRedirect) {
        console.log('Webpage will be redirected in 10 seconds');
        setTimeout(() => {
            window.open('https://google.com');
        }, 10000)
    } else {
        // Reload the page and start again
        console.log('Webpage will be reloaded in 10 seconds');
        setTimeout(() => {
            window.location.reload();
        }, 10000);
    }
} else {
    console.log('You didn\'t provided your name. Bye Bye!')
}