// The TS-specific void type represents the return value of functions that don't return a value.


function logMessage(message: string): void {
    console.log(message);
    // nothing is returned here!
  }

//   In JavaScript, a function without a return statement returns undefined by default... but that's kinda vague. 

// In TypeScript, a function with return type void can actually return undefined at runtime (like a normal JS function without return).
// void just means: “you’re not supposed to use the return value.” It’s a type-level signal of intent.

// In other words, void more explicitly communicates the intent that a function returns nothing.

function logSystemEvent(
    event: string,
    severity: "info" | "warning" | "error",
  ) {
    console.log(`SYSTEM ${severity.toUpperCase()}: ${event}`);
  }

//   Its return type would be inferred as void, not string, because there’s no return statement.