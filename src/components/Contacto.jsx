import React from 'react'
import Style from './ContactoStyle.module.css'

const Contacto = () => {
  return (
    <div>
        <section className={Style.contact}>
            <h2>Contacto</h2>
            <div className={Style.info}>
                <p><strong>Email:</strong> contacto@eylpleasure.com</p>
                <p><strong>Teléfono:</strong> +123 456 7890</p>
                <p><strong>Dirección:</strong> Calle Ejemplo 123, Ciudad, País</p>
                <p><strong>Horario de Atención:</strong> Lunes a Viernes, 9 AM - 6 PM</p>
            </div>
            <form action="URL_DE_TU_SERVIDOR_DE_CONTACTO" method="POST" className={Style.form}>
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" required/>
                
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required/>
                
                <label htmlFor="subject">Asunto</label>
                <input type="text" id="subject" name="subject" required/>
                
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" rows="5" required></textarea>
                
                <button type="submit" className={Style.button}>Enviar</button>
            </form>
        </section>
    </div>
  )
}

export default Contacto
