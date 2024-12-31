/*
13. Drop Right While

Implement a function dropRightWhile(array, predicate) that creates a slice of array excluding elements dropped from the end.
Elements are dropped until predicate returns falsey. Your function should not modify the original array.
*/

export default function dropRightWhile<T>(
  array: Array<T>,
  predicate: (value: T, index: number, array: Array<T>) => boolean
): Array<T> {
  // Answer ↓
  let i = array.length;

  while (i > 0 && predicate(array[i - 1], i - 1, array)) {
    i--;
  }

  return array.slice(0, i);
}

// Test
console.log(dropRightWhile([1, 2, 3, 4, 5], (value) => value > 3));

/*
Solution:
1. Start from the end of the array.
2. Loop through the array until the predicate returns falsey.
3. Slice the array from the beginning to the current index
*/