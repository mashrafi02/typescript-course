// JavaScript added support for private class members in ES2022 with the # syntax. TypeScript respects that syntax, and will give you compilation errors if you try to access private members outside of the class.

class SecretAgent {
    // a private field
    #id: string;
  
    constructor(id: string) {
      this.#id = id;
    }
  
    // a public method
    getCodeName(): string {
      const idToCodeNameMap: Record<string, string> = {
        "007": "James Bond",
        "006": "Alec Trevelyan",
        // Add more mappings as needed
      };
      return idToCodeNameMap[this.#id] || "Unknown Agent";
    }
  }
  
  const bond = new SecretAgent("007");
  console.log(bond.getCodeName()); // "James Bond"
  
  // Property '#id' is not accessible outside class 'SecretAgent' because it has a private identifier.
  console.log(bond.#id);


// you could also declare private member with private keyword like this

class SecretAgent2 {
    // a private field
    private id: string;

    constructor(id: string) {
        this.id = id;
      }
}



// TypeScript Public and Private



// JavaScript's # private fields didn't come until ES2022, but TypeScript developers had wanted public/private/protected access modifiers for a long time, so TypeScript added support for private and protected before then. So a lot of older TypeScript code uses the keyword syntax.

// To create private members the TypeScript-only way, you use the private keyword:


class SecretAgent3 {
  // private field using the private keyword
  private id: string;

  constructor(id: string) {
    this.id = id;
  }

  // a public method
  getCodeName(): string {
    const idToCodeNameMap: Record<string, string> = {
      "007": "James Bond",
      "006": "Alec Trevelyan",
      // Add more mappings as needed
    };
    return idToCodeNameMap[this.id] || "Unknown Agent";
  }
}

const bond2 = new SecretAgent3("007");
console.log(bond.getCodeName()); // "James Bond"

// Property 'id' is private and only accessible within class 'SecretAgent'
console.log(bond2.id); // This will cause a compilation error