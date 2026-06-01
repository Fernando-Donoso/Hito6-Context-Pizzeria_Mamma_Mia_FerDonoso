import { useState, useEffect } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { useParams } from "react-router-dom";

function Pizza() {
  const { id } = useParams(); // ← ID correcto desde la URL

  const [pizza, setPizza] = useState(null);
  
useEffect(() => {
  const consultarApi = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
      const data = await response.json();
      console.log("DATA DESDE API:", data);
      setPizza(data);
    } catch (error) {
      console.error("Error al obtener la pizza:", error);
    }
  };

    consultarApi();
  }, [id]);

  return (
    <div>
      <Header />

      <div style={styles.section}>
        <h2 style={styles.subtitle}>Pizza {id}</h2>

        <div style={styles.grid}>
          {pizza && pizza.id ? (
            <CardPizza pizza={pizza} />
          ) : (
            <p style={{ color: "white" }}>Cargando pizza...</p>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  section: {
    backgroundColor: "#12121f",
    padding: "2rem",
    minHeight: "200px",
  },
  subtitle: {
    color: "#f5a623",
    fontSize: "1.6rem",
    fontWeight: "700",
    marginBottom: "1.5rem",
    textAlign: "center",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1.5rem",
  },
};

export default Pizza;
