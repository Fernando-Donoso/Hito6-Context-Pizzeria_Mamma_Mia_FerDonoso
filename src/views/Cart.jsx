import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function CartPage() {
  const { cart, increase, decrease, removeFromCart, total } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h1>Carrito de Compras</h1>

      <div className="row">
        <div className="col-md-6">
          <ul className="p-0">
            {cart.map((p) => (
              <li key={p.id} className="border rounded mt-2 p-3" style={{ listStyle: "none" }}>
                <div className="d-flex justify-content-between">
                  <div>
                    <img style={{ width: "50px" }} src={p.img} alt="" /> {p.name}
                  </div>

                  <div>
                    <button className="btn btn-sm btn-secondary" onClick={() => increase(p.id)}>+</button>
                    <span className="mx-2">{p.count}</span>
                    <button className="btn btn-sm btn-secondary" onClick={() => decrease(p.id)}>-</button>

                    <p className="mt-2">Total: ${(p.price * p.count).toLocaleString()}</p>

                    <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(p.id)}>
                      Eliminar
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-6 border rounded p-3">
          <h3>Resumen de Compra</h3>
          <p>Total a Pagar: ${total.toLocaleString()}</p>
          <button className="btn btn-primary">Finalizar Compra</button>
        </div>
      </div>
    </div>
  );
}
