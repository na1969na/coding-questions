// Implement a function findIndex(array, predicate, [fromIndex=0]) that takes an array of values, a function predicate, and an optional fromIndex number argument, and returns the index of the first element in the array that satisfies the provided testing function predicate.

export default function findIndex<T>(
  array: Array<T>,
  predicate: (value: T, index: number, array: Array<T>) => boolean,
  fromIndex = 0,
): number {
   const length = array.length;
   const startIndex = fromIndex >= 0 ? fromIndex : Math.max(length + fromIndex, 0);

   for (let index = startIndex; index < length; index++){
    if (predicate(array[index], index, array)){
      return index;
    }
   }

   return -1;
}