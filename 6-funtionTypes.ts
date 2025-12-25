// The syntax for a function type looks like this:
// (param1: type1, param2: type2, ...) => returnType


// For example, a function that takes two numbers and returns a number:
let add: (a: number, b: number) => number;
add = (a, b) => a + b;



// Function Implementation vs Function Type


// What you saw before was the syntax for implementing a function:
(a: number, b: number): number => {
    // function body here
    return a + b;
  }
//   Notice:

//   The colon : before number indicates the return type
//   The curly braces {} contain the function body
//   This is actual executable code

// usecase 
const b = (a: number, b: number): number => {
    return a + b;
  };



// What you're seeing now is the syntax for describing a function type (just the type itself, not an implementation):
let a: (a: number, b: number) => number
// Notice:

// The arrow => is followed directly by the return type
// No colon before the return type
// No curly braces or function body
// This is just a type annotation

// usecases of function type 

// Callbacks and Higher-Order Functions
function processNumbers(
    numbers: number[],
    operation: (a: number, b: number) => number
  ): number {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      result = operation(result!, numbers[i]!);
    }
    return result || 0;
  }
  
  // Now you can pass different operations
  processNumbers([1, 2, 3, 4], (a, b) => a + b);  // Sum
  processNumbers([1, 2, 3, 4], (a, b) => a * b);  // Product


//   Storing Functions in Variables or Objects
interface Calculator {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
    multiply: (a: number, b: number) => number;
  }
  
  const calc: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
  };

  
//   Function Arrays
const operations: Array<(x: number) => number> = [
    (x) => x * 2,
    (x) => x + 10,
    (x) => x ** 2,
  ];