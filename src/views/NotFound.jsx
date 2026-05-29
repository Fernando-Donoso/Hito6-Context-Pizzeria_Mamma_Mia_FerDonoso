import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.icon} aria-hidden="true">
          🍕
        </div>
        <div style={styles.message}>
          <h1 style={styles.title}>404</h1>
          <p style={styles.subtitle}>No encontramos esta pizza en el menú.</p>
          <p style={styles.text}>
            Parece que la dirección es incorrecta o la receta ya no está disponible.
          </p>
          <Link to="/">
            <button style={styles.button}>Volver a la pizzería</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    background: "radial-gradient(circle at top, rgba(245,166,35,0.14), transparent 35%), #12121f",
  },
  card: {
    maxWidth: "520px",
    width: "100%",
    textAlign: "center",
    backgroundColor: "#1e1e2e",
    border: "1px solid rgba(245,166,35,0.16)",
    borderRadius: "24px",
    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.35)",
    padding: "3rem 2rem",
  },
  icon: {
    fontSize: "4rem",
    marginBottom: "1rem",
  },
  message: {
    color: "#f5f5f5",
  },
  title: {
    fontSize: "4rem",
    margin: 0,
    color: "#f5a623",
  },
  subtitle: {
    margin: "1rem 0 0.5rem",
    color: "#ffffff",
    fontSize: "1.4rem",
    fontWeight: 600,
  },
  text: {
    color: "#c8c8c8",
    marginBottom: "1.8rem",
    lineHeight: 1.7,
  },
  button: {
    padding: "0.85rem 1.6rem",
    border: "none",
    borderRadius: "999px",
    backgroundColor: "#f5a623",
    color: "#12121f",
    cursor: "pointer",
    fontWeight: 700,
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
};
