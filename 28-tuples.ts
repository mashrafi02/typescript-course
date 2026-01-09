// A tuple is a special kind of array where each position has a specific, known type.

const nameAndAge: [string, number] = ["Rose Tyler", 24];

// The existence of tuples in TypeScript has me using them where I never would have used an array in JavaScript. The fact that the length is fixed and the type of index is known makes them much more safe to use for small collections.

// Be Explicit With Tuples
// You need to provide explicit typing with tuples! This is a tuple:

// [string, number]
const nameAndAge2: [string, number] = ["John Jones", 104];

// But if we remove the type, it's inferred as an array of string | number:

// (string | number)[]
const nameAndAge3 = ["Martha Jones", 24];

// With a (string | number)[] you can do this:

const nameAndAge4 = ["Martha Jones", 24];
nameAndAge4[1] = "Donna Noble";

// But with a tuple, TypeScript will provide an error (which is probably what you want). So, always explicitly type your tuples!

const nameAndAge5: [string, number] = ["Martha Jones", 24];
// Error: Type 'string' is not assignable to type 'number'.
nameAndAge5[1] = "Donna Noble";




// ReadOnly

// Tuples in TypeScript are (guh) still arrays under the hood, so counterintuitively you can still push to them and pop from them. This is a bit of a gotcha, tuples in most languages are fixed length.

// Getting out-immutable'd by Python is a sad state of affairs.

const nameAndAge6: [string, number] = ["Martha Jones", 24];
nameAndAge.push("Donna Noble");

// So you still need to be careful about underlying array length... that is, unless you use readonly tuples, which is really the only way I use tuples.

const nameAndAge7: readonly [string, number] = ["Martha Jones", 24];
// Error: Property 'push' does not exist on type 'readonly [string, number]'.
nameAndAge7.push("Donna Noble");

// Much better! I use readonly any time I possibly can, its kinda like using const over let whenever possible. However, keep in mind that readonly is TypeScript specific, which means it's enforced at compile time, but not at runtime (like const is).