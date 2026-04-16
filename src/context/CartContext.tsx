import { createContext, useContext, useState, type ReactNode } from "react";

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
  size?: string;
  color?: string;
}

interface CartContextType {
  cart: CartItem[];
  wishlist: number[];
  addToWishlist: (id: number) => void;
  addToCart: (item: CartItem) => void;
  removeCart: (id: number) => void;
  updateQuantity: (id: number, value: number) => void;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);

  function addToCart(item: CartItem) {
    setCart((prev) => {
      const findId = prev.find((c) => c.id === item.id);
      if (findId) {
        return prev.map((c) =>
          c.id === findId.id ? { ...c, quantity: c.quantity + 1 } : c,
        );
      }
      return [...prev, item];
    });
  }

  function addToWishlist(id: number) {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    );
  }
  function removeCart(id: number) {
    setCart((prev) => prev.filter((c) => c.id !== id));
  }

  function updateQuantity(id:number, value:number){
    setCart((prev)=>prev.map((c)=>c.id === id ? {...c, quantity:Math.max(1, c.quantity + value)} : c))
  }
  

  return (
    <CartContext.Provider
      value={{ cart, wishlist, addToCart, addToWishlist, removeCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
