const bootupMessage: string = "Starting support.ai servers...";

// this code is equivallent to this code below

// const bootupMessage = "Starting support.ai servers...";


// The : string annotation is the variable type. This also works for the other primitive types like number, boolean, null, and undefined:

const port: number = 3000;
const isServerOnline: boolean = true;
const noValue: null = null;
const notDefined: undefined = undefined;


// If a value doesn't match a type, TypeScript will throw an error when it compiles. For example, this is a no-no:


// const bootupMessage: string = 123;
// Error: Type 'number' is not assignable to type 'string'.