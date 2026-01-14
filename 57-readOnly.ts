// The Readonly<T> utility creates a new type where all the top-level properties are readonly, preventing them from being reassigned after initialization.

interface UserProfile {
    id: string;
    name: string;
    preferences: {
      readonly theme: "light" | "dark";
      notifications: boolean;
    };
  }
  
  type ConstantUserProfile = Readonly<UserProfile>;
  
  // this is the same as
  // type ConstantUserProfile = {
  //   readonly id: string;
  //   readonly name: string;
  //   readonly preferences: {
  //     readonly theme: "light" | "dark";
  //     notifications: boolean;
  //   };
  // }