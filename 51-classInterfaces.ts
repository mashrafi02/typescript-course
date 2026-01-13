// Classes can implement interfaces using the implements clause. This enforces that the class adheres to the structure defined by the interface. Say we have two interfaces:

interface Vehicle {
    make: string;
    model: string;
  }
  
interface Drivable {
    drive(distance: number): void;
}


// And we have a class that we want to implement (have the properties and methods of) both interfaces:

// class ElectricCar {
//     make: string;
//     model: string;
//   }


// We can add a clause to the class definition to implement both interfaces. However, because at the moment, the class doesn't have a drive method, TypeScript will throw an error:

// Error: Class 'ElectricCar' incorrectly implements interface 'Drivable'.
class ElectricCar implements Vehicle, Drivable {
  make: string;
  model: string;
}


// So, now we're reminded to add the drive method, and we do so:

class ElectricCar2 implements Vehicle, Drivable {
    make: string;
    model: string;
  
    // not required by the interfaces, but it's
    // okay to add extra properties
    private isRunning: boolean = false;
  
    constructor(make: string, model: string) {
      this.make = make;
      this.model = model;
      this.isRunning = false;
    }
  
    drive(distance: number): void {
      this.isRunning = true;
      console.log(`Driving ${distance} miles`);
    }
  }


//   We can now use an instance of ElectricCar as a Vehicle or Drivable:

const myCar = new ElectricCar2("Tesla", "Model S");

function testDrive(vehicle: Vehicle) {
  console.log(`Testing ${vehicle.make} ${vehicle.model}`);
}

testDrive(myCar); // "Testing Tesla Model S"

function takeForARide(drivable: Drivable) {
  drivable.drive(10);
}

takeForARide(myCar); // "Driving 10 miles"



// ❌ Interface cannot do this
interface Hero {
    health: number; // OK
    takeDamage(): void; // OK
  
    constructor(name: string); // ❌ can't have contructor
    attack() { } // ❌ can't have function implementation
  }
  
  // ❌ Abstract class cannot do this
  class A extends B, C {} // ❌ only one class