import { useState, useContext } from 'react';
import Style from './ProductDetailsStyle.module.css'
import Touch from './Touch/Touch';

function ProductDetails({ product, cerrar, addToCart }) {
  


  return (
    <div className={Style.modal}>
      <div className={Style.content}>
        <div className={Style.imageSection}>
          <img src={product.img} alt={product.nombre} className={Style.productImage} />
        </div>
        <div className={Style.detailSection}>
            <button className={Style.close} onClick={cerrar}>x</button>
            <div className={Style.HeadProduct}>
                <h3 className={Style.productName}>{product.nombre}</h3>
                <p className={Style.productPrice}>{product.precio}</p>
                <button className={Style.addToCart} onClick={() => addToCart(product)}>Agregar al Carrito</button>
                <Touch product={product}/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
