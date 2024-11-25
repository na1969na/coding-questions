// Implement a function difference(array, values) that creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

export default function difference<T>(
  array: Array<T>,
  values: Array<T>
): Array<T> {
  return array.filter((value) => !values.includes(value));
}
