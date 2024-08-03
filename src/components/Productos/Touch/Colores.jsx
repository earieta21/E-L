import React from 'react';
import Style from './ColoresStyle.module.css'; // Asegúrate de crear y ajustar el archivo de estilos CSS module

const Colores = ({ colores }) => {
  return (
    <div className={Style.colores}>
      <h4>Colores Disponibles</h4>
      <ul>
        {colores && colores.map((color, index) => (
          <li key={index} className={Style.colorItem} style={{ backgroundColor: color }}></li>
        ))}
      </ul>
    </div>
  );
};

export default Colores;
