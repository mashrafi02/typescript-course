// It can get really cumbersome to write out long custom types whenever you want to use them. For example, maybe we have a function that accepts another function as input. Let's use a totally make-believe example, something that sets a timeout:

function setLoggerTimeout(
    loggerCallback: (s1: string, s2: string) => string,
    delay: number,
  ) {
    // do something
  }


//   That's a nasty function signature... let's use the type keyword instead to create a type alias:
type LoggerCallback = (s1: string, s2: string) => string;

// Now anytime we need to use this specific kind of function (one that accepts two strings and returns a string), we can just use LoggerCallback:
function setLoggerTimeOut(loggerCallback: LoggerCallback, delay: number) {
    // do something
  }

//   Muuuuuch better! It's easy to read and reusable! Why is that important? It's less prone to copying errors as we use in other places in our code. And in the future, if we want to change it, we only have to modify the type declaration rather than everywhere it's used.