import React from "react";
import Style from "./ProductDetailsStyle.module.css";
import Touch from "./Touch/Touch";

function ProductDetails({ product, cerrar, addToCart, buyNow }) {
  return (
    <div className={Style.modalOverlay} onClick={cerrar}>
      <div className={Style.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={Style.closeButton} onClick={cerrar}>
          ×
        </button>

        <div className={Style.modalBody}>
          <div className={Style.imageWrapper}>
            <img
              src={product.img}
              alt={product.nombre}
              className={Style.productImage}
              loading="lazy"
            />
          </div>

          <div className={Style.details}>
            <h3 className={Style.name}>{product.nombre}</h3>
            <p className={Style.price}>{product.precio}</p>

            <button
              className={Style.addToCart}
              onClick={() => addToCart(product)}
            >
              Agregar al Carrito
            </button>

            <button className={Style.buyNow} onClick={() => buyNow(product)}>
              Comprar Ahora
            </button>

            <Touch product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
