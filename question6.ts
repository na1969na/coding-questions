/*
6. Sleep

Implement an asynchronous version of the sleep function that works similarly but does not block the main thread.
*/

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
