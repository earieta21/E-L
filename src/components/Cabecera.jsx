import React from 'react';
import Logo from '../assets copy/Logo.jpg';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Style from './CabeceraStyle.module.css';

const Cabecera = ({ abrirCarrito, totalProductosEnCarrito }) => {
  return (
    <>
      <header>
        <div className={Style.top}>
          <p>Envió gratuito en pedidos mayores a $600</p>
        </div>
        <div className={Style.header}>
          <div className={Style.logo}>
            <img src={Logo} alt="Logo" />
          </div>
          <nav className={Style.navbar}>
            <ul>
              <li>
                <NavLink to='/'>Inicio</NavLink>
              </li>
              <li>
                <NavLink to='/Coleccion'>Colección</NavLink>
              </li>
              <li className={Style.desktop}>
                <NavLink to='/contacto'>Contacto</NavLink>
              </li>
              <li className={Style.user}>
                <NavLink to='/mi-cuenta'><FaUser className={Style.userIcon}/></NavLink>
              </li>
              <li className={Style.cart}>
                  <NavLink to='carrito'><FaShoppingCart className={Style.cart} /></NavLink>
                  <span className={Style.cartCount}>{totalProductosEnCarrito()}</span>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Cabecera;
