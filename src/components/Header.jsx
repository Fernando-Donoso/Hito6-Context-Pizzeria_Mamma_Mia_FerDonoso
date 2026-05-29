import React from "react";

const Header = () => {
  return (
    <header style={styles.hero}>
      {/* Overlay suave para legibilidad del texto */}
      <div style={styles.overlay} />

      {/* Contenido centrado */}
      <div style={styles.content}>
        <h1 style={styles.title}>¡Pizzería Mamma Mia!</h1>
        <hr style={styles.divider} />
        <p style={styles.description}>
          ¡Tenemos las mejores pizzas que podrás encontrar!
        </p>
      </div>
    </header>
  );
};

const styles = {
  hero: {
    position: "relative",
    width: "100%",
    minHeight: "280px",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1400&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.40)",
  },
  content: {
    position: "relative",
    zIndex: 1,
    textAlign: "center",
    padding: "2rem",
  },
  title: {
    color: "#ffffff",
    fontSize: "2.6rem",
    fontWeight: "700",
    margin: "0 0 0.6rem 0",
    textShadow: "0 2px 6px rgba(0,0,0,0.5)",
    fontFamily: "Georgia, serif",
  },
  divider: {
    border: "none",
    borderTop: "1px solid rgba(255,255,255,0.4)",
    width: "60%",
    margin: "0.5rem auto 0.8rem auto",
  },
  description: {
    color: "#eeeeee",
    fontSize: "1.05rem",
    margin: 0,
    textShadow: "0 1px 4px rgba(0,0,0,0.5)",
    fontFamily: "Georgia, serif",
    fontStyle: "italic",
  },
};

export default Header;
