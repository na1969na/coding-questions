/*
4. Mean

Implement a function mean(array) that returns the mean (also known as average) of the values inside array, which is an array of numbers.
*/

export default function mean(array: number[]): number {
  // Answer ↓
  return array.reduce((a, b) => a + b, 0) / array.length;
}

// Test
console.log(mean([1, 2, 3, 4, 5]));
