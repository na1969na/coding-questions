/*
1. Clamp

Implement a function clamp(number, lower, upper) to restrict a number within the inclusive lower and upper bounds.
*/

export default function clamp(
  value: number,
  lower: number,
  upper: number,
): number {
  // Answer ↓
  if(value < lower){
    return lower;
  }

  if(value > upper){
    return upper;
  }

  return value;
}

// Test
console.log(clamp(-10, -5, 5));

/*
Solution:
Check if the value is less than the lower bound, return the lower bound.
Check if the value is greater than the upper bound, return the upper bound.
Otherwise, return the value.
*/
