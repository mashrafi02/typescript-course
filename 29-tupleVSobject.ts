// So why would you have to use a tuple instead of an object? For example, this:

function getCoordinates(): [number, number] {
  return [40.7128, -74.006]; // latitude, longitude
}

// Instead of this:

function getCoordinatesAsObject(): { lat: number; lng: number } {
  return { lat: 40.7128, lng: -74.006 };
}

// Coordinates have a conventional order (latitude, then longitude), so a tuple’s positional semantics fit well. Objects are clearer for named access (coords.lat).

// Counterexample
// I would probably model a User as an object:

type User = { name: string; age: number; email: string };
const user: User = { age: 60, name: "Lane", email: "super@secret.com" };

// A tuple like [string, number, string] would be confusing — user[0] for name? user[2] for email? Objects’ descriptive keys are more intuitive.




// Destructuring Tuples


// Sometimes tuples are also useful when you want to return multiple values from a function (which is impossible in JS/TS), but you don't want to create a new object type just to do so. A tuple, along with destructuring, is a handy way to return "positional" data.

function getName(fullName: string): [string, string] {
  const parts = fullName.split(" ");
  return [parts[0]!, parts[1]!]
}

const [firstName, lastName] = getName("Frodo Baggins");

// Nested Destructuring
// There's nothing stopping you from destructuring nested tuples and objects all at once. Use this example to answer the question:

type UserWithAddress = [string, { city: string; country: string }];

const userData: UserWithAddress = [
  "Aragorn",
  { city: "Minas Tirith", country: "Gondor" },
];

const [userName, { city, country }] = userData;
console.log(city);



// Named Tuples


// To be fair, position-based access isn't very descriptive. Luckily, you can label tuple elements (sometimes called "named tuples"). So, instead of this:

type UserData = [string, number, boolean];

// We can do this:

type UserDataLabeled = [name: string, age: number, isAdmin: boolean];

// Labels make your code more "self-documenting".

// You might hear people say "there's no such thing as self-documenting code". Those people are just mad because they write terrible code. If you name things well and keep things simple, you'll still need comments occasionally, but you won't need them as often.

// When you hover over a variable in your editor, you'll see names instead of just positions:

// Your editor shows the full type:
// [name: string, age: number, isAdmin: boolean]
function getUser(): UserDataLabeled {
  return ["Frodo", 33, false];
}

// Labels Are Just Documentation
// The labels are quite literally just names for the TypeScript tooling, they don't change how the values are accessed. Say I have a named tuple like this:

const user2: [name: string, age: number] = ["Bilbo", 111];

// And then I try to destructure in reverse order:

const [age, name] = user2;
console.log(age); // "Bilbo"
console.log(name); // 111

// The variable names I choose when destructuring don't matter: only the positions do.