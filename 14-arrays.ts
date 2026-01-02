// The most common way to declare an array is using the bracket notation, string[], number[], etc.:

function trainJedi(jediKnights: string[]) {
    for (let knight of jediKnights) {
      console.log(`Training ${knight}...`);
    }
  }
  
  trainJedi(["Dooku", "Qui-Gon", "Xanatos"]);
  // Training Dooku...
  // Training Qui-Gon...
  // Training Xanatos...



//   TypeScript offers an alternative way to declare arrays using type parameter syntax: Array<T>, which, for now, just know that it's basically that same as the "normal" T[] syntax. You'll see both versions in the wild.


// Using bracket notation
function assignLightsaberColors(name: string, colors: string[]): void {
    // ...
  }
  // Using generic type parameter syntax
function assignLightSaberColors(name: string, colors: Array<string>): void {
// ...
}



// to declare array with multiple data types

// TypeScript infers the type as (string | number)[]
let lightsaberStyles = [1, 2, "double", "shoto"];

function describe(style: string | number): void {
  console.log(`Wield ${style} lightsaber`);
}

lightsaberStyles.forEach(describe);
// Wield 1 lightsaber
// Wield 2 lightsaber
// Wield double lightsaber
// Wield shoto lightsaber