// You can specify function parameters as optional with a question mark (?) after the name:

function greet(name: string, title?: string): string {
    if (title) {
      return `Hello, ${title} ${name}!`;
    }
    return `Hello, ${name}!`;
  }
  
  greet("Gandalf");           // "Hello, Gandalf!"
  greet("Gandalf", "Wizard"); // "Hello, Wizard Gandalf!"


//   There are two rules to keep in mind:

// 1. Optional parameters must come after all required parameters. For example, this code won't compile:

// Error: Required parameter cannot follow optional parameter
function greet(title?: string, name: string): string {
    // ...
  }


// 2.Optional params have an undefined automatically unioned on the specified type. If the value is omitted, it's undefined instead of the specified type.
function greet(name: string, title?: string): string {
    // inside the function, title
    // is a string | undefined
  }