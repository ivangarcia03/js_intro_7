/*
Requirement:
Write a function named countVC() which takes a string argument and returns an object with the count of vowels and consonants.
Examples:
countVC("Hello")​             		-> {vowels: 2, consonants: 3}
countVC("Programming")​ 	-> {vowels: 3, consonants: 8}
countVC("123AbC")​             	-> {vowels: 1, consonants: 2}
countVC("123!@#xyz")​           	-> {vowels: 0, consonants: 3}
countVC("")​                         	-> {vowels: 0, consonants: 0}


*/


// Task-01
function countVC(str){
    let countVowel = 0;
    let countConsonants = 0
    for(let i = 0; i < str.length; i++){
        if(str[i].toLowerCase().includes("a") ||
        str[i].toLowerCase().includes("e") ||
        str[i].toLowerCase().includes("i") ||
        str[i].toLowerCase().includes("o") ||
        str[i].toLowerCase().includes("u") ) countVowel++
    }
     for(let i = 0; i < str.length; i++){
        let letter = str[i].toLowerCase();
        if(letter.match(/[bcdfghjklmnpqrstvwxyz]/)) countConsonants++
    }
    return { vowel: countVowel,
           consonants: countConsonants
    }
}
console.log(countVC("Hello"));     // { vowels: 2, consonants: 3 }
console.log(countVC("Programming"));// { vowels: 3, consonants: 8 }
console.log(countVC("123AbC")); // { vowels: 1, consonants: 2 }
console.log(countVC("123!@#xyz"));// { vowels: 0, consonants: 3 }
console.log(countVC("")); // { vowels: 0, consonants: 0 }


console.log("\n-----------------------------\n");


/*
Requirement:
Write a function named countChars() which takes a string argument and returns an object with the count of letters, numbers, and specials.
NOTE: If the count of a category is 0 then it should not be in the object. Also spaces do not count towards any category
Examples:
countChars("Hello")​                         	-> {letters: 5}
countChars("Programming 123")​ 	-> {letters: 11, numbers: 3}
countChars("123AbC!@#")​             	-> {letters: 3, numbers: 3, specials: 3}
countChars("0987654321")​             	-> {numbers: 10}
countChars("     ")​                                	-> {}
countChars("")​                                     	-> {}



*/

// Task- 02

const countChars = (str) => {
    let str2 = str.trim().replace(/\s/g, "")
    let obj = { 
        letters: 0,
        
        numbers: 0,
        specials: 0
    }
    for(let i = 0; i < str2.length; i++){
        let letter = str2[i].toLowerCase();
       if(letter.match(/[a-z]/)) obj.letters++
       else if(letter.match(/[0-9]/)) obj.numbers++
       else obj.specials++
  
    }
    Object.keys(obj).forEach(key => {
        if(obj[key] === 0) delete obj[key]
    })
    return obj
}

  console.log(countChars("Hello")); // -> {letters: 5}
  console.log(countChars("Programming 123")); //​-> {letters: 11, numbers: 3}
  console.log(countChars("123AbC!@#")); //-> {letters: 3, numbers: 3, specials: 3}
  console.log(countChars("0987654321")); //	-> {numbers: 10}
  console.log(countChars("     ")); // 	-> {}
  console.log(countChars("")); //  	-> {}


console.log("\n-----------------------------\n");
/*
Requirement:
Write a function named maxOccurrences() which takes a string argument and returns the character that appears the most number of times in the string.
NOTE: If there is a tie, return the first one that appears in the string. This task is case sensitive. Ignore spaces. If the string is empty or consist of spaces only, then return an empty string.
Examples:
maxOccurrences("Hello")​           	-> "l"
maxOccurrences("Occurrences") 	-> "c"
maxOccurrences("    ab    ")​    	-> "al"
maxOccurrences("12   3   21")   	-> "1"
maxOccurrences("      ")   ​ 	-> ""
maxOccurrences("")   		-> ""

*/

//Task-03
const maxOccurrences = (str2) =>{
  let str = str2.trim().replace(/\s/g, "")
        let charMap = {};
        let max = 0;
        let maxChar = '';
        for(let char of str){
            if(charMap[char]){
                charMap[char]++;
            }else{
                charMap[char] = 1;
            }
        }
        for(let char in charMap){
            if(charMap[char] > max){
                max = charMap[char];
                maxChar = char;
            }
        }
        return maxChar;
}
console.log(maxOccurrences("Hello")); // 	-> "l"
console.log(maxOccurrences("Occurrences")); // 	-> "c"
console.log(maxOccurrences("    ab    ")); // 	-> "al"
console.log(maxOccurrences("12   3   21")); //	-> "1"
console.log(maxOccurrences("      ")); // 	-> ""
console.log(maxOccurrences("")); //  -> ""


console.log("\n-----------------------------\n");

/*
Requirement:
Write a function named starOut() which takes a string argument and returns it back with every star removed as well as the right and left of the star.
NOTE: If there are 2 stars next to each other than remove the next non star
So "ab*cd" yields "ad" and "ab**cd" also yields "ad".
Examples:
starOut("ab*cd") 	-> "ad"
starOut("ab**cd") 	-> "ad"
starOut("xm*sm*sy") 	-> "xy"
starOut("abc")   ​	-> "abc"
starOut("***")   	-> ""
starOut("   ")   ​ 	-> "   "
starOut("")   	-> ""

*/

// Task-4

const starOut = (string)=> {
    for (const char of string.split(' ')) {
        if (char.includes('*')) 
            return char.replaceAll('*', '').slice(0, 1) + char.replaceAll('*', '').slice(-1)
    }
    return string
}

console.log(starOut("ab*cd")); //	-> "ad"
console.log(starOut("ab**cd")); // 	-> "ad"
console.log(starOut("xm*sm*sy")); // 	-> "xy"
console.log(starOut("abc")); //​	-> "abc"
console.log(starOut("***")); //	-> ""
console.log(starOut("   ")); //	-> "   "
console.log(starOut("")); //	-> ""


console.log("\n-----------------------------\n");

/*
Requirement:
Write a function named romanToInt() which takes a string roman numeral as its arguments and return the roman numeral converted to the number. A roman numeral is a set of symbols that add up to a number. CXII -> 100+10+1+1 -> 112
NOTE: 
Symbol       Value
I                  1
V                 5
X                10
L                 50
C                100
D                500
M               1000
Examples:
romanToInt("I") 		-> 1
romanToInt("IV") 		-> 4
romanToInt("CXII") 		-> 112
romanToInt("MMM") 		-> 3000
romanToInt("MMMDCCCLXXXVIII")  	-> 3888
romanToInt("MDCLXVI")  	​-> 1666

*/
// Task-05 missing