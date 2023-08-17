// Replacing substrings

let str = "Can I can a can";

console.log(str.replace("can", "AAA")); // Can I AAA a can
console.log(str.replace(str, "***")); // ***
console.log(str.replaceAll("can", "AAA")); // Can I AAA a AAA

// TRICKY PART
console.log(str.replace("cani", "AAA")); // Can I can a can

// replace() vs replaceAll()
console.log(str.replace("a", "#")); // C#n I can a can
console.log(str.replaceAll("a", "#")); // C#n I c#n # c#n