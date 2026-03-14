import { useState } from "react";
import { CartContext } from "./cartContextValue";
import type { CartItem, CartContextType } from "./cartContextValue";
import type { Product } from "../types/Product";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const removeFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };
  const addToCart = (product: Product, quantity: number) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      return [...prev, { product, quantity }];
    });
  };

  const value: CartContextType = { cartItems, addToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
