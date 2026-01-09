// Optional Elements in Tuples


// Like object properties, you can make tuple elements optional using the ? modifier:

type HttpResponse = [statusCode: number, data: string, error?: string];

// Both of these work!
const successResponse: HttpResponse = [200, "Success!"];
const errorResponse: HttpResponse = [404, "", "Resource not found"];

// Optional Values Are Last
// Similar to optional function parameters, all required elements must come before optional elements. This does not work:

type HttpResponse2 = [statusCode: number, data?: string, error: string];

// But this does:

type HttpResponse3 = [statusCode: number, data?: string, error?: string];

// Optional Types Are Potentially Undefined
// All optional elements are automatically unioned with undefined.

type UserInfo = [name: string, age: number, address?: string];

function handleUserInfo(user: UserInfo) {
  const [name, age, address] = user;
  // name: string
  // age: number
  // address: string | undefined
}

// Personally when I have a bunch of optional properties, I prefer to just use an object type most of the time. I'm less worried about length checks and such with objects.


// if you don't want to use labels then you can specify optioal elements like this

type HttpResponse4 = [number, string, string?];