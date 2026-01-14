// It's incredibly common for a TypeScript codebase to amass a truly absurd number of custom type definitions - hundreds of interfaces and types, all with slightly different numbers of fields for a lot of the same "entities". You might run into crazy stuff like:

interface User {
    id: string;
    name: string;
    email: string;
    age: number;
  }
  
interface UserWithoutId {
    name: string;
    email: string;
    age: number;
}


//   This is bad. We generally try to avoid redefining the same types over and over, and instead try to follow a "single source of truth" approach. For example, here we could refactor a bit:

interface UserWithoutId2 {
    name: string;
    email: string;
    age: number;
}

interface User2 extends UserWithoutId2 {
    id: string;
}

// In other words, we try to define our types once, and build type systems that rely on inference and type transformations to derive the types we need automatically. That way, when we make changes, we only have to do it in one place. In our second example, updating UserWithoutId will now automatically update User as well: a big win.