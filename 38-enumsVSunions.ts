// If you've been paying attention, you might be wondering "Why would I ever do this":

enum CardSuit {
  Hearts = "Hearts",
  Diamonds = "Diamonds",
  Clubs = "Clubs",
  Spades = "Spades",
}

// When you could do this:

type CardSuit2 = "Hearts" | "Diamonds" | "Clubs" | "Spades";

// Pros of Unions

// Unions are what you use for complex types, so it feels consistent to use them for primitives as well
// Unions don't add any additional runtime code
// It's less verbose to write a union


// Pros of Enums

// Enums are slightly easier to refactor because if you change the value of a label (e.g. "Hearts" to "hearts"), you don't have to change the string literal in every place you use it.
// If you're using numerical enums, then the reverse mapping can be useful I guess.
// CardSuit.Hearts provides more context than just "Hearts". That said, any good editor is going to say type CardSuit on hover, so it's not a huge win.



// Personally, I use unions over enums pretty much every time. In fact, Anders Hejlsberg (the creator of TypeScript) has said that they might not even add enums to TypeScript if they were starting over.