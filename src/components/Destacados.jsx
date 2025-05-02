import React, { useRef, useState } from "react";
import Style from "./DestacadosStyle.module.css";
import ProductDetails from "./Productos/ProductDetails";
import { lenceria } from "../Lenceria";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Destacados = ({ addToCart, buyNow }) => {
  const scrollRef = useRef();
  const [modalState, setModalState] = useState({ show: false, product: null });
  const itemsToDisplay = lenceria.slice(0, 6);

  const abrir = (product) => setModalState({ show: true, product });
  const cerrar = () => setModalState({ show: false, product: null });

  const scroll = (dir) => {
    const scrollAmount = 420;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className={Style.products}>
      <h2 className={Style.heading}>Productos Destacados</h2>

      <div className={Style.scroll}>
        <button
          className={`${Style.buttonScroller} ${Style.left}`}
          onClick={() => scroll("left")}
          aria-label="Desplazar a la izquierda"
        >
          <FaChevronLeft />
        </button>

        <div className={Style.containerWrapper} ref={scrollRef}>
          <div className={Style.container}>
            {itemsToDisplay.map((producto, index) => (
              <div key={index} className={Style.item}>
                <div className={Style.imageWrapper}>
                  <img
                    src={producto.img}
                    alt={producto.nombre}
                    className={Style.image}
                    loading="lazy"
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

        <button
          className={`${Style.buttonScroller} ${Style.right}`}
          onClick={() => scroll("right")}
          aria-label="Desplazar a la derecha"
        >
          <FaChevronRight />
        </button>
      </div>

      {modalState.show && (
        <ProductDetails
          product={modalState.product}
          cerrar={cerrar}
          addToCart={addToCart}
          buyNow={buyNow}
        />
      )}
    </section>
  );
};

export default Destacados;
