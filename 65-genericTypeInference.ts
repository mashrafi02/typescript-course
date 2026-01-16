// You may have already noticed this, but in most contexts, TypeScript can infer type parameters by the actual parameters you pass in, so you won't need to specify them. Let's take our titan transformer example again:

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

// Previously, we explicitly passed in <Human, string> as the type parameters:

const titanNames = transform<Human, string>(humans, titanTransformer);
console.log(titanNames);

// But in this case, there's no need because TypeScript knows that our humans variable is an array of Human objects, and the titanTransformer function takes a Human and returns a string. So we can just call:

const titanNames = transform(humans, titanTransformer);