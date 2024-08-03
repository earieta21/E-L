import React from 'react'
import HeroSection from './components/HeroSection';
import Destacados from './components/Destacados';
import Categorias from './components/Categorias';
import Testimonios from './components/Testimonios';
import SobreNosotros from './components/SobreNosotros';
import Newsletter from './components/Newsletter';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import Routes1 from './components//Routes1';
import Inicio from './components/Inicio';
import Cabecera from './components/Cabecera';


const App = () => {
  return (
    <>
      <div>
        <Routes1/>
      </div>
    </>
  )
}

export default App;
