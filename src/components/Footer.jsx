import React from 'react';
import Style from './FooterStyle.module.css';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
        <footer>
            <div className={Style.footer}>
                {/* -- Información de la Empresa -- */}
                <div className={Style.section}>
                    <h3>E&L Pleasure</h3>
                    <p>La mejor lencería para sentirte especial todos los días.</p>
                </div>

                {/* -- Iconos de Redes Sociales -- */}
                <div className={Style.section + ' ' + Style.socialMedia}>
                    <h3>Síguenos</h3>
                    <a href=""><i className="icono-facebook"><FaFacebook /></i></a>
                    <a href="https://www.instagram.com/_eyl_pleasure/"><i className="icono-instagram"><FaInstagram /></i></a>
                    <a href="https://twitter.com/tu-perfil"><i className="icono-twitter"><FaTwitter /></i></a>
                </div>

                {/* -- Información de Contacto -- */}
                <div className={Style.section}>
                    <h3>Contacto</h3>
                    <p>Email: <a href="mailto:eylpleasure@gmail.com">eylpleasure@gmail.com</a></p>
                    <p>Teléfono: +1 310 977 0612</p>
                    <p>Dirección: Calle Ignacio Zaragoza 9na, número 8510-A, Zona Centro, 22000 Tijuana, B.C., Mexico</p>
                </div>
            </div>

            {/* -- Derechos de Autor -- */}
            <div className={Style.bottom}>
                <p>&copy; 2024 E&L Pleasure. Todos los derechos reservados.</p>
            </div>
        </footer>
    </div>
  );
}

export default Footer;
