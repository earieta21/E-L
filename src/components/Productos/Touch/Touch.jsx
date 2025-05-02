import React, { useState } from "react";
import Style from "./TouchStyle.module.css";
import Tallas from "./Tallas";
import Colores from "./Colores";
import Opiniones from "./Opiniones";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Touch = ({ product }) => {
  const [showTallas, setShowTallas] = useState(false);
  const [showColores, setShowColores] = useState(false);
  const [showOpiniones, setShowOpiniones] = useState(false);

  return (
    <div className={Style.productDetails}>
      {/* Tallas */}
      <div
        className={Style.detailItem}
        onClick={() => setShowTallas(!showTallas)}
      >
        <h4>
          Tallas Disponibles
          {showTallas ? (
            <FaChevronUp className={Style.icon} />
          ) : (
            <FaChevronDown className={Style.icon} />
          )}
        </h4>
      </div>
      {showTallas && (
        <div className={Style.section}>
          <Tallas tallas={product.tallas} />
        </div>
      )}

      {/* Colores */}
      <div
        className={Style.detailItem}
        onClick={() => setShowColores(!showColores)}
      >
        <h4>
          Colores Disponibles
          {showColores ? (
            <FaChevronUp className={Style.icon} />
          ) : (
            <FaChevronDown className={Style.icon} />
          )}
        </h4>
      </div>
      {showColores && (
        <div className={Style.section}>
          <Colores colores={product.colores} />
        </div>
      )}

      {/* Opiniones */}
      <div
        className={Style.detailItem}
        onClick={() => setShowOpiniones(!showOpiniones)}
      >
        <h4>
          Opiniones
          {showOpiniones ? (
            <FaChevronUp className={Style.icon} />
          ) : (
            <FaChevronDown className={Style.icon} />
          )}
        </h4>
      </div>
      {showOpiniones && (
        <div className={Style.section}>
          <Opiniones opiniones={product.opiniones} />
        </div>
      )}
    </div>
  );
};

export default Touch;
