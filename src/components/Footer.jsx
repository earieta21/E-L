import React from "react";
import Style from "./FooterStyle.module.css";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <div className={Style.container}>
        {/* Empresa */}
        <div className={Style.section}>
          <h3>E&L Pleasure</h3>
          <p>La mejor lencería para sentirte especial todos los días.</p>
        </div>

        {/* Redes Sociales */}
        <div className={`${Style.section} ${Style.socialMedia}`}>
          <h3>Síguenos</h3>
          <div className={Style.icons}>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/_eyl_pleasure/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Contacto */}
        <div className={Style.section}>
          <h3>Contacto</h3>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:eylpleasure@gmail.com">eylpleasure@gmail.com</a>
          </p>
          <p>
            <strong>Teléfono:</strong> +1 310 977 0612
          </p>
          <p>
            <strong>Dirección:</strong> Calle Ignacio Zaragoza 9na, número
            8510-A, Zona Centro, 22000 Tijuana, B.C., México
          </p>
        </div>
      </div>

      <div className={Style.bottom}>
        <p>&copy; 2024 E&L Pleasure. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
