"use client";
import { CartType } from "@/types/CartType";
import { createContext, ReactNode, useContext, useState } from "react";

type CartContextType = {
  cart: CartType[];
  addProduct: (item: CartType) => void;
  removeProduct: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
};

const CartProviderContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartType[]>([]);
  // add Items into cart
  const addProduct = (item: CartType) => {
    setCart((prev) => {
      const itemIndex = cart.findIndex((cartItem) => cartItem._id === item._id);
      if (itemIndex !== -1) {
        // Item Found
        return prev;
      }
      return [...prev, item];
    });
  };
  // remove Items from cart
  const removeProduct = (id: string) => {
    setCart((prev) => {
      return prev.filter((item) => item._id !== id);
    });
  };
  // increase quantity of item
  const increaseQuantity = (id: string) => {
    setCart((prev) => {
      const itemIndex = cart.findIndex((cartItem) => cartItem._id === id);
      if (itemIndex !== -1) {
        // Item Found
        prev[itemIndex].quantity++;
        return prev;
      }
      return prev;
    });
  };
  // decrease quantity of item
  const decreaseQuantity = (id: string) => {
    setCart((prev) => {
      const itemIndex = cart.findIndex((cartItem) => cartItem._id === id);
      if (itemIndex !== -1) {
        // Item Found
        prev[itemIndex].quantity--;
        return prev;
      }
      return prev;
    });
  };

  return (
    <CartProviderContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartProviderContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartProviderContext);
  if (context === undefined)
    throw new Error("useCart must be used within CartProvider");
  return context;
};
