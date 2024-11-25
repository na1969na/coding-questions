// Implement a custom Array function, Array.prototype.square() which creates a new array with the results of squaring every element within the array the .square() method is called on.

interface Array<T> {
  square(): Array<number>;
}

Array.prototype.square = function () {
  return this.map((el: number) => el * el)
};

