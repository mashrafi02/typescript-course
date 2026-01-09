// Okay, so here's the quirk that makes me recommend type over interface in most cases. Declaration merging is, in my experience, mostly a footgun. Sure, it's useful in certain niche cases (like modifying the global Window type in front-end code), but most of the time it leads to confusing bugs.

// When you declare the same interface (use the same name) multiple times, all the declarations are merged. This:

interface Spaceship {
  name: string;
}

interface Spaceship {
  engines: number;
}

interface Spaceship {
  lightSpeed: boolean;
}

// Is the same as this:

interface Spaceship {
  name: string;
  engines: number;
  lightSpeed: boolean;
}

// If you use the type keyword instead, you'll get an error that you can't redeclare the type (which is probably what you want):

type Spaceship2 = {
  name: string;
};

// Duplicate identifier 'Spaceship'
type Spaceship2 = {
  engines: number;
};