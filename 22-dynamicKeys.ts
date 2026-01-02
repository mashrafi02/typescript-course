// Sometimes, you won't know all of an object's property names in advance. For example, say you're building a customer management system where employees can add custom key/value pairs to customer records:

// - favoriteColor: "blue"
// - favoriteFood: "pizza"
// - favoriteAnimal: "cat"
// - etc


// You can't know what the user will add ahead of time, but you still want to model the data in your program.

// You can define dynamic keys using an index signature:


type UserMetrics = {
    [key: string]: number;
  };


//   This type says "this object can have any number of properties if the keys are strings and the values are numbers."


const metrics: UserMetrics = {
    wordsPerMinute: 50,
    errors: 2,
    timeOnPage: 120,
  };
  
  metrics["refreshRate"] = 60; // OK
  metrics["theme"] = "dark"; // Error: Type 'string' is not assignable to type 'number'



// we could also define the type like this.. they are equivalent syntaxes but its much cleaner

type UserMetrics = Record<string, number>;




// Dynamic Default Properties

// So there's this (seemingly) weird but useful thing that you'll see in the wild:

type FormData = {
  [field: string]: string;
  email: string;
  password: string;
};


// If what you're concerned about is which types are allowed in the object, you might wonder why email and password are even there. After all, you can specify any string key/value pairs in this type, right?

// You use this syntax to require certain properties, in this case, email and password. The type above says:

// The object must have an email and password property, and it can have any number of additional string properties.

// Here's another example:


type FormData2 = {
  [field: string]: string | number | boolean;
  email: string;
  password: string;
  age: number;
};


// This type says:

// The object must have an email (string), password (string), and age (number) property, but it can have any number of additional string, number, or boolean properties.


// I'd strongly advise against overusing this pattern. Only use dynamic keys when you truly need unknown keys. If you have optional keys, just use the ? operator.