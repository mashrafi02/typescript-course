// TypeScript has a built-in type for sets, which are collections of unique values. You can ensure that all the values in the set are of the same type by specifying a type parameter: <T>.

// A Set that contains only strings
const justiceLeague = new Set<string>();

justiceLeague.add("Green Arrow");
justiceLeague.add("Flash");

// Error: Argument of type '2' is not assignable to parameter of type 'string'
justiceLeague.add(2);

// An array can be converted into a set, which automatically removes duplicate values:

// A Set automatically removes duplicate values from an array
const names = ["plasticman", "firestorm", "plasticman"];
const justiceLeague2 = new Set<string>(names);

console.log(justiceLeague2);
// Set { 'plasticman', 'firestorm' }


// Sets also have a few other interesting methods and properties:

// delete()
// has()
// forEach()
// size


const justiceLeague3 = new Set<string>(["Atom", "Black Canary", "Blue Beetle"]);

console.log(justiceLeague3.size); // 3

justiceLeague3.delete("Blue Beetle");
console.log(justiceLeague3.has("Blue Beetle")); // false

justiceLeague3.forEach((member) => console.log(member));
// Atom
// Black Canary