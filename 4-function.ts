// One of the most useful places for explicit types is in function signatures. For example:

function createMessage(name: string, a: number, b: number): string {
    return `${name} scored ${a + b}`;
  }

//   The : type after each parameter specifies that parameter's type, and the : type after all the parameters specifies the return type. It works the same way with arrow functions:

const createMessage2 = (name: string, a: number, b: number): string => {
    return `${name} scored ${a + b}`;
  };