import React from 'react'
import Style from './CategoriaStyle.module.css'
import img7 from '../assets copy/img7.jpg'
import img8 from '../assets copy/img8.jpg'

const Categorias = () => {
  return (
    <div>
      <section className={Style.categories}>
      <h2>Explora Nuestras Categorías</h2>
      <div className={Style.category}>
        {/* -- Categoría 1 -- */}
        <div className={Style.item}>
          <a href="#sujetadores">
            <img src={img7} alt="Sujetadores" className={Style.image}/>
            <h3 className="category-name">Sujetadores</h3>
          </a>
        </div>
        {/* -- Categoría 2 -- */}
        <div className={Style.item}>
          <a href="#bragas">
            <img src={img8} alt="Bragas" className={Style.image}/>
            <h3 className={Style.name}>Bragas</h3>
          </a>
        </div>
        {/* -- Añade más categorías según sea necesario -- */}
      </div>
    </section>

    </div>
  )
}

export default Categorias
