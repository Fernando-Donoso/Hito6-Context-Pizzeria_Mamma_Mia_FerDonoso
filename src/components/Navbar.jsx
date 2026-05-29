import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";
import { CartContext } from "../contexts/CartContext";   // ← IMPORTANTE

// Simulación: cambiar a true para simular usuario logueado
const token = false;

const Navbar = () => {
  const { total } = useContext(CartContext);   // ← TOTAL REAL DEL CARRITO

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>

        {/* Lado izquierdo: Brand + botones */}
        <div style={styles.left}>
          <span style={styles.brand}>Pizzería Mamma Mia!</span>

          <div className="btn-group" role="group">

            {/* Home */}
            <Link to="/" className="btn btn-outline-secondary btn-sm" style={styles.btn}>
              🍕 Home
            </Link>

            {/* Profile */}
            <Link to="/profile" className="btn btn-outline-secondary btn-sm" style={styles.btn}>
              🔓 Profile
            </Link>

            {/* Botones condicionales */}
            {token ? (
              <button type="button" className="btn btn-outline-secondary btn-sm" style={styles.btn}>
                🔒 Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline-secondary btn-sm" style={styles.btn}>
                  🔐 Login
                </Link>
                <Link to="/register" className="btn btn-outline-secondary btn-sm" style={styles.btn}>
                  🔐 Register
                </Link>
              </>
            )}

          </div>
        </div>

        {/* Lado derecho: Total carrito */}
        <div>
          <Link to="/cart" className="btn btn-outline-success btn-sm" style={styles.cartBtn}>
            🛒 Total: ${formatPrice(total)}
          </Link>
        </div>

      </div>
    </nav>
  );
};


const styles = {
  navbar: {
    backgroundColor: "#1e1e2e",
    padding: "0.4rem 0",
    borderBottom: "1px solid #2e2e3e",
    width: "100%",
    boxSizing: "border-box",
    margin: 0,
    overflow: "hidden",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "0 1rem",
    boxSizing: "border-box",
  },
  left: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    gap: "8px",
  },
  brand: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: "1rem",
    whiteSpace: "nowrap",
  },
  btn: {
    color: "#aaaaaa",
    borderColor: "#555555",
    fontSize: "0.8rem",
    padding: "0.25rem 0.6rem",
    backgroundColor: "transparent",
    whiteSpace: "nowrap",
  },
  cartBtn: {
    color: "#20c997",
    borderColor: "#20c997",
    fontSize: "0.8rem",
    padding: "0.25rem 0.75rem",
    backgroundColor: "transparent",
    whiteSpace: "nowrap",
  },
};

export default Navbar;
