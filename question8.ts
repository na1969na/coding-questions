/*
8. Cancellable Interval

Implement a function setCancellableInterval, that acts like setInterval but instead of returning a timer ID, it returns a function that when called, cancels the interval. The setCancellableInterval function should have the exact same signature as setInterval
*/

export default function setCancellableInterval(
  callback: Function,
  delay?: number,
  ...args: Array<any>
): () => void {
  // Answer ↓
  const timerId = setInterval(callback, delay, ...args);

  return () => {
    clearInterval(timerId);
  };
}

// Test
const cancel = setCancellableInterval(() => {
  console.log("Hello");
}, 1000);

setTimeout(() => {
  cancel();
}, 5000);

/*
Solution:
Return a function that calls clearInterval with the timer ID returned by setInterval.
*/

