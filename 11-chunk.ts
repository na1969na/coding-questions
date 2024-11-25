// Implement a function chunk(array, [size=1]) that splits the input array into groups of length size and returns them within a new array. If array can't be split evenly, the final chunk will be the remaining elements. The function should not modify the original input array.

export default function chunk<T>(array: Array<T>, size = 1): Array<Array<T>> {
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
