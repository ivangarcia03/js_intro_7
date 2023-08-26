const arr1 = ['foo', 'bar'], arr2 = ['fizz', 'buzz'];

console.log(arr1 + arr2); // not merging
console.log(arr1.concat(arr2));

console.log(typeof (arr1 + arr2));
console.log(typeof arr1.concat(arr2));

console.log(arr1.concat(arr1, arr2, arr1)); 

console.log([].concat([5, 2], [3, 4]).length); // 4

console.log([1, 2] + [3, 4]); // 1,23,4