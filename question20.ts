/*
20. Function.prototype.call

Implement your own Function.prototype.call without calling the native call method. To avoid overwriting the actual Function.prototype.call, implement the function as Function.prototype.myCall.
*/

interface Function {
  myCall(this: Function, thisArg: any, ...argArray: any[]): any;
}

Function.prototype.myCall = function (thisArg, ...argArray) {
  // Answer ↓
  return this.apply(thisArg, argArray);
};

// Test
function multiplyAge(this: { age: number }, multiplier = 1): number {
  return this.age * multiplier;
}

const mary = {
  age: 21,
};

const john = {
  age: 42,
};

console.log(multiplyAge.myCall(mary));
console.log(multiplyAge.myCall(john, 2));

/*
Solution:
Use apply method to call the function with the given thisArg and arguments.
*/


