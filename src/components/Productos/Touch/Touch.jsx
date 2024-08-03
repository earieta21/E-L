import React, { useState } from 'react';
import Style from './TouchStyle.module.css';
import Tallas from './Tallas';
import Colores from './Colores';
import Opiniones from './Opiniones';

const Touch = ({ product }) => {
  const [showTallas, setShowTallas] = useState(false);
  const [showColores, setShowColores] = useState(false);
  const [showOpiniones, setShowOpiniones] = useState(false);

  const toggleTallas = () => setShowTallas(!showTallas);
  const toggleColores = () => setShowColores(!showColores);
  const toggleOpiniones = () => setShowOpiniones(!showOpiniones);

  return (
    <div className={Style.productDetails}>
      <div className={Style.detailItem} onClick={toggleTallas}>
        <h4>Tallas Disponibles</h4>
      </div>
      {showTallas && (
        <div className={Style.section}>
          <Tallas tallas={product.tallas} />
        </div>
      )}
      
      <div className={Style.detailItem} onClick={toggleColores}>
        <h4>Colores Disponibles</h4>
      </div>
      {showColores && (
        <div className={Style.section}>
          <Colores colores={product.colores} />
        </div>
      )}
      
      <div className={Style.detailItem} onClick={toggleOpiniones}>
        <h4>Opiniones</h4>
      </div>
      {showOpiniones && (
        <div className={Style.section}>
          <Opiniones opiniones={product.opiniones} />
        </div>
      )}
    </div>
  );
}

export default Touch;
