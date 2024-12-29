/*
12. Difference

Implement a function difference(array, values) that creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons.
The order and references of result values are determined by the first array.
*/

export default function difference<T>(
  array: Array<T>,
  values: Array<T>
): Array<T> {
  // Answer ↓ 
  return array.filter((value) => !values.includes(value));
}

// Test
console.log(difference([2, 1], [2, 3]));

/*
Solution:
1. Use the filter method to remove all values that are included in the values array.
2. The includes method is used to check if a value is included in the values array.
*/

