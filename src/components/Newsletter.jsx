import React from 'react'
import Style from './NewsletterStyle.module.css'

const Newsletter = () => {
  return (
    <div>
        <section className={Style.newsletter}>
            <h2>Suscríbete a Nuestro Newsletter</h2>
            <p>Recibe las últimas noticias, ofertas especiales y novedades directamente en tu correo electrónico.</p>
            <form action="URL_DE_TU_SERVIDOR_DE_SUSCRIPCIÓN" method="POST" className={Style.form}>
                <input type="email" name="email" placeholder="Ingresa tu correo electrónico" required/>
                <button type="submit" className="button">Suscribirse</button>
            </form>
        </section>

    </div>
  )
}

export default Newsletter
