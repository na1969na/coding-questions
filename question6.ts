/*
6. Sleep


*/

// In JavaScript, the setTimeout function can be used to execute callbacks after a delay. However, it introduces a layer of nesting in the code which may not be desired.

// In languages like Java and Python, a sleep function is available to suspend execution of the calling thread. However, unlike other languages, JavaScript is single-threaded and blocking the main thread is not a good idea. Hence lets implement an asynchronous version of the sleep function that works similarly but does not block the main thread.

export default async function sleep(duration: number): Promise<void> {
  // Answer ↓
  return new Promise((resolve) => setTimeout(resolve, duration));
}

// Test
console.log('Start');
sleep(2000).then(() => console.log('End'));
console.log('Middle');

/*
Solution:
Return a new Promise that resolves after the specified duration using setTimeout.
*/
