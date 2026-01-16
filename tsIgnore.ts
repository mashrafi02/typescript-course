// try really hard to avoid using these, but sometimes they are the best choice among a host of bad choices.

// @ts-ignore: Ignores the next line's errors.

// @ts-ignore
const x: number = "not a number"; // Error suppressed

// @ts-nocheck: Disables type checking for the entire file.

// @ts-nocheck

const x: number = "not a number"; // No error

const sum(x: number, y: number): string {
  return x + y; // No error
}

// These comments do what they say on the box: dangerously suppress type errors. Use them very sparingly, or ideally, not at all.