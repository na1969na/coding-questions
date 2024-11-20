// Implement a function numberOfArguments, to return the number of arguments it was called with. Note that this value is the actual number of arguments, which can be more or less than the defined parameter count (which is determined by Function.prototype.length).

export default function numberOfArguments(...args: Array<any>): number {
  return arguments.length;
}

