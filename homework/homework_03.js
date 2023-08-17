// Task 1

let r1 = Math.ceil(Math.random()* 100);
let r2 = Math.ceil(Math.random()* 100);
let r3 = Math.ceil(Math.random()* 100);

console.log((r1 + r2 + r3)/ 3 >= 50);
console.log((r1 + r2 + r3)/ 3 < 50);

//Task 2

let ra1 = Math.ceil(Math.random()* 3);
let ra2 = Math.ceil(Math.random()* 3);
let ra3 = Math.ceil(Math.random()* 3);
console.log(ra1, ra2, ra3);
if ( ra1 === ra2 && ra2 === ra3){
    console.log("TRIPLE MATCH");
}
else if(ra1 === ra2 || ra1 === ra3 || ra2 === ra3){
    console.log("DOUBLE MATCH");
}
else{
    console.log("NO MATCH");
}


// Task 3

function hasA(str){
    return str.includes("A") || str.includes("a");
}
console.log(hasA("TECH"));
console.log(hasA("Global"));
console.log(hasA(""));
console.log(hasA("Apple"));


// Task 4

function doubleOrTripleWorld(arg1){
    if (arg1.length % 2 === 0){
        return arg1 + arg1 + arg1
    }
    else {(arg1.length % 2 !== 0)
        return arg1 + arg1
        }
   }
   console.log (doubleOrTripleWorld("Tech"));
   console.log (doubleOrTripleWorld("Apple"));
   console.log (doubleOrTripleWorld(""));
   console.log (doubleOrTripleWorld(" "));
   console.log (doubleOrTripleWorld("1"));
   console.log (doubleOrTripleWorld("22"));


   // Task 5

   function firstWorld(str33){
    return str33.split(" ")[0];
}
console.log(firstWorld("Hello World"));
console.log(firstWorld("I like JavaScript"));
console.log(firstWorld("Hello"));
console.log(firstWorld(""));
console.log(firstWorld(" "));


// Task 6

function lastWorld(str44){
    return str44.slice(str44.lastIndexOf(" ") + 1);
}
console.log(lastWorld("Hello World"));
console.log(lastWorld("I like JavaScript"));
console.log(lastWorld("Hello"));
console.log(lastWorld(""));
console.log(lastWorld(" "));



// Task 7

function firstLastWorld(str55){
    return str55.slice(0, str55.indexOf(" ")) + str55.slice(str55.lastIndexOf(" ") + 1);
}
console.log(firstLastWorld("Hello World"));
console.log(firstLastWorld("I like JavaScript"));
console.log(firstLastWorld("Hello"));
console.log(firstLastWorld(""));
console.log(firstLastWorld(" "));

// Task 8

function startVowel(str77){
    if (str77.toLowerCase().startsWith("a") ||
    str77.toLowerCase().startsWith("e") ||
    str77.toLowerCase().startsWith("i") ||
    str77.toLowerCase().startsWith("o") ||
    str77.toLowerCase().startsWith("u"))
    return (true);
    else{
      return (false);
    }
}
console.log(startVowel("hallo"));
console.log(startVowel("Apple"));
console.log(startVowel("orange"));
console.log(startVowel(""));
console.log(startVowel(" "));
console.log(startVowel("123"));

// Task 9

function swap4(word){
    let first4 = word.slice(0, 4);
    let midword = word.slice(4, word.length - 4);
    let last4 = word.slice(word.length -4);
    if (word.length >= 8){
        return (last4 + midword + first4);
    }
    else{
        return ("");
    }
}
console.log(swap4("abc"));
console.log(swap4("javaScript"));
console.log(swap4("TechGlobal"));
console.log(swap4(""));
console.log(swap4(" "));
console.log(swap4("Apple"));




// Task 10

function swapFirstLastWorld(sentence){
    let firstWord = sentence.slice(0, sentence.indexOf(" "));
    let midwords = sentence.slice(sentence.indexOf(" "), sentence.lastIndexOf(" ") + 1);
    let lastWord = sentence.slice(sentence.lastIndexOf(" ") + 1, sentence.length);

    if (sentence.trim().includes(" ")) return (lastWord + midwords + firstWord);
    else return (" ")
}

console.log(swapFirstLastWorld("Hello World"));
console.log(swapFirstLastWorld("I like JavaScript"));
console.log(swapFirstLastWorld("foo bar foo bar"));
console.log(swapFirstLastWorld(""));
console.log(swapFirstLastWorld(" "));
console.log(swapFirstLastWorld("Hello"));
console.log(swapFirstLastWorld("Hello "));