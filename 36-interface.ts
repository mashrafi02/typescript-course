// As it turns out, there are two ways to define object types: the type keyword (as we've seen with type aliases) and interfaces:

type Superhero = {
  name: string;
  powers: string[];
  isAvenger: boolean;
};

interface Superhero {
  name: string;
  powers: string[];
  isAvenger: boolean;
}

// I'm a huuuuge fan of having multiple ways to do the same things in a language... /s

// In 9/10 scenarios, they work the same way, but there are a few key differences that we'll cover in this chapter. For now, just know that I recommend using type in most cases, but there are a few scenarios where interface is the better choice, which we'll talk about later.




// Extending Interfaces


// This is the exception to my previous rule of thumb that "you should prefer type over interface". Interfaces are a bit better when it comes to extending other interfaces (inheriting properties).

// With types, you use the & (intersection) operator to extend types:

type Character = {
  name: string;
  level: number;
};

type Wizard = Character & {
  spellbook: string[];
  mana: number;
};

// With interfaces, you use the extends keyword:

interface Character2 {
  name: string;
  level: number;
}

interface Wizard2 extends Character2 {
  spellbook: string[];
  mana: number;
}

// In both cases, a Wizard now has all four properties: name, level, spellbook, and mana.

// Why Is “Interface Extends” Usually Better?
// To quote Microsoft's wiki:

// Interfaces create a single flat object type that detects property conflicts, which are usually important to resolve! Intersections on the other hand just recursively merge properties, and in some cases produce never. Interfaces also display consistently better, whereas type aliases to intersections can't be displayed in part of other intersections. Type relationships between interfaces are also cached, as opposed to intersection types as a whole. A final noteworthy difference is that when checking against a target intersection type, every constituent is checked before checking against the "effective"/"flattened" type.

// For this reason, extending types with interfaces/extends is suggested over creating intersection types.

// Put simply, with interfaces the developer ergonomics are a bit better and compilation is a bit faster.




// Extending Multiple Interfaces


// You can extend multiple interfaces at once:

type Character3 = {
  name: string;
  level: number;
};

interface Magical {
  mana: number;
  castSpell(spell: string): void;
}

interface Physical {
  strength: number;
  attack(): void;
}

interface BattleMage extends Character3, Magical, Physical {
  combineAttacks(): void;
}

// BattleMage now has all 7 properties and methods:

// name
// level
// mana
// castSpell
// strength
// attack
// combineAttacks




// Overriding Interface Properties


// You can override properties from the base interface, but the new type must be compatible with the original:

interface Character4 {
  rank: string | number;
  name: string;
  level: number;
}

interface Wizard3 extends Character4 {
  // Wizards only have a number rank
  // This is allowed because
  // `number` is assignable to `string | number`
  rank: number;
  mana: number;
}

// But you can't change to an incompatible type:

interface Character5 {
  rank: string;
  name: string;
  level: number;
}

interface Wizard4 extends Character5 {
  // This breaks because `number` is
  // not assignable to `string`
  rank: number;
  mana: number;
}