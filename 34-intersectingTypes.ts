// What happens when we intersect types with overlapping properties?

type Saiyan = {
  name: string;
  powerLevel: number;
};

type Human = {
  name: string;
  age: number;
};

type SaiyanHuman = Saiyan & Human;

// We get this SaiyanHuman type that's the equivalent of:

// type SaiyanHuman = {
//   name: string;
//   powerLevel: number;
//   age: number;
// };

// It merges the properties of both Saiyan and Human, and because name overlaps, it safely combines the two types and appears once in the resulting type.

// When Things Go Wrong



// What happens if the name field were incompatible types? For example:

type Saiyan2 = {
  name: "goku" | "vegeta";
  powerLevel: number;
};

type Human2 = {
  name: "krillin" | "yamcha";
  age: number;
};

type SaiyanHuman2 = Saiyan2 & Human2;

// Now the name property can't possibly satisfy both! Humans must be krillin or yamcha, and Saiyans must be goku or vegeta. So, the name property in SaiyanHuman becomes never, which in turn makes the entire SaiyanHuman type never.

// Type '{}' is not assignable to type 'never'
const theLaneagen: SaiyanHuman2 = {};

// It's TypeScript saying, "Hey, the SaiyanHuman type is impossible, do something else." Most of the time, the solution here is to redesign your types to avoid incompatible intersections and make sense.