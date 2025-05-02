import React from "react";
import { useNavigate } from "react-router-dom";
import Style from "../Carro/Cart.module.css";

const Cart = ({ carrito, removeFromCart, updateCartQuantity, checkOut }) => {
  const navigate = useNavigate();

  const handleQuantityChange = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
    } else {
      updateCartQuantity(productId, quantity);
    }
  };

  const goToColeccion = () => {
    navigate("/Coleccion");
  };

  return (
    <div className={Style.body}>
      <h1 className={Style.title}>Tu Carrito</h1>

      {carrito.length === 0 ? (
        <div className={Style.empty}>
          <p>Tu carrito está vacío.</p>
          <button onClick={goToColeccion} className={Style.primaryButton}>
            Ir a la Colección
          </button>
        </div>
      ) : (
        <>
          <div className={Style.actions}>
            <button onClick={checkOut} className={Style.primaryButton}>
              Finalizar Compra
            </button>
          </div>

          <ul className={Style.productList}>
            {carrito.map((producto) => (
              <li key={producto.id} className={Style.item}>
                <div className={Style.imgContainer}>
                  <img
                    src={producto.img}
                    alt={producto.nombre}
                    className={Style.img}
                  />
                </div>
                <div className={Style.details}>
                  <h3 className={Style.name}>{producto.nombre}</h3>
                  <p className={Style.price}>{producto.precio}</p>
                  <input
                    type="number"
                    value={producto.quantity}
                    min="1"
                    className={Style.quantity}
                    onChange={(e) =>
                      handleQuantityChange(
                        producto.id,
                        parseInt(e.target.value)
                      )
                    }
                  />
                  <div className={Style.buttonGroup}>
                    <button
                      onClick={() => removeFromCart(producto.id)}
                      className={Style.secondaryButton}
                    >
                      Eliminar
                    </button>
                    <button className={Style.wishlistButton}>
                      Añadir a Wishlist
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Cart;
