/*
15. Fill

Implement a function fill(array, value, [start=0], [end=array.length]) that fills an array with values from start up to, but not including, end.
*/

export default function fill<T>(
  array: Array<T>,
  value: any,
  start: number = 0,
  end: number = array.length
): Array<T> {
  // Answer ↓
  const length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }

  if (end > length) {
    end = length + 1;
  }

  if (end < 0) {
    end += length;
  }

  for (let i = start; i < Math.min(end, length); i++) {
    array[i] = value;
  }

  return array;
}

// Test
console.log(fill([1, 2, 3, 4, 5], 'a', 1, 4));

/*
Solution:
1. Handle negative start and end values.
2. Loop through the array from start to end.
3. Fill the array with the specified value.
*/

