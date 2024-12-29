/*
10. Chunk

Implement a function chunk(array, [size=1]) that splits the input array into groups of length size and returns them within a new array.
If array can't be split evenly, the final chunk will be the remaining elements.
The function should not modify the original input array.
*/

export default function chunk<T>(array: Array<T>, size = 1): Array<Array<T>> {
  // Answer ↓
  if (!Array.isArray(array) || size < 1) {
    return [];
  }

  const result = [];

  for (let i = 0; i < array.length; i += size){
    const chunk = array.slice(i, i + size);
    result.push(chunk);
  }

  return result;
}

// Test
console.log(chunk([1, 2, 3, 4, 5], 2));

/*
Solution:
1. Check if the input is an array and the size is a positive number.
2. Create an empty array to store the result.
3. Loop through the input array with a step of size.
4. Slice the input array to get a chunk of size elements.
5. Push the chunk into the result array.
*/


