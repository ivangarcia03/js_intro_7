
function categorizeCharacters(str){
    let letters = [];
    let numbers = [];
    let symbols = [];
    for(let i = 0; i < str.length; i++){
      if(str[i].match(/[a-z]/)) letters.push(str[i]);
      else if(str[i].match(/[0-9]/)) numbers.push(str[i])
      else symbols.push(str[i]);
    }
    let results = [letters.join(""), numbers.join(""), symbols.join("")];
    return results
  }
  console.log(categorizeCharacters("1234"));
  console.log(categorizeCharacters("abc123$#%"));
  console.log(categorizeCharacters("12ab$%3c%"));
