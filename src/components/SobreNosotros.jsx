import React from 'react'
import Style from './SobreNosotrosStyle.module.css'
import equipo from '../assets copy/equipo.jpg'
import lugar from '../assets copy/lugar.jpg'

const SobreNosotros = () => {
  return (
    <div>
        <section className={Style.about}>
            <h2>Sobre Nosotros</h2>
            <div className={Style.content}>
                <div className={Style.text}>
                <p>En E&L Pleasure, creemos en la importancia de la elegancia y la comodidad. Nuestra misión es ofrecerte la mejor lencería con un diseño único y materiales de alta calidad. Fundada en 2023, nos hemos dedicado a crear piezas que realcen la belleza y la confianza de nuestras clientas.</p>
                <p>Con un equipo apasionado y un compromiso con la excelencia, cada prenda que ofrecemos es el resultado de una cuidadosa atención al detalle y un amor por la moda íntima. Nuestros valores fundamentales son la calidad, la innovación y la satisfacción del cliente.</p>
                </div>
                <div className={Style.images}>
                <img src={equipo} alt="Nuestro Equipo"/>
                <img src={lugar} alt="Nuestra Tienda"/>
                </div>
            </div>
            <div className={Style.values}>
                <h3>Nuestros Valores</h3>
                <ul>
                <li><strong>Calidad:</strong> Solo utilizamos los mejores materiales para nuestras prendas.</li>
                <li><strong>Innovación:</strong> Siempre estamos buscando nuevas formas de mejorar nuestros productos.</li>
                <li><strong>Satisfacción del Cliente:</strong> La felicidad de nuestros clientes es nuestra prioridad.</li>
                </ul>
            </div>
            <a href="#contacto" className={Style.button}>Conoce Más</a>
        </section>

    </div>
  )
}

export default SobreNosotros
