import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { products as initialProducts } from "../data/products";
import type { Product } from "../data/products";

interface ProductsContextType {
  products: Product[];
  getProductById: (id: number) => Product | undefined;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const getProductById = (id: number) => {
    return products.find((p) => p.id === id);
  };

  return (
    <ProductsContext.Provider value={{ products, getProductById }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
}
