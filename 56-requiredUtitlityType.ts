// The Required<T> utility type does the opposite of Partial<T> - it forces all properties of a type to be required, even those that were originally optional.

// Here's a practical example of using Required<T>:

interface BlogPost {
  title: string;
  content: string;
  tags?: string[];
  publishDate?: Date;
  author?: {
    id: string;
    name?: string;
  };
}

// All properties are now required
type MyRequiredBlogPost = Required<BlogPost>;

// MyRequiredBlogPost is equivalent to:
// {
//   title: string;
//   content: string;
//   tags: string[];
//   publishDate: Date;
//   author: {
//     id: string;
//     name?: string;
//   };
// }

// As before, the Required<T> utility type is not recursive, it only affects the top-level properties.