// The satisfies operator validates that a value matches a specific type without changing its inferred type. It solves a common pain point in TypeScript's type system. Before satisfies, you often had to choose between:

// Letting TypeScript infer types (good for flexibility, but might miss errors)
// Using explicit type annotations (good for catching errors, but loses narrowed type information)
// Here's an example:


// Using type inference (flexible but might miss errors)
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: 255, // same as hex "#0000ff"
  
    // "classic Lane-style typo" - Allan
    yelow: "#ffff00",
  };


//   To get around this, we can create an explicit type, and use that to catch typos:

type ColorMap = {
  red: string | number;
  green: string | number;
  blue: string | number;
  yellow: string | number;
};
  
const colorsTyped: ColorMap = {
  red: "#ff0000",
  green: "#00ff00",
  blue: 255,
  // Error: "yelow" is not in type ColorMap
  yelow: "#ffff00",
};


//   The trouble is that because our ColorMap type uses string | number for the values, we lose the more specific type information:

// redHex is now 'string | number'
// where it used to be 'string
type redHex = typeof colorsTyped.red;
  
//  This means that despite the value colorsTyped.red being a string, its string | number type will cause errors if you try to call string methods on it:

// Error: Property 'toUpperCase' does not exist on type 'string | number'
const redUpper = colorsTyped.red.toUpperCase();


// The satisfies operator gives us the best of both worlds:

type ColorMap2 = {
  red: string | number;
  green: string | number;
  blue: string | number;
  yellow: string | number;
};

const colorsSatisfies = {
  red: "#ff0000",
  green: "#00ff00",
  blue: 255,
  yellow: "#ffff00",
  // Error: "yelow" is not in type ColorMap
  // yelow: "#ffff00"
} satisfies ColorMap2;

// We keep the narrowed types!
type RedHexSatisfies = typeof colorsSatisfies.red;
const redUpper = colorsSatisfies.red.toUpperCase(); // "#FF0000"