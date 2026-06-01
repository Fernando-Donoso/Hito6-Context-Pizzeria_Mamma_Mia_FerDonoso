import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";
import { CartContext } from "../contexts/CartContext";
import { UserContext } from "../contexts/UserContext"; // ← IMPORTANTE

const Navbar = () => {
  const { total } = useContext(CartContext);
  const { token, logout } = useContext(UserContext); // ← TOKEN + LOGOUT
  console.log("Navbar token:", token); // ← DEBUG
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>

        {/* Lado izquierdo */}
        <div style={styles.left}>
          <span style={styles.brand}>Pizzería Mamma Mia!</span>

          <div className="btn-group" role="group">

            {/* Home siempre visible */}
            <Link to="/" className="btn btn-outline-secondary btn-sm" style={styles.btn}>
              🍕 Home
            </Link>

            {/* Botones condicionales */}
            {token ? (
              <>
                {/* Profile visible cuando token = true */}
                <Link to="/profile" className="btn btn-outline-secondary btn-sm" style={styles.btn}>
                  🔓 Profile
                </Link>

                {/* Logout ejecuta logout() */}
                <button
                  onClick={logout}
                  className="btn btn-outline-secondary btn-sm"
                  style={styles.btn}
                >
                  🔒 Logout
                </button>
              </>
            ) : (
              <>
                {/* Login y Register cuando token = false */}
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

        {/* Lado derecho: Total siempre visible */}
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
