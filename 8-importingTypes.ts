// With certain TypeScript configurations you can import types directly from a module:
import { User, Post } from "./models";

// But it's much safer and more efficient to use the import type syntax:
import type { User, Post } from "./models";

// means:

// You can use User and Post only in type positions, like annotations, generics, etc.
// At compile time, TS checks them.
// At runtime, this import is erased, so no JS code is produced for it.

// This way TypeScript knows that you're only importing types, and it can drop the imports so they don't generate extra JavaScript code when your project is compiled. This syntax also works:
import { type User, type Post } from "./models";




// If User and Post are only used as types: import type is correct and nothing “breaks” at runtime.
// If you need to call them, new them, or otherwise use them as real values, you must use a regular import, not import type.