// Implement a function setCancellableTimeout, that acts like setTimeout but instead of returning a timer ID, it returns a function that when called, cancels the pending callback function. The setCancellableTimeout function should have the exact same signature as setTimeout:

export default function setCancellableTimeout(
  callback: Function,
  delay?: number,
  ...args: Array<any>
): () => void {
  const timerId = setInterval(callback, delay, ...args);

  return () => {
    clearInterval(timerId);
  };
}

