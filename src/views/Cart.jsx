import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "../components/CartItem";

export default function CartPage() {
  const { cart, total } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h1>Carrito de Compras</h1>

      <div className="row">
        {/* LISTA DE PRODUCTOS */}
        <div className="col-md-6">
          {cart.length === 0 ? (
            <p className="text-muted">Tu carrito está vacío</p>
          ) : (
            <ul className="p-0">
              {cart.map((item) => (
                <li key={item.id} style={{ listStyle: "none", marginBottom: "1rem" }}>
                  <CartItem item={item} />
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* RESUMEN DE COMPRA */}
        <div className="col-md-6 border rounded p-3">
          <h3>Resumen de Compra</h3>
          <p>Total a Pagar: ${total.toLocaleString("es-CL")}</p>
          <button className="btn btn-primary" disabled={cart.length === 0}>
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
}
