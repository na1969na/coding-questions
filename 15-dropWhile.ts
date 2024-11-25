// Implement a function dropWhile(array, predicate) that creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. Your function should not modify the original array.

export default function dropWhile<T>(
  array: Array<T>,
  predicate: (value: T, index: number, array: Array<T>) => boolean
): Array<T> {
  let i = 0;

  while (i < array.length && predicate(array[i], i, array)) {
    i++;
  }

  return array.slice(i);
}
