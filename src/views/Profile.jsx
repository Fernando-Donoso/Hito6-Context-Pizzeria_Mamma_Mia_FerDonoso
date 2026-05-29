import React from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Para los siguientes hitos se implementará la lógica real de autenticación.
    navigate("/");
  };

  return (
    <section style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>
          <span style={styles.badge}>Perfil</span>
          <h1 style={styles.title}>Bienvenido</h1>
        </div>

        <div style={styles.infoBox}>
          <p style={styles.label}>Email del usuario</p>
          <p style={styles.email}>usuario@pizzeria.com</p>
        </div>

        <button type="button" style={styles.button} onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
    </section>
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
    width: "100%",
    maxWidth: "480px",
    backgroundColor: "#1e1e2e",
    borderRadius: "24px",
    padding: "2.5rem",
    boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
    border: "1px solid rgba(245,166,35,0.16)",
  },
  header: {
    marginBottom: "1.8rem",
  },
  badge: {
    display: "inline-block",
    marginBottom: "0.75rem",
    padding: "0.35rem 0.9rem",
    borderRadius: "999px",
    backgroundColor: "#f5a623",
    color: "#12121f",
    fontWeight: 700,
    fontSize: "0.85rem",
  },
  title: {
    margin: 0,
    color: "#ffffff",
    fontSize: "2rem",
    fontWeight: 700,
  },
  infoBox: {
    marginBottom: "2rem",
    padding: "1.4rem 1.2rem",
    borderRadius: "18px",
    backgroundColor: "#12121f",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  label: {
    margin: 0,
    color: "#9ca3af",
    fontSize: "0.92rem",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
  },
  email: {
    margin: "0.65rem 0 0",
    color: "#ffffff",
    fontSize: "1.15rem",
    fontWeight: 600,
    wordBreak: "break-all",
  },
  button: {
    width: "100%",
    padding: "0.95rem 1.2rem",
    borderRadius: "999px",
    border: "none",
    backgroundColor: "#f5a623",
    color: "#12121f",
    fontWeight: 700,
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
};
