// Union types use the pipe symbol (|) and allow you to specify that a value can be one of several types.

// userId is a string OR a number
let userId: string | number;
userId = "user_42";
userId = 42;

// Unions are perfect for when a value could be one of several types. One really cool thing about TypeScript is that conditional checks actually change the type of a variable. This is called "type narrowing". Take a look:
function safeSquare(val: string | number): number {
    if (typeof val === "string") {
      val = parseInt(val, 10);
    }
    // now val is only a number
    return val * val;
  }
  
  let result = safeSquare("5");
  console.log(result);
  // 25
  
  result = safeSquare(5);
  console.log(result);
  // 25