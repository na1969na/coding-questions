/*
19. Function.prototype.apply

Implement your own Function.prototype.apply without calling the native apply method.
To avoid overwriting the actual Function.prototype.apply, implement the function as Function.prototype.myApply.
*/

interface Function {
  myApply(this: any, thisArg: any, argArray?: any[]): any;
}

Function.prototype.myApply = function (thisArg, args = []) {
  // Answer ↓
  return this.call(thisArg, ...args);
};

// Test
interface Person {
  name: string;
}

function greet(this: Person, greeting: string, punctuation: string) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const person = { name: 'Alice' };
const result = greet.myApply(person, ['Hello', '!']);
console.log(result);

/*
Solution:
using call method to call the function with the given thisArg and arguments.
*/


