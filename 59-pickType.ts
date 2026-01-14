// The Pick<T, K> utility type creates a new type by selecting a subset of properties from an existing type. For example:

interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    category: string;
    inStock: boolean;
    images: string[];
    reviews: { user: string; rating: number; text: string }[];
  }
  
  type ProductSummary = Pick<Product, "id" | "name" | "price">;
  
  const productList: ProductSummary[] = [
    { id: "p1", name: "Keyboard", price: 79.99 },
    { id: "p2", name: "Mouse", price: 59.99 },
  ];
  
  const invalidProduct: ProductSummary = {
    id: "p3",
    name: "Headphones",
    price: 99.99,
    // TSC error:
    // Object literal may only specify known properties, and 'description' does not exist in type 'ProductSummary'.
    description: "Noise cancelling headphones",
  };


//   Pick is very useful for creating quick types for functions that don't need everything from the original type.