// The protected keyword is unique to TypeScript in that it's not part of the EcmaScript standard. It allows you to define members that are accessible within the class and its subclasses, but not from outside the class. It's like "private but also accessible to subclasses".


class Character {
    protected health: number;
  
    constructor(health: number) {
      this.health = health;
    }
  
    protected takeDamage(amount: number): void {
      this.health -= amount;
      if (this.health < 0) {
        this.health = 0;
      }
    }
  }
  
  class Fighter extends Character {
    constructor(health: number) {
      super(health);
    }
  
    public fight(damage: number): void {
      // Can access protected members from the parent class
      this.takeDamage(damage);
      console.log(`Fighter took ${damage} damage. Health: ${this.health}`);
    }
  }
  
  const fighter = new Fighter(100);
  fighter.fight(30);
  
  // Error: Property 'health' is protected and only accessible within class 'Character' and its subclasses
  console.log(fighter.health);
  
  // Error: Property 'takeDamage' is protected and only accessible within class 'Character' and its subclasses
  fighter.takeDamage(10);


// The protected keyword does not have a native JavaScript alternative. I personally don't use it very often. I tend to use # private fields whenever possible, or just leave them public if subclasses need access.