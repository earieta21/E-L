import React from 'react';
import Style from './OpinionesStyle.module.css'; // Asegúrate de crear y ajustar el archivo de estilos CSS module

const Opiniones = ({ opiniones }) => {
  return (
    <div className={Style.opiniones}>
      <h4>Opiniones</h4>
      {opiniones && opiniones.map((opinion, index) => (
        <div key={index} className={Style.review}>
          <p><strong>{opinion.usuario}:</strong> {opinion.texto}</p>
        </div>
      ))}
    </div>
  );
};

export default Opiniones;
