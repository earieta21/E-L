import React, { useEffect, useState } from "react";
import Style from "./DestacadosStyle.module.css";
import ProductDetails from "./Productos/ProductDetails";
import { lenceria } from "../Lenceria";

const Destacados = ({ addToCart, abrirCarrito, carrito }) => {
  const [modalState, setModalState] = useState({ show: false, product: null });
  const [currentIndex, setCurrentIndex] = useState(0); // Added state for the current image index
  const itemsToDisplay = lenceria.slice(0, 6); // Slice the first 6 items from the lenceria array

  const abrir = (product) => {
    setModalState({ show: true, product });
  };

  const cerrar = () => {
    setModalState({ show: false, product: null });
  };

  return (
    <div>
      <section className={Style.products}>
        <h2>Productos Destacados</h2>
        <div className={Style.scroll}>
          <div className={Style.containerWrapper}>
            <div className={Style.container}>
              {itemsToDisplay.map((producto, index) => (
                <div key={index} className={Style.item}>
                  <div className={Style.imageWrapper}>
                    <img
                      src={producto.img}
                      alt={producto.nombre}
                      className={Style.image}
                    />
                  </div>
                  <h3 className={Style.name}>{producto.nombre}</h3>
                  <p className={Style.price}>{producto.precio}</p>
                  <button
                    onClick={() => abrir(producto)}
                    className={Style.button}
                  >
                    Ver Producto
                  </button>
                  <button
                    onClick={() => addToCart(producto)}
                    className={Style.agregar}
                  >
                    Agregar al Carrito
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {modalState.show && (
        <ProductDetails
          product={modalState.product}
          cerrar={cerrar}
          addToCart={addToCart}
        />
      )}
    </div>
  );
};

export default Destacados;
