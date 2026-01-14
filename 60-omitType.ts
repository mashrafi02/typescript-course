// The Omit<T, K> utility type is the opposite of Pick<T, K>. It creates a new type by excluding a set of properties from an existing type. I find this one to be very useful when removing sensitive or unnecessary properties from a type. For example, maybe you need to remove a password field from a user object before responding to an API request.


interface DatabaseUser {
    id: string;
    username: string;
    email: string;
    passwordHash: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  // Create a safe user representation without sensitive data
  type PublicUser = Omit<DatabaseUser, "passwordHash" | "updatedAt">;
  
  function getUserProfile(userId: string): PublicUser {
    // Fetch user from database...
    const dbUser: DatabaseUser = {
      id: userId,
      username: "johndoe",
      email: "john@example.com",
      passwordHash: "$2a$12$...",
      createdAt: new Date("2023-01-15"),
      updatedAt: new Date()
    };
  
    // Convert to PublicUser (explicit conversion for clarity)
    const publicUser: PublicUser = {
      id: dbUser.id,
      username: dbUser.username,
      email: dbUser.email,
      createdAt: dbUser.createdAt
  
      // TSC error:
      // Object literal may only specify known properties, and 'passwordHash' does not exist in type 'PublicUser'.
      passwordHash: dbUser.passwordHash,
    };
  
    return publicUser;
  }