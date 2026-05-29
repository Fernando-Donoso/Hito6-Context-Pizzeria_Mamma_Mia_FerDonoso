import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // -----------------------------
  //   AÑADIR AL CARRITO
  // -----------------------------
  const addToCart = (pizza) => {
    const id = String(pizza.id); // ← Asegura que siempre sea string

    setCart((prev) => {
      const exists = prev.find((p) => p.id === id);

      if (exists) {
        return prev.map((p) =>
          p.id === id ? { ...p, count: p.count + 1 } : p
        );
      }

      return [...prev, { ...pizza, id, count: 1 }];
    });
  };

  // -----------------------------
  //   AUMENTAR CANTIDAD
  // -----------------------------
  const increase = (id) => {
    id = String(id);

    setCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, count: p.count + 1 } : p
      )
    );
  };

  // -----------------------------
  //   DISMINUIR CANTIDAD
  // -----------------------------
  const decrease = (id) => {
    id = String(id);

    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, count: p.count - 1 } : p
        )
        .filter((p) => p.count > 0)
    );
  };

  // -----------------------------
  //   ELIMINAR PRODUCTO
  // -----------------------------
  const removeFromCart = (id) => {
    id = String(id);

    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  // -----------------------------
  //   TOTAL A PAGAR
  // -----------------------------
  const total = cart.reduce((sum, p) => sum + p.price * p.count, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increase, decrease, removeFromCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

