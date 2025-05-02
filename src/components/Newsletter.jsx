import React from "react";
import Style from "./NewsletterStyle.module.css";

const Newsletter = () => {
  return (
    <section className={Style.newsletter}>
      <h2 className={Style.title}>Suscríbete a Nuestro Newsletter</h2>
      <p className={Style.text}>
        Recibe las últimas noticias, ofertas especiales y novedades directamente
        en tu correo electrónico.
      </p>
      <form
        action="URL_DE_TU_SERVIDOR_DE_SUSCRIPCIÓN"
        method="POST"
        className={Style.form}
      >
        <input
          type="email"
          name="email"
          placeholder="Ingresa tu correo electrónico"
          required
          className={Style.input}
        />
        <button type="submit" className={Style.button}>
          Suscribirse
        </button>
      </form>
    </section>
  );
};

export default Newsletter;
