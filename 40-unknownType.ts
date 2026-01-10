// We've talked about the any type in TypeScript, and how it can represent anything - it's the "widest" type.

// The unknown type can be used for similar purposes, but its a much safer alternative because it forces you to explicitly assert the type before using it in a specific way.

// The “any” Problem
// The any type basically turns off TypeScript's type checking:

function processData(data: any) {
  // TypeScript allows this even though it might crash
  console.log(data.toLowerCase());

  // TypeScript allows this too - it's like we're using plain JavaScript
  return data.nonExistentMethod();
}

// No errors when calling the function
processData(42); // Will crash at runtime

// As we talked about earlier, when you take plain JavaScript code and run it through TypeScript tooling, almost everything is any by default.

// The “unknown” Solution
// The unknown type doesn't allow that kind of tomfoolery:

function processData2(data: unknown) {
  // Error: Object is of type 'unknown'
  console.log(data.toLowerCase());

  // Error: Object is of type 'unknown'
  return data.nonExistentMethod();
}

// With unknown, you can still assign any value to it (e.g. call this function with any value), but you can't use that value in a meaningful way without first checking its type:

function processData3(data: unknown) {
  // We do a type assertion
  if (typeof data === "string") {
    // Now TypeScript knows data is a string
    console.log(data.toLowerCase());
    return data;
  }
  if (typeof data === "number") {
    // Now TypeScript knows data is a number
    return data * 2;
  }

  // Throw an error for other types
  // that we can't handle
  throw new Error("Expected string data");
}

// When to Use unknown
// Unknown is a fantastic alternative to any when it comes to dealing with values that are coming into your program from the outside world (e.g. user input, API responses, etc.). It forces you to add type checks at that I/O boundary so that you can then be confident working with the data inside your program.






// Type Hierarchy --- see the type-hiarchy.png in the root folder


// The types at the top of hierarchy are the "widest". They encompass the most possible values, and very little is known about them.
// The types at the bottom of the hierarchy are the "narrowest". They encompass the fewest possible values, and a lot is known about them.
// any and unknown are at the top of the hierarchy, the weird one is actually the any type, because it just breaks all the rules, allowing you to do whatever you want with it.
// never is at the bottom of the hierarchy, because it represents values that can't occur.
// Types below are assignable to the connected types above them, but not the other way around. For example:
// "armin" is assignable to "armin" | "eren" which is assignable to string which is assignable to any.
// "armin" | "eren" is not assignable to "armin" because what would happen if the value happened to be "eren"?
// Interestingly, undefined and null are assignable to void (at least, when strictNullChecks is disabled), but not the other way around.