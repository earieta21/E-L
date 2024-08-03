import React from 'react'
import Style from './HeroSectionStyle.module.css'
import img5 from '../assets copy/img8.jpg'
import { NavLink } from 'react-router-dom'
const HeroSection = () => {
  return (
    <section className={Style.hero}>
      <div className={Style.background}>
        <img src={img5} alt="Imagen Destacada" className={Style.image}/>
      </div>
      <div className={Style.content}>
        <h1 className={Style.title}>Descubre la Elegancia y Comodidad en Nuestra Nueva Colección de Lencería</h1>
        <p className={Style.subtitle}>Encuentra la lencería perfecta para cada ocasión</p>
        <NavLink to="/coleccion" className={Style.button}>Compra Ahora</NavLink>
      </div>
    </section>

  )
}

export default HeroSection;
