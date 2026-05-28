import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    const exists = cart.find((p) => p.id === pizza.id);

    if (exists) {
      setCart(
        cart.map((p) =>
          p.id === pizza.id ? { ...p, count: p.count + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...pizza, count: 1 }]);
    }
  };

  const increase = (id) => {
    setCart(
      cart.map((p) =>
        p.id === id ? { ...p, count: p.count + 1 } : p
      )
    );
  };

  const decrease = (id) => {
    setCart(
      cart.map((p) =>
        p.id === id && p.count > 1
          ? { ...p, count: p.count - 1 }
          : p
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((p) => p.id !== id));
  };

  const total = cart.reduce((acc, p) => acc + p.price * p.count, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increase, decrease, removeFromCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
}
