import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { increase, decrease, removeFromCart } = useContext(CartContext);

  const { name, price, img, count, id } = item;

  return (
    <div style={styles.card}>
      <img src={img} alt={name} style={styles.image} />

      <div style={styles.info}>
        <h3 style={styles.title}>{name}</h3>

        <p style={styles.price}>${price.toLocaleString("es-CL")}</p>

        <div style={styles.controls}>
          <button style={styles.btn} onClick={() => decrease(id)}>-</button>
          <span style={styles.count}>{count}</span>
          <button style={styles.btn} onClick={() => increase(id)}>+</button>
        </div>

        <button style={styles.deleteBtn} onClick={() => removeFromCart(id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

const styles = {
card: {
  backgroundColor: "#1e1e2f",
  borderRadius: "10px",
  padding: "1rem",
  width: "220px", // 👈 más angosto para que quepan varias en fila
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
},
  image: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  info: {
    marginTop: "1rem",
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
  },
  price: {
    color: "#f5a623",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  count: {
    color: "#ccc",
  },
};

export default CartItem;

