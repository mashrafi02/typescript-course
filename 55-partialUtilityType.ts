// There are several built-in utility types that transform existing types into new ones. One of the most useful is Partial<T>, which makes all properties of a type optional. For example:

type User = {
  id: string;
  name: string;
  email: string;
};

// Without Partial
function updateUser(
  userId: string,
  userInfo: {
    id?: string;
    name?: string;
    email?: string;
  },
) {
  // ...
}

// With Partial
function updateUser(userId: string, userInfo: Partial<User>) {
  // ...
}

// Instead of copy/pasting the type definition, the Partial<T> utility type allows us to generate a new type based on an existing one. That also means if the original is ever updated, the new type created with Partial<T> type will automatically have those changes!




// Nested Objects


// Partial<T> only makes the top-level properties optional. For example:

type User2 = {
    id: string;
    name: string;
    preferences: {
      theme: string;
      notifications: boolean;
    };
  };


//   If we use Partial<User>, the resulting type would look like this:

type LooseyGooseyUser = Partial<User>

type LooseyGooseyUser2 = {
    id?: string;
    name?: string;
    preferences?: {
        theme: string;
        notifications: boolean;
    };
};
  
//   The theme and notifications properties are still required (assuming preferences is provided).