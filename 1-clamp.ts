// Implement a function clamp(number, lower, upper) to restrict a number within the inclusive lower and upper bounds.

export default function clamp(
  value: number,
  lower: number,
  upper: number,
): number {
  if(value < lower){
    return lower;
  }

  if(value > upper){
    return upper;
  }

  return value;
}