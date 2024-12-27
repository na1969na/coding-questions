/*
7. Array.prototype.square

Implement a custom Array function, Array.prototype.square() which creates a new array with the results of squaring every element within the array the .square() method is called on.
*/

interface Array<T> {
  square(): Array<number>;
}

Array.prototype.square = function () {
  // Answer ↓
  return this.map((el: number) => el * el)
};

// Test
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.square());

/*
Solution:
Use the map method to iterate over the array and return a new array with the square of each element.
*/

