export default function fromPairs<T>(
  pairs: Array<[string | number, T]>
): Record<string | number, T> {
  return Object.fromEntries(pairs);
}
