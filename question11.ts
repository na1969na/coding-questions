/*
11. Compact

Implement a function compact(array) that creates an array with all falsey values removed. The values false, null, 0, '', undefined, and NaN are falsey (you should know this by heart!).
*/

export default function compact<T>(array: Array<T | null | undefined | false | 0 | '' | typeof NaN>): Array<T> {
  // Answer ↓
  return array.filter((value): value is T => Boolean(value));
}

// Test
console.log(compact([0, 1, false, 2, '', 3, null, undefined, NaN, 4]));

/*
Solution:
1. Use the filter method to remove all falsey values from the array.
2. The Boolean function is used as the filter callback to remove all falsey values.
*/
