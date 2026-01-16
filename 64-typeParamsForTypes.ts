// Type parameters aren't just limited to functions and methods! You can use type parameters to create generic types as well! For example:

interface Store<T> {
  get(id: string): T;
  save(id: string, item: T): void;
  list(): T[];
}
// also works with type aliases using
// type Store<T> = { ... }

// Now a Store can be anything that implements the methods above, but what is stored doesn't matter. Next we can create a function that uses the store, again, not caring about what is stored inside of it:

function addAndGetItems<T>(store: Store<T>, id: string, newItem: T): T[] {
  store.save(id, newItem);
  return store.list();
}

// Finally, we can create a Store that specifically deals with Product types:

type Product = {
  name: string;
  price: number;
};

const productStore = {
  products: {} as Record<string, Product>,
  get(id: string): Product {
    return this.products[id];
  },
  save(id: string, item: Product): void {
    this.products[id] = item;
  },
  list(): Product[] {
    return Object.values(this.products);
  },
};

// And we can use it like this:

const newStore = addAndGetItems(productStore, "laneslaptop", {
  name: "Laptop",
  price: 999,
});
console.log(newStore);
// [{ "name": "Laptop", "price": 999 }]
const finalStore = addAndGetItems(productStore, "allanstoaster", {
  name: "Toaster",
  price: 50,
});
console.log(finalStore);
// [{ "name": "Laptop", "price": 999 }, { name: 'Toaster', price: 50 }]

// We could also create a store for something entirely different!

type Homunculus = {
  title: string;
  abilities: string[];
};

const homunculusStore = {
  homunculi: {} as Record<string, Homunculus>,
  get(id: string): Homunculus {
    return this.homunculi[id];
  },
  save(id: string, item: Homunculus): void {
    this.homunculi[id] = item;
  },
  list(): Homunculus[] {
    return Object.values(this.homunculi);
  },
};

// and it will still work with addAndGetItems:

const newHomunculus = addAndGetItems(homunculusStore, "laneslaptop", {
  title: "Laptop",
  abilities: ["fast", "strong"],
});
console.log(newHomunculus);
// [{ "title": "Laptop", "abilities": ["fast", "strong"] }]