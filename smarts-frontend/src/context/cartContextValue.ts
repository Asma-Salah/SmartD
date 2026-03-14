import { createContext } from "react";
import type { Product } from "../types/Product";

export type CartItem = {
  product: Product;
  quantity: number;
};

export type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);
