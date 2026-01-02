// The following is used way more often than most of us would like, but it is incredibly useful. Optional properties can be added to an object type with the ? operator:

type Superhero = {
    name: string;
    strength: number;
    cape?: boolean; // cape is optional
  };

//   That means that the type of .cape is actually boolean | undefined, just like optional function parameters.




// Say I innocently create a new empty object:
let newUser = {};

// Then go to add properties to it later:

// Property 'name' does not exist on type '{}'
newUser.name = "Lane";

// TypeScript doesn't like that!

// It makes sense, we never told TypeScript which properties to allow... but here's what's really crazy: this is actually allowed:
let newUser = {};
newUser = "Lane";


// Yup. You can reassign the variable, which initially held an empty object to a string. In fact, you can reassign it to anything except null or undefined, because everything else is technically an object! So, to get back to our first example, what you probably want to do is just predefine the allowed field(s):
type User = {
    name: string;
  };
  
  let newUser: User = {
    name: "Lane",
  };