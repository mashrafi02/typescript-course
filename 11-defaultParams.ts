// Default parameters provide fallback values for optional arguments.

function newCharacter(name: string, role: string = "warrior"): string {
    return `${name} is a ${role}`;
  }
  
  console.log(newCharacter("Gandalf"));
  // Gandalf is a warrior
  console.log(newCharacter("Gandalf", "wizard"));
  // Gandalf is a wizard



//   When you use default parameters, you do not need to mark the parameter as optional by using ?. When using a default value, the parameter type can be automatically inferred, so don't specify it:

function countdown(start = 10): void {
    // start is a number
    console.log(`Counting down from ${start}...`);
  }