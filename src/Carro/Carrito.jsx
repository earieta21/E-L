import React from 'react';
import Style from './CarritoStyle.module.css';

const Carrito = ({ carrito, cerrarCarrito, removeFromCart, updateCartQuantity, checkOut }) => {
  const handleQuantityChange = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
    } else {
      updateCartQuantity(productId, quantity);
    }
  };

  return (
    <div className={Style.cart}>
      <button className={Style.close} onClick={cerrarCarrito}>x</button>
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <ul className={Style.cartList}>
          {carrito.map((producto, index) => (
            <li key={index} className={Style.cartItem}>
              <img src={producto.img} alt={producto.nombre} className={Style.cartImage} />
              <div className={Style.cartDetails}>
                <h4 className={Style.cartProductName}>{producto.nombre}</h4>
                <p className={Style.cartProductPrice}>{producto.precio}</p>
                <input 
                  type="number"
                  value={producto.quantity}
                  min="1"
                  className={Style.cartQuantity}
                  onChange={(e) => handleQuantityChange(producto.id, parseInt(e.target.value))} />
                  <button className={Style.removeButton} onClick={() => removeFromCart(producto.id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className={Style.checkout}>
        <button className={Style.checkoutButton} onClick={checkOut}>Check Out</button>
      </div>
    </div>
  );
};

export default Carrito;
