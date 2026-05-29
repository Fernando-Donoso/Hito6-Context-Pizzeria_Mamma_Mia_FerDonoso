import React, { useState } from "react";
import NavBar from "./NavBar";

export default function CartPage() {
  const [productos, setProductos] = useState([
{
    id: "P001",
    name: "napolitana",
    price: 5950,
    count: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
  },
  {
    id: "P002",
    name: "española",
    price: 7250,
    count: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab",
  },
  {
    id: "P003",
    name: "salame",
    price: 5990,
    count: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3",
  },
]);




  const modificarCantidad = (operacion, id)=>{
    console.log("Vamos a hacer una operación de ", operacion, " al producto con id ", id)

    let productoAModificar = productos.find(p => p.id === id)
    console.log("Producto a modificar: ", productoAModificar)

    if(operacion === "suma"){
      productoAModificar.count = productoAModificar.count + 1
    }
    if(operacion === "resta" && productoAModificar.count){
      productoAModificar.countroductoAModificar.count
    }

    let productosActualizados = productos.map(p => p)

    setProductos(productosActualizados)

  }



  return (
    <>
      <div className="container">
        <h1>Carrito de Compras</h1>
        <div className="row">
          <div className="col-md-6">
            <ul className="">
              {productos.map((p, i) => (
                <li
                  key={i}
                  className="border rounded mt-2 p-3"
                  style={{ listStyle: "none" }}
                >
                  <div className="d-flex justify-content-between">
                    <div>
                      <img style={{ width: "50px" }} src={p.img} alt="" />{" "}
                      {p.name}
                    </div>
                    <div>
                      <button className="btn btn-sm btn-secondary"
                      onClick={()=> modificarCantidad("suma", p.id)}
                      >+</button>{" "}
                      {p.count}
                      <button className="btn btn-sm btn-secondary ms-1"
                      onClick={()=> modificarCantidad("resta", p.id)}
                      >
                        -
                      </button>
                      <p>Total: ${(p.price * p.count).toLocaleString()}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-6 border rounded p-3" >
            <h3>Resumen de Compra</h3>
            <p>Total a Pagar: ${productos.reduce((total, producto) => total + (producto.price * producto.count), 0).toLocaleString()}</p>
              <button className="btn btn-primary">Finalizar Compra</button>
          </div>
        </div>
      </div>
    </>
  );
}