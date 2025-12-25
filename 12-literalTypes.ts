// Literal types are incredibly powerful for narrowing the possible values of a variable.

// A string can have an infinite number of values.
// A number can have an infinite number of values.
// So what if we want to declare a "direction" variable?

function move(direction: string) {
    // Implementation...
  }


//   This kinda sucks... direction can be any string! To be fair, in many languages enums are used to solve this problem. And while TypeScript does have enums, which we'll cover later, literal types are a more lightweight solution. A literal value can be used as a type:

function go(direction: "north") {
    // Implementation...
  }


  // To make it a bit more useful, let's combine that idea with a union type:

  function movE(direction: "north" | "south" | "east" | "west") {
    // Implementation...
  }

  // And then let's refactor it to make a new "Direction" type that we can reuse:

  type Direction = "north" | "south" | "east" | "west";

  function step(direction: Direction) {
    // Implementation...
  }