/*
  2. Function Length

  Implement a function functionLength, to return the number of parameters a function expects. 
  Note that this is a static value defined by the function, not the number of arguments the function is called with (which is determined by arguments.length)
*/

export default function functionLength(fn: Function): number {
  // Answer ↓
  return fn.length;
}

// Test
console.log(functionLength(function (a: any, b: any, c: any) {}));
console.log(functionLength(function (a = 1, b = 2, c = 3) {}));

/*
Solution:
Return the length property of the function.
*/