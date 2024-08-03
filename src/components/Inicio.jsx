import React from 'react'
import HeroSection from './HeroSection'
import Destacados from './Destacados'
import Categorias from './Categorias'
import Testimonios from './Testimonios'
import SobreNosotros from './SobreNosotros'
import Newsletter from './Newsletter'
import Footer from './Footer'



const Inicio = ({addToCart, abrirCarrito}) => {
  return (
    <div>
        <div>
            <br/>
            <HeroSection/>
            <br />
            <Destacados addToCart={addToCart} abrirCarrito={abrirCarrito}/>
            <br />
            <Categorias/>
            <br />
            <Testimonios/>
            <br />
            <SobreNosotros/>
            <br />
            <Newsletter/>
            <br />
            <Footer/>
        </div>
    </div>
  )
}

export default Inicio
