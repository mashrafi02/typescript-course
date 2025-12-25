// If your words-per-minute are as pitiful as mine, you'll agree when I say "typing sucks".

// And objectively, this:

// const bootupLog: string = "Starting support.ai servers...";

// is more typing than this:

const bootupLog = "Starting support.ai servers...";


// The good news is that TypeScript is incredible at type inference. Instead of explicitly declaring the type of a variable, TypeScript will infer it based on the value. So in reality, you should never write:

// const bootupLog: string = "Starting support.ai servers...";


// just write this

// const bootupLog = "Starting support.ai servers...";