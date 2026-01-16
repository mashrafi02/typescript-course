// f you've ever seen funky looking .d.ts files and wondered what they are, they're declaration files. They only contain type information - no runtime code is allowed. They're very useful for defining the types for JavaScript code that exists in your app, but that doesn't have any type information.

// For example, in Boot.dev we support login with Google. We use TypeScript in our codebase, but we just include Google's JavaScript library in our HTML as per their instructions. Because we want the static type hints in our editors, we have this globals.d.ts file in our project:

declare global {
    interface Window {
      google: Google;
    }
  }
  
  interface Google {
    accounts: {
      id: {
        renderButton: (
          a: HTMLElement,
          b: {
            type?: string;
            theme?: string;
            size?: string;
            text?: string;
            shape?: string;
            width?: number;
          },
        ) => void;
        prompt: () => void;
        cancel: () => void;
        initialize: ({ client_id: string, callback }) => void;
        disableAutoSelect: () => void;
        revoke: (client_id: string, callback) => void;
      };
    };
  }
  
  export {};

// It just says, "Hey, there's a global variable called google on the window object, and it has this shape." Now we can use window.google in our code and get type hints in our editor. It doesn't do anything for us at runtime, but it makes our lives much easier when writing the code.