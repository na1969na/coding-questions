// Implement a function dropRightWhile(array, predicate) that creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. Your function should not modify the original array.

export default function dropRightWhile<T>(
  array: Array<T>,
  predicate: (value: T, index: number, array: Array<T>) => boolean
): Array<T> {
  let i = array.length;

  while (i > 0 && predicate(array[i - 1], i - 1, array)) {
    i--;
  }

  return array.slice(0, i);
}
