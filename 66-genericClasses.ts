// We're kinda beating a dead horse at this point.

// Look, we get it, you can add type parameters to almost anything in TypeScript...

// So yeah, classes can be generic too. To keep it somewhat interesting, let's combine a few concepts:

// InMemoryRepository is a generic class
// It implements a generic interface (Repository<T>)
// T is constrained to have an id property
interface Repository<T> {
  getAll(): T[];
  getById(id: string): T | undefined;
  save(item: T): void;
}

class InMemoryRepository<T extends { id: string }> implements Repository<T> {
  private items: T[] = [];

  getAll(): T[] {
    return [...this.items];
  }

  getById(id: string): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  save(item: T): void {
    const index = this.items.findIndex((i) => i.id === item.id);
    if (index >= 0) {
      this.items[index] = item;
    } else {
      this.items.push(item);
    }
  }
}

// There are a few things to note about the example above:

// The purpose of using the implements keyword is to ensure that the class adheres to the Repository<T> interface - TypeScript will yell at us if our InMemoryRepository class can't be used as a Repository<T>.
// While any old Repository<T> doesn't need an id property, our InMemoryRepository does.
// An InMemoryRepository can be used to hold any type of object, as long as it has an id property. And all the implementation logic is shared between all the different possible types.
// Let's create an InMemoryRepository for Shinigami:

interface Shinigami {
  id: string;
  name: string;
}

const deathNoteRepo = new InMemoryRepository<Shinigami>();
deathNoteRepo.save({ id: "1", name: "Ryuk" });
deathNoteRepo.save({ id: "2", name: "Rem" });
console.log(deathNoteRepo.getAll());

// Of course, if we try to create an InMemoryRepository for something that doesn't have an id property, TypeScript will yell at us:

interface Psychopaths {
  name: "Light Yagami" | "L";
}

// Error: Type 'Psychopaths' does not satisfy the constraint '{ id: string; }'
const psychopathRepo = new InMemoryRepository<Psychopaths>();