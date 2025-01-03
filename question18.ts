/*
18. From Pairs

Implement a function fromPairs(pairs) that transforms a list of key-value pairs into an object.
*/

export default function fromPairs<T>(
  pairs: Array<[string | number, T]>
): Record<string | number, T> {
  // Answer ↓
  return Object.fromEntries(pairs);
}

// Test
console.log(fromPairs([['a', 1], ['b', 2]]));

/*
Solution:
Use Object.fromEntries to transform the array of key-value pairs into an object.
*/

