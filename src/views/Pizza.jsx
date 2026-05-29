import { useState, useEffect } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";


function Pizza() {
  // 3 - info guardará los valores traídos desde la API
  const [info, setInfo] = useState([]);

  // 2 - Llamamos a la función consultarApi al momento de montar el componente
  useEffect(() => {
    consultarApi();
  }, []);



  // 1 - Función que consulta la API
  const consultarApi = async () => {
    const url = "http://localhost:5000/api/pizzas/p001";
    const response = await fetch(url);
    const data = await response.json();
    console.log("DATA DESDE API:", data);
    setInfo(data); // Con setInfo actualizamos el estado
  };


  
  return (
    <div>
      {/* Hero / Banner principal */}
      <Header />

      {/* Sección de pizzas */}
      <div style={styles.section}>
        <h2 style={styles.subtitle}>Pizza p001</h2>

        <div style={styles.grid}>
           {info && Object.keys(info).length > 0 ? (
                <CardPizza
                    key={info.id}
                    name={info.name}
                    price={info.price}
                    ingredients={info.ingredients}
                    img={info.img}
                />
                ) : (
                <p style={{ color: "white" }}>Cargando pizza...</p>
                )}
        </div>

      </div>
    </div>
  );
};

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
