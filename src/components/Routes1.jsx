import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coleccion from './Productos/Coleccion';
import SobreNosotros from './SobreNosotros';
import Error from './Productos/Error';
import Inicio from './Inicio';
import Cabecera from './Cabecera';
import Contacto from './Contacto';
import Blog from './Blog';
import MiCuenta from './MiCuenta';
import Carrito from '../Carro/Carrito';

const Routes1 = () => {
  const [carrito, setCarrito] = useState([]);
  const [carritoVisible, setCarritoVisible] = useState(false);

  useEffect(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  const abrirCarrito = () => setCarritoVisible(true);
  const cerrarCarrito = () => setCarritoVisible(false);

  const addToCart = (product) => {
    const newCart = [...carrito];
    const productIndex = newCart.findIndex(item => item.id === product.id);

    if (productIndex !== -1) {
      newCart[productIndex].quantity += 1;
    } else {
      newCart.push({ ...product, quantity: 1 });
    }

    setCarrito(newCart);
  };

  const removeFromCart = (productId) => {
    const newCart = carrito.filter(item => item.id !== productId);
    setCarrito(newCart);
  };

  const updateCartQuantity = (productId, quantity) => {
    const newCart = carrito.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: quantity };
      }
      return item;
    });
    setCarrito(newCart);
  };

  const checkOut = () => {
    if (carrito.length === 0) {
      alert('El carrito se encuentra vacío. Agrega productos para poder proceder con la compra');
      return;
    }

    const total = carrito.reduce((sum, item) => sum + item.quantity * parseFloat(item.precio.replace('$', '')), 0);
    alert(`Compra realizada con éxito! Total $${total.toFixed(2)}`);
    setCarrito([]);
    cerrarCarrito();
  };

  const totalProductosEnCarrito = () => {
    return carrito.reduce((sum, item) => sum + item.quantity, 0)
  }

  return (
    <BrowserRouter>
      <Cabecera abrirCarrito={abrirCarrito} totalProductosEnCarrito={totalProductosEnCarrito} />
      <div className='cuerpo'>
        <Routes>
          <Route path='/' element={<Inicio abrirCarrito={abrirCarrito} addToCart={addToCart} carrito={carrito} />} />
          <Route path='/Inicio' element={<Inicio />} />
          <Route path='/Coleccion' element={<Coleccion abrirCarrito={abrirCarrito} addToCart={addToCart} carrito={carrito} />} />
          <Route path='/Sobre-Nosotros' element={<SobreNosotros />} />
          <Route path='/Contacto' element={<Contacto />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Mi-Cuenta' element={<MiCuenta />} />
          <Route path='/Carrito' element={<Carrito carrito={carrito} cerrarCarrito={cerrarCarrito} removeFromCart={removeFromCart} updateCartQuantity={updateCartQuantity} checkOut={checkOut} />} />
        </Routes>
        {carritoVisible && (
          <Carrito 
            carrito={carrito} 
            cerrarCarrito={cerrarCarrito}
            removeFromCart={removeFromCart}
            updateCartQuantity={updateCartQuantity}
            checkOut={checkOut}
          />
        )}
      </div>
    </BrowserRouter>
  );
};

export default Routes1;
