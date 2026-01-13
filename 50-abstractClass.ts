// An abstract class is a class that cannot be instantiated directly. It's a template for inheritance, forcing subclasses to implement specific methods or properties. Say we have this Shape class


abstract class Shape {
    size: "small" | "medium" | "large";
    constructor(size: "small" | "medium" | "large") {
      this.size = size;
    }
  
    abstract calculateArea(): number;
  
    displayArea(): void {
      console.log(`The area of this shape is ${this.calculateArea()}`);
    }
  }


//   We can't do this:

// Error: Cannot create an instance of an abstract class
const shape = new Shape("small");



// Within an abstract class, abstract methods (like calculateArea above) do not have an implementation because the implementation must be provided by the subclass. However, it can still have regular methods (like displayArea above) which are then shared by all subclasses.

// So, we can create a Circle class that extends Shape and implements the calculateArea method:


class Circle extends Shape {
    radius: number;
    constructor(size: "small" | "medium" | "large") {
      super(size);
      if (this.size === "small") {
        this.radius = 5;
      } else if (this.size === "medium") {
        this.radius = 10;
      } else {
        this.radius = 15;
      }
    }
    calculateArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }


//   And of course, the Circle class can be instantiated:

  const circle = new Circle("medium");
  circle.displayArea();
  // The area of this shape is 314.1592653589793



// Like protected, the abstract keyword does not exist in native JavaScript. It's a TypeScript-only feature that helps enforce rules on subclasses at compile time. The abstract keyword and abstract-only methods are removed from the compiled code.

