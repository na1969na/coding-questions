/*
17. Find Last Index

Implement a function findLastIndex(array, predicate, [fromIndex=array.length-1]) that takes an array of values, a function predicate, and an optional fromIndex number argument, and returns the index of the last element in the array that satisfies the provided testing function predicate. The elements of the array are iterated from right to left.
*/

export default function findLastIndex<T>(
  array: Array<T>,
  predicate: (value: T, index: number, array: Array<T>) => boolean,
  fromIndex = array.length - 1
): number {
  // Answer ↓
  let startIndex =
    fromIndex < 0
      ? Math.max(array.length + fromIndex, 0)
      : Math.min(fromIndex, array.length - 1);

  let index = startIndex;
  
  while (index >= 0) {
    if (predicate(array[index], index, array)) {
      return index;
    }
    index--;
  }
  return -1;
}

// Test
console.log(findLastIndex([1, 2, 3, 4, 5], (value) => value % 2 === 0));

/*
Solution:
1. Handle the fromIndex argument.
2. Loop through the array from the starting index to 0.
3. Check if the predicate returns true for the current element.
4. Return the index of the last element that satisfies the predicate.
*/
