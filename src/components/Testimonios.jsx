import React from 'react'
import Style from './TestimoniosStyle.module.css'

const Testimonios = () => {
  return (
    <div>
        <section className={Style.testimonials}>
            <h2>Testimonios de Clientes</h2>
            <div className={Style.grid}>
                {/* -- Testimonio 1 -- */}
                <div className={Style.item}>
                    <p className={Style.text}>"La mejor calidad de lencería que he comprado, ¡totalmente recomendada!"</p>
                <div className={Style.author}>
                    <img src="ruta/al/avatar1.jpg" alt="Cliente Satisfecha" className={Style.avatar}/>
                    <span className={Style.name}>Cliente Satisfecha</span>
                </div>
                </div>
                {/* -- Testimonio 2 -- */}
                <div className={Style.item}>
                    <p className={Style.text}>"Excelente servicio y productos de alta calidad. Me encanta comprar aquí."</p>
                <div className={Style.author}>
                    <img src="ruta/al/avatar2.jpg" alt="Cliente Feliz" className={Style.avatar}/>
                    <span className={Style.name}>Cliente Feliz</span>
                </div>
                </div>
                {/* -- Añade más testimonios según sea necesario -- */}
            </div>
        </section>

    </div>
  )
}

export default Testimonios
