import React from "react";
import Logo from "../assets copy/Logo.jpg";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Style from "./CabeceraStyle.module.css";

const Cabecera = ({ totalProductosEnCarrito }) => {
  return (
    <header>
      <div className={Style.top}>
        <p>🚚 Envío gratuito en pedidos mayores a $600</p>
      </div>

      <div className={Style.header}>
        <div className={Style.logo}>
          <NavLink to="/">
            <img src={Logo} alt="Logo E&L" />
          </NavLink>
        </div>

        <nav className={Style.navbar}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? Style.active : "")}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Coleccion"
                className={({ isActive }) => (isActive ? Style.active : "")}
              >
                Colección
              </NavLink>
            </li>
            <li className={Style.desktop}>
              <NavLink
                to="/Contacto"
                className={({ isActive }) => (isActive ? Style.active : "")}
              >
                Contacto
              </NavLink>
            </li>
            <li>
              <NavLink to="/Mi-Cuenta" aria-label="Mi cuenta">
                <FaUser className={Style.userIcon} />
              </NavLink>
            </li>
            <li className={Style.cart}>
              <NavLink to="/Carrito" aria-label="Carrito de compras">
                <FaShoppingCart className={Style.cartIcon} />
                {totalProductosEnCarrito() > 0 && (
                  <span className={Style.cartCount}>
                    {totalProductosEnCarrito()}
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Cabecera;
