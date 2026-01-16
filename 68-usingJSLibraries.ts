// When you're starting a new TypeScript project, you're all bright-eyed and bushy tailed, thinking to yourself, "Gee, I'm gonna have amazing type safety all throughout my project".

// And then your project manager walks in and says, hey you're gonna need to npm install pregnantgoku and use that for this feature. Much to your dismay, pregnantgoku doesn't have any type definitions!

// You have a couple of options:

// Allow the any types to flow through your code
// Create your own type definitions
// Check DefinitelyTyped and see if they have definitions for the library
// DefinitelyTyped is a community-driven repository of type definitions for popular JavaScript libraries, and it's a great place to start. That said, this is a course about learning how stuff works, so let's focus on creating your own type definitions for an existing JS library. It's not hard!

// You just create a new file in your project. For example, pregnantgoku.d.ts and add the following:

declare module "goku" {
  export function kamehameha(target: [number, number]): void;
  export type Saiyan = {
    name: string;
    monthsAlong: number;
    powerLevel: number;
  };
}

// Now TypeScript will use this type information when you import pregnantgoku in your code.

// For internal modules, you could just export the types. For example, if you have a pregnantgoku.js file, you could write a pregnantgoku.d.ts file like this:

export function kamehameha(target: [number, number]): void;
export type Saiyan = {
  name: string;
  monthsAlong: number;
  powerLevel: number;
};