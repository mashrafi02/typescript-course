// In TypeScript, the never type represents values that can't occur... sounds useless, right?

// Well, it's not. Take a look at this function that should handle 3 cases:

function handleStatusCode(code: 200 | 404 | 500) {
  if (code === 200) {
    console.log("OK");
    return;
  }
  if (code === 404) {
    console.log("Not Found");
    return;
  }
  throw new Error(`Unknown status code: ${code}`);
}

// But it only handles 200 and 404! TypeScript isn't throwing any compiler errors, but we can configure it to do so! See, after each conditional, the type of code is narrowed down:

function handleStatusCode2(code: 200 | 404 | 500) {
  if (code === 200) {
    console.log("OK");
    return;
  }
  // code is now 404 | 500
  if (code === 404) {
    console.log("Not Found");
    return;
  }
  // code is now 500
  throw new Error(`Unknown status code: ${code}`);
}

// If we assign code to never, TypeScript will complain unless code has actually been narrowed down to no possible values.

function handleStatusCode3(code: 200 | 404 | 500) {
  if (code === 200) {
    console.log("OK");
    return;
  }
  if (code === 404) {
    console.log("Not Found");
    return;
  }
  // Type '500' is not assignable to type 'never'.
  const err: never = code;
  return err;
}

// And now it's fixed by simply handling every case properly:

function handleStatusCode4(code: 200 | 404 | 500) {
  if (code === 200) {
    console.log("OK");
    return;
  }
  if (code === 404) {
    console.log("Not Found");
    return;
  }
  if (code === 500) {
    console.log("Internal Server Error");
    return;
  }
  // no errors! code is never
  const err: never = code;
  return err;
}