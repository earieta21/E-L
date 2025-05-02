import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Coleccion from "./Productos/Coleccion";
import Inicio from "./Inicio";
import Cabecera from "./Cabecera";
import Contacto from "./Contacto";
import MiCuenta from "./MiCuenta";
import Cart from "../Carro/Cart1";
import Style from "./Routes1.module.css";

const Routes1 = () => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const addToCart = (product) => {
    const newCart = [...carrito];
    const productIndex = newCart.findIndex((item) => item.id === product.id);

    if (productIndex !== -1) {
      newCart[productIndex].quantity += 1;
    } else {
      newCart.push({ ...product, quantity: 1 });
    }

    setCarrito(newCart);
    toast.success("Producto agregado al carrito");
  };

  const removeFromCart = (productId) => {
    const newCart = carrito.filter((item) => item.id !== productId);
    setCarrito(newCart);
    toast.info("Producto eliminado del carrito");
  };

  const updateCartQuantity = (productId, quantity) => {
    const newCart = carrito.map((item) =>
      item.id === productId ? { ...item, quantity } : item
    );
    setCarrito(newCart);
  };

  const checkOut = () => {
    if (carrito.length === 0) {
      toast.error("El carrito está vacío. Agrega productos para comprar.");
      return;
    }

    const total = carrito.reduce(
      (sum, item) =>
        sum + item.quantity * parseFloat(item.precio.replace("$", "")),
      0
    );

    toast.success(`Compra realizada con éxito. Total: $${total.toFixed(2)}`);
    setCarrito([]);
  };

  const totalProductosEnCarrito = () =>
    carrito.reduce((sum, item) => sum + item.quantity, 0);

  const buyNow = (product) => {
    const total = parseFloat(product.precio.replace("$", ""));
    toast.success(`Compra inmediata realizada. Total: $${total.toFixed(2)}`);
  };

  return (
    <BrowserRouter>
      <Cabecera totalProductosEnCarrito={totalProductosEnCarrito} />
      <div className={Style.cuerpo}>
        <Routes>
          <Route
            path="/"
            element={
              <Inicio addToCart={addToCart} carrito={carrito} buyNow={buyNow} />
            }
          />
          <Route
            path="/Inicio"
            element={<Inicio addToCart={addToCart} buyNow={buyNow} />}
          />
          <Route
            path="/Coleccion"
            element={
              <Coleccion
                addToCart={addToCart}
                carrito={carrito}
                buyNow={buyNow}
              />
            }
          />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Mi-Cuenta" element={<MiCuenta />} />
          <Route
            path="/Carrito"
            element={
              <Cart
                carrito={carrito}
                updateCartQuantity={updateCartQuantity}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                checkOut={checkOut}
              />
            }
          />
        </Routes>
      </div>

      {/* Toast notifications */}
      <ToastContainer position="top-center" autoClose={3000} />
    </BrowserRouter>
  );
};

export default Routes1;
