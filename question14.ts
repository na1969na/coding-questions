/*
14. Drop While

Implement a function dropWhile(array, predicate) that creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. Your function should not modify the original array.
*/

export default function dropWhile<T>(
  array: Array<T>,
  predicate: (value: T, index: number, array: Array<T>) => boolean
): Array<T> {
  // Answer ↓
  let i = 0;

  while (i < array.length && predicate(array[i], i, array)) {
    i++;
  }

  return array.slice(i);
}

// Test
console.log(dropWhile([1, 2, 3, 4, 5], (value) => value < 3));

/*
Solution:
1. Start from the beginning of the array.
2. Loop through the array until the predicate returns falsey.
3. Slice the array from the current index to the end.
*/
