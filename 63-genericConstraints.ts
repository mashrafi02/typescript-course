// Sometimes you need your generic function to know something about the types it operates on. The examples we've used so far don't know anything about the types they're using:

async function fetchFromApi<T>(url: string): Promise<T | undefined>;

// In fetchFromApi, T could be anything.

// Constraints are just interfaces that allow us to write generics that only operate within the constraints of a given interface type. In the example above, the any constraint is the same as the empty interface because it means the type in question can be anything.

// We can use the extends keyword to constrain the type parameter to have certain properties, for example:

interface HasCost {
  cost: number;
}

function applyDiscount<T extends HasCost>(vals: T[], discount: number): T[] {
  const arr: T[] = [];
  for (const val of vals) {
    val.cost *= discount;
    arr.push(val);
  }
  return arr;
}

// The applyDiscount function works in a type-safe way on any type that has a .cost property, and again, because we're still using generics here, type information will not be lost when the function returns.

const shoes = [
  {
    size: 12.5,
    country: "US",
    cost: 120,
  },
  {
    size: 12.5,
    country: "US",
    cost: 110,
  },
];

const tvs = [
  {
    framerate: 120,
    brand: "Samsung",
    cost: 500,
  },
  {
    framerate: 240,
    brand: "Vizio",
    cost: 300,
  },
];

const people = [
  {
    name: "Lane",
  },
  {
    name: "Breanna",
  },
];

const discountedShoes = applyDiscount(shoes, 0.3);
const discountedTVS = applyDiscount(tvs, 0.5);

// Error:
// Argument of type '{ name: string; }[]' is not assignable to parameter of type 'HasCost[]
// ... also you can't buy people what is wrong with you???
const discountedPeople = applyDiscount(people, 0.2);