// Generics are one of TypeScript's most powerful features. They allow you to create reusable logic that works with many types rather than a single one. Think of a data structure like a Queue or a Stack. They can hold any type of data, so it would be really annoying to reimplement them for every type:

// NumberQueue
// StringQueue
// UserQueue
// etc.
// Generics let us create a single Queue<T> type that can work with any type T. The best part is that when we use that queue with a specific type, TypeScript won't lose that type information! Generics are a way to reuse behavior across types without resorting to any.

// You may have already noticed, but TypeScript's utility types are all generics! For example, Partial<T> is a generic type that takes a type T and returns a new type with all properties of T set to optional.

// The ExampleGeneric<T> syntax is an example of a generic type parameter. ExampleGeneric is the name of the generic type (e.g. Array, Promise, etc., basically anything that can operate on the various types), and T is the name of the type parameter. T is just a variable name, we could call it anything, but T is a common convention.

// Creating Custom Generic Functions
// Say we're building some client-side code (frontend, I know, ewww) and we make tons of fetch requests to a backend server. We might have a lot of code that looks like this:

async function fetchFromApi(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return undefined;
  }
}

// We could lazily leave this as-is, but then it will always return a Promise<any>, which has no useful type information. Instead, let's make it generic:

async function fetchFromApi2<T>(url: string): Promise<T | undefined> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return undefined;
  }
}

// Now whenever we call it, we just specify the type we expect to get back:

const comments = await fetchFromApi2<Comment[]>(
  "https://api.example.com/posts/1/comments",
);

const user = await fetchFromApi2<User>("https://api.example.com/user/1");

const posts = await fetchFromApi2<Post[]>("https://api.example.com/posts");