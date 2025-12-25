// This is one of the more unhinged features of TypeScript (at least in my opinion), but it is really cool and insanely powerful when you find a good use case for it.

// Remember literal types and type unions?
type Class = "wizard" | "warrior" | "rogue";

// Well, you can also create literal types using string templates:
type Hero = `elf ${Class}`;

// The type of Class expands automatically to the possible values, so the above is the same as:
// type Hero = "elf wizard" | "elf warrior" | "elf rogue";


// You can also create types that enforce a simple pattern match. For example:

type logRecord = `${string}: ${number}`;

// this is valid because it's a string followed by a colon and a number
const criticalErr: logRecord = "CRITICAL: 69";

// these are all invalid
// const criticalErr: logRecord = "CRITICAL 92";
// const criticalErr: logRecord = "CRITICAL: 92a";
// const criticalErr: logRecord = "92: CRITICAL";





// So what happens if we create an absolute monstrosity of a union type? It can happen faster than you'd expect... Say we're building a MoveMessage type describing a message about a character's movement in a game:

type Distance = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Class =
  | "Warrior"
  | "Rogue"
  | "Mage"
  | "Cleric"
  | "Paladin"
  | "Druid"
  | "Hunter"
  | "Shaman";
type MoveMessage =
  `The ${Class} moves ${Distance}, ${Distance}, ${Distance}, ${Distance}, then ${Distance}.`;

const message: MoveMessage = "The Warrior moves 6, 2, 5, 4, then 7 spaces";


// Error: Union type too complex to represent.

// This happens because we've tried to create an explicit union of types that has exploded in size. There are hundreds of thousands of possible combinations in the type above. Even if we remove a couple of the Distance values: