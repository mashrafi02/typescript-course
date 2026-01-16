// There's no need to be limited to just a single type parameter in TypeScript! They're just parameters, and you can have as many as you need (but please don't go crazy).

// To prove that T is just a random name, I'm going to use longer names in this lesson... but just be aware that short capital letters like T, U, V, etc. are the most common convention for generic type parameters.

// Let's create a function that "transforms" its inputs. It takes as input:

// An array of items of type InputType
// A function that takes an item of type InputType and returns an item of type OutputType
// And it returns a new array of items of type OutputType.

function transform<InputType, OutputType>(
  inputs: InputType[],
  update: (item: InputType) => OutputType,
): OutputType[] {
  const outputs: OutputType[] = [];
  for (const input of inputs) {
    const output = update(input);
    outputs.push(output);
  }
  return outputs;
}

// See how long that function signature gets? That's why T and U are so popular...

// If you've been paying close attention, we basically just built our own version of Array.prototype.map.

// Now we can use our own custom transformers with our custom transform function!

type Human = {
  name: string;
  age: number;
};

const humans: Human[] = [
  { name: "Eren", age: 15 },
  { name: "Mikasa", age: 16 },
  { name: "Armin", age: 15 },
];

const titanTransformer = (human: Human): string => `${human.name} is a titan!`;

const titanNames = transform<Human, string>(humans, titanTransformer);
console.log(titanNames);
// ['Eren is a titan!', 'Mikasa is a titan!', 'Armin is a titan!']

// Without changing our transform function, we can use it to transform entirely different types of data:

const numbers = [1, 2, 3, 4, 5];
const double = (num: number): number => num * 2;

const doubledNumbers = transform<number, number>(numbers, double);
console.log(doubledNumbers);
// [2, 4, 6, 8, 10]