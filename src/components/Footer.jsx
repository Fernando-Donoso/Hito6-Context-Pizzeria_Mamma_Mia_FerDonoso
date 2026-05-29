import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* Logo / Brand */}
        <div style={styles.brand}>
          🍕 Pizzería Mamma Mia!
        </div>

        {/* Derechos reservados */}
        <div style={styles.copy}>
          © 2021 - Pizzería Mamma Mia! - Todos los derechos reservados
        </div>

        {/* Info extra */}
        <div style={styles.info}>
          📍 Santiago, Chile &nbsp;|&nbsp; 📞 +56 9 1234 5678 &nbsp;|&nbsp; ✉️ contacto@mammamia.cl
        </div>

      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#1e1e2e",
    borderTop: "1px solid #2e2e3e",
    width: "100%",
    padding: "1rem 0",
    marginTop: "auto",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "6px",
    padding: "0 1rem",
  },
  brand: {
    color: "#f5a623",
    fontWeight: "700",
    fontSize: "1rem",
  },
  copy: {
    color: "#aaaaaa",
    fontSize: "0.8rem",
  },
  info: {
    color: "#666666",
    fontSize: "0.75rem",
  },
};

export default Footer;
