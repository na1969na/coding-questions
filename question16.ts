/*
16. Find Index

Implement a function findIndex(array, predicate, [fromIndex=0]) that takes an array of values, a function predicate, and an optional fromIndex number argument, and returns the index of the first element in the array that satisfies the provided testing function predicate.
*/

export default function findIndex<T>(
  array: Array<T>,
  predicate: (value: T, index: number, array: Array<T>) => boolean,
  fromIndex = 0,
): number {
  // Answer ↓
   const length = array.length;
   const startIndex = fromIndex >= 0 ? fromIndex : Math.max(length + fromIndex, 0);

   for (let index = startIndex; index < length; index++){
    if (predicate(array[index], index, array)){
      return index;
    }
   }

   return -1;
}

// Test
console.log(findIndex([1, 2, 3, 4, 5], (value) => value === 3));

/*
Solution:
1. Handle the fromIndex argument.
2. Loop through the array from the starting index.
3. Check if the predicate returns true for the current element.
4. Return the index of the first element that satisfies the predicate.
*/
