import React from 'react';
import Style from './TallasStyle.module.css'; // Asegúrate de crear y ajustar el archivo de estilos CSS module

const Tallas = ({ tallas }) => {
  return (
    <div className={Style.tallas}>
      <h4>Tallas Disponibles</h4>
      <ul>
        {tallas && tallas.map((talla, index) => (
          <li key={index}>{talla}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tallas;
