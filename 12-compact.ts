// Implement a function compact(array) that creates an array with all falsey values removed. The values false, null, 0, '', undefined, and NaN are falsey (you should know this by heart!).

export default function compact<T>(
  array: Array<T | null | undefined | false | 0 | ''>,
): Array<T> {
  return array.filter(Boolean);
}
