/*
Requirement:
Assume you are given a number between 1 and 100 (both 1 and 100 are included)
Find which quarter and half is number in
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
1st half is 1-50
2nd half is 51-100

Test data 1:
34

Expected result 1:
34 is in the 1st half
34 is in the 2nd quarter


Test data 2:
76

Expected result 2:
76 is in the 2nd half
76 is in the 4th quarter
*/

let num1 = 59; // 1, 100

// WAY-1
if (num1 <= 25) {
    console.log(`${num1} is in the 1st half\n${num1} is in the 1st quarter`);
}
else if (num1 <= 50) {
    console.log(`${num1} is in the 1st half\n${num1} is in the 2nd quarter`);
}
else if (num1 <= 75) {
    console.log(`${num1} is in the 2nd half\n${num1} is in the 3rd quarter`);
}
else {
    console.log(`${num1} is in the 2nd half\n${num1} is in the 4th quarter`);
}

// WAY-2
if (num1 <= 50) {
    console.log(`${num1} is in the 1st half`);
}
else {
    console.log(`${num1} is in the 2nd half`);
}

if (num1 <= 25) {
    console.log(`${num1} is in the 1st quarter`);
}
else if (num1 <= 50) {
    console.log(`${num1} is in the 2nd quarter`);
}
else if (num1 <= 75) {
    console.log(`${num1} is in the 3rd quarter`);
}
else {
    console.log(`${num1} is in the 4th quarter`);
}


// WAY-3
if (num1 <= 50) {
    console.log(`${num1} is in the 1st half`);
    if (num1 <= 25) {
        console.log(`${num1} is in the 1st quarter`);
    }
    else {
        console.log(`${num1} is in the 2nd quarter`);
    }
}
else {
    console.log(`${num1} is in the 2nd half`);
    if (num1 <= 75) {
        console.log(`${num1} is in the 3rd quarter`);
    }
    else {
        console.log(`${num1} is in the 4th quarter`);
    }
}

// SHORT for WAY-3
if (num1 <= 50) {
    console.log(`${num1} is in the 1st half`);
    if (num1 <= 25) console.log(`${num1} is in the 1st quarter`);
    else console.log(`${num1} is in the 2nd quarter`);
}
else {
    console.log(`${num1} is in the 2nd half`);
    if (num1 <= 75) console.log(`${num1} is in the 3rd quarter`);
    else console.log(`${num1} is in the 4th quarter`);
}

// TERNARY for WAY-3
if (num1 <= 50) {
    console.log(`${num1} is in the 1st half`);
    console.log(num1 <= 25 ? `${num1} is in the 1st quarter` : `${num1} is in the 2nd quarter`);
}
else {
    console.log(`${num1} is in the 2nd half`);
    console.log(num1 <= 75 ? `${num1} is in the 3rd quarter` : `${num1} is in the 4th quarter`)
}


/*
Requirement:
Assume you are given 2 numbers to be 0 or 1.

Print true if they are same number.
Otherwise, print false

Test data 1:
0, 1

Expected result 1:
false


Test data 2:
0, 0

Expected result 2:
true


Test data 3:
1, 0

Expected result 3:
false


Test data 4:
1, 1

Expected result 4:
true
*/

let num21, num22;

// MOST PROFESSIONAL WAY
console.log(num21 === num22);

// COOL GUY WAY
console.log(num21 === num22 ? true : false);

// SAFE GUY WAY
if (num21 === num22) console.log(true);
else console.log(false)

// I AM A HUMAN WAY
if ((num21 === 0 && num22 === 0) || (num21 === 1 && num22 === 1)) console.log(true);
else console.log(false);



/*
Requirement:
Assume you are given 3 numbers between 1 and 100 (both 1 and 100 are included).

Print true if they are all even numbers.
Otherwise, print false

Test data 1:
2, 4, 6

Expected result 1:
true


Test data 2:
68, 44, 2

Expected result 2:
true


Test data 3:
10, 20, 25

Expected result 3:
false


Test data 4:
51, 67, 99

Expected result 4:
false

*/
let num31 = 2, num32 = 3, num33 = 6;

console.log(num31 % 2 === 0 && num32 % 2 === 0 && num33 % 2 === 0); // PROF WAY
console.log(num31 % 2 === 0 && num32 % 2 === 0 && num33 % 2 === 0 ? true : false);

if (num31 % 2 === 0 && num32 % 2 === 0 && num33 % 2 === 0) console.log(true);
else console.log(false);


/*
Requirement:
Assume you are given a single character.
Find if the given character is a letter or digit.

Test data 1:
"v"

Expected result 1:
"v"  is a letter

Test data 2:
"5"

Expected result 2:
"5"  is a digit
*/

let var4 = "5";

console.log(var4.charCodeAt(0));

if (48 <= var4.charCodeAt(0) && var4.charCodeAt(0) <= 57) console.log(`"${var4}" is a digit`);
else console.log(`"${var4}" is a letter`);

if ("0123456789".includes(var4)) console.log(`"${var4}" is a digit`);
else console.log(`"${var4}" is a letter`);


/*
Requirement:
Assume you are given a single character.
Find if the given character is a lowercase or an uppercase letter.
NOTE: if the character is not a letter, print "INVALID INPUT"

Test data 1:
"a"

Expected result 1:
"a"  is a lowercase letter


Test data 2:
"5"

Expected result 2:
"INVALID INPUT"


Test data 2:
"N"

Expected result 1:
"N"  is an uppercase letter


Test data 4:
" "

Expected result 4:
"INVALID INPUT"
*/

let var5 = "Y";

if (var5.charCodeAt(0) >= 65 && var5.charCodeAt(0) <= 90) console.log(`"${var5}" is an uppercase letter`);
else if (var5.charCodeAt(0) >= 97 && var5.charCodeAt(0) <= 122) console.log(`"${var5}" is an lowercase letter`);
else console.log("INVALID INPUT");

/*
Requirement:
Assume you are given a single character.
Find if the given character is a special character or not.

Test data 1:
"a"

Expected result 1:
"a"  is not a special character


Test data 2:
"5"

Expected result 2:
"5" is not a special character


Test data 3:
"$"

Expected result 3:
"$"  is a special character


Test data 4:
" "

Expected result 4:
" " is not a special character
*/
let var6 = "7";

let firstChar6 = var6.charCodeAt(0);

if (firstChar6 !== 32 && !(firstChar6 >= 48 && firstChar6 <= 57)
    && !(firstChar6 >= 65 && firstChar6 <= 90) && !(firstChar6 >= 97 && firstChar6 <= 122)) {
    console.log(`"${var6}" is a special character`);
}
else {
    console.log(`"${var6}" is not a special character`);
}


/*
Requirement:
Assume you are given a single character.
Find if the given character is a vowel or not.

NOTE: if the character is not a letter, print "INVALID INPUT"
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

Test data 1:
"a"

Expected result 1:
"a"  is a vowel

Test data 2:
"5"

Expected result 2:
"INVALID INPUT"


Test data 2:
"N"

Expected result 1:
"N"  is not a vowel

Test data 4:
" "

Expected result 4:
"INVALID INPUT"
*/

let var7 = "A";
let firstChar7 = var7.charCodeAt(0);

if ((firstChar7 >= 65 && firstChar7 <= 90) || ((firstChar7 >= 97 && firstChar7 <= 122))) {
    // letter -> aeouiAEOUI
    if ("aeouiAEOUI".includes(var7)) console.log(`"${var7}" is a vowel`);
    else console.log(`"${var7}" is not a vowel`);
}
else {
    console.log("INVALID INPUT");
}

// WAY - 2
if ("aeouiAEOUI".includes(var7)) console.log(`"${var7}" is a vowel`);
else if ((firstChar7 >= 65 && firstChar7 <= 90) || ((firstChar7 >= 97 && firstChar7 <= 122))) console.log(`"${var7}" is not a vowel`);
else console.log("INVALID INPUT");


/*
Requirement:
Assume you are given a single character.
Find if the given character is a letter, digit, whitespace or special.

Test data 1:
"a"

Expected result 1:
"a"  is a letter


Test data 2:
"5"

Expected result 2:
"5"  is a digit


Test data 3:
"$"

Expected result 3:
"$"  is a special character


Test data 4:
" "

Expected result 4:
" " is a whitespace
*/

let var8 = " ";
let var81 = var8.charCodeAt(0);

if((var81 >= 65 && var81 <= 90) || (var81 >= 97 && var81 <= 122)) console.log(`"${var8}" is a letter`);
else if(var81 >= 48 && var81 <= 57) console.log(`"${var8}" is a digit`);
else if(var81 === 32) console.log(`"${var8}" is a whitespace`);
else console.log(`"${var8}" is a special character`);