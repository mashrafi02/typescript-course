// Partial<T>, Required<T>, and Readonly<T> are useful for changing the kinds of properties in a type, but there are also utility types that change the shape of a type. The Record<K, T> utility type creates a type with a set of properties K of type T.


// Using string as the key type
type StringKeyDictionary = Record<string, number>;

const karateScores: StringKeyDictionary = {
  "Ralph Macchio": 60,
  "William Zabka": 100,
  "Jackie Chan": 82,
};

// We can add any string key
karateScores["Pat Morita"] = 85;

// But values must be numbers
// Error: Type 'string' is not assignable to type 'number'
karateScores["Eve"] = "A+";

// You might be wondering, "wait, there's another way to define a key/value pair in TypeScript?"... yeah. I know we're up to like 5 different ways at this point. However, one of the more practical use cases for Record is to ensure that all specified keys in a union are present in the object:


// Using a union of literal types as keys
type PlayerRole = "tank" | "healer" | "dps";
type RoleCapacity = Record<PlayerRole, number>;

const partyRequirements: RoleCapacity = {
  tank: 1,
  healer: 2,
  dps: 3,
};

// TypeScript error if any role is missing
const invalidRequirements: RoleCapacity = {
  tank: 1,
  dps: 3,
  // Error: Property 'healer' is missing in type '{ tank: number; dps: number; }'
};

// We can't add additional keys not in the union
// Error: Property 'support' does not exist on type 'RoleCapacity'
partyRequirements["support"] = 1;



// It's fantastic for exhaustive lookup tables and configuration objects:

type HttpStatusCode = 200 | 201 | 400 | 401 | 403 | 404 | 500;

const statusMessages: Record<HttpStatusCode, string> = {
  200: "OK",
  201: "Created",
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  500: "Internal Server Error",
};

function getStatusMessage(code: HttpStatusCode): string {
  return statusMessages[code];
}

console.log(getStatusMessage(404));
// "Not Found"