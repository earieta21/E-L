import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Style from '../Carro/Cart.module.css';

const Cart = ({carrito, removeFromCart, updateCartQuantity, checkOut }) => {
  const navigate = useNavigate();

  const handleQuantityChange = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
    } else {
      updateCartQuantity(productId, quantity);
    }
  };

  const goToColeccion = () => {
    navigate('/Coleccion');
  };

  const Wishlist = () => {
    
  }

  return (
    <div className={Style.body}>
      <h1 className={Style.h1}>Tu Carrito</h1>
      {carrito.length === 0 ? (
        <><div className={Style.container}>
          <button onClick={goToColeccion} className={Style.button}>Comprar Ahora</button>    
        </div></> 
      ) : (
        <>
          <div className={Style.container}>
            <button onClick={checkOut} className={Style.button}>Check Out</button>
          </div>
          <ul>
            {carrito.map((producto, index) => (
              <li key={index} className={Style.item}>
                <div className={Style.imgContainer}>
                  <img src={producto.img} alt={producto.nombre} className={Style.img}/>
                </div>
                <div className={Style.cardholder}>
                  <h3>{producto.nombre}</h3>
                  <h3>{producto.precio}</h3>
                  <input
                    type="number"
                    value={producto.quantity}
                    min="1"
                    onChange={(e) =>
                      handleQuantityChange(producto.id, parseInt(e.target.value))
                    }
                  />
                  <div className={Style.buttons}>
                    <button onClick={() => removeFromCart(producto.id)} className={Style.button}>Eliminar</button>
                    <button className={Style.button}>Add to Wishlist</button>
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

