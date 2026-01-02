// Object literal types allow you to describe the shape of an object:

function logSaiyan(saiyan: { name: string; power: number }) {
    console.log(`${saiyan.name} has power level: ${saiyan.power}!`);
    // ...
  }

// Or, more likely, you'll define the object type first:
type Saiyan = {
    name: string;
    power: number;
  };
  
  function logsaiyan(saiyan: Saiyan) {
    console.log(`${saiyan.name} has power level: ${saiyan.power}!`);
    // ...
  }


// Most of the time, when you pass an object to a function in TypeScript, it's:
// Okay to have more properties than those defined in the function's parameter type
// Not okay to have missing properties


// For example, say we have this type:
type Spaceship = {
    name: string;
    speed: number;
  };

// and we make an object with one extra property:
const falcon = {
    name: "Millennium Falcon",
    speed: 75,
    weapons: 4,
  };

// We can pass this object to a function that expects a Spaceship:
function pilot(ship: Spaceship) {
    console.log(`Piloting ${ship.name} at ${ship.speed} light-years per hour`);
  }
  
  // this is fine
  pilot(falcon);


//   But interestingly, if we pass in the same object literal (no variable assignment), TypeScript will throw an error:
// Error: Object literal may only specify known properties, and 'weapons' does not exist in type 'Spaceship'.
pilot({ name: "Millennium Falcon", speed: 75, weapons: 4 });





