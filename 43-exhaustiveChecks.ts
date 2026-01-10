// If you've ever heard a Rust enjoyer (and let's be honest, if you know one, you've heard from them) talk about how great the Rust programming language is, you've probably heard them mention "pattern matching" and "exhaustive checks".

// To be fair, it's a pretty cool idea. Say we have this union type:

type Notif = "email" | "sms" | "push";

// and we have this function that uses it:

function sendNotification(notif: Notif) {
  switch (notif) {
    case "email":
      return "Sending email";
    case "sms":
      return "Sending SMS";
    case "push":
      return "Sending push notification";
  }
  return "Unknown notification type";
}

// This might be a very reasonable way to write JavaScript code, but that final return "Unknown notification type"; is actually redundant in good TypeScript code. The switch statement is exhaustive, and TypeScript is smart enough to know that return "Unknown notification type"; is actually unreachable code, and will give us a compiler error (assuming we have configured tsc to do so)!

// Design your types so that you get these kinds of useful errors.