import React, { useState } from 'react';
import Style from './ColeccionStyle.module.css';
import { lenceria } from '../../Lenceria';
import ProductDetails from './ProductDetails';

const Coleccion = ({ abrirCarrito, addToCart, carrito }) => {
  const [modalState, setModalState] = useState({ show: false, product: null });
  const [filter, setFilter] = useState('all');

  const abrir = (product) => {
    setModalState({ show: true, product });
  };

  const cerrar = () => {
    setModalState({ show: false, product: null });
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const getFilteredProducts = () => {
    let filteredProducts = [...lenceria];

    switch (filter) {
      case 'price-asc':
        filteredProducts = filteredProducts.sort((a, b) => parseFloat(a.precio.replace('$', '')) - parseFloat(b.precio.replace('$', '')));
        break;
      case 'price-desc':
        filteredProducts = filteredProducts.sort((a, b) => parseFloat(b.precio.replace('$', '')) - parseFloat(a.precio.replace('$', '')));
        break;
      default:
        break;
    }

    return filteredProducts;
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div>
      <header className={Style.header}>
        <h1>Nuestra Colección</h1>
        {/*<button className={Style.cartButton} onClick={abrirCarrito}>Ver Carrito ({carrito.length})</button>*/}
      </header>
      <section>
        <h2>Nuestra Colección</h2>
        <p>Explora nuestra última colección de lencería diseñada para realzar tu belleza y comodidad.</p>
        <div className={Style.filters}>
          <select value={filter} onChange={handleFilterChange}>
            <option value="all">Todos</option>
            <option value="price-asc">Precio: Menor a Mayor</option>
            <option value="price-desc">Precio: Mayor a Menor</option>
          </select>
        </div>
        <div className={Style.big}>
          <div className={Style.short}>
            {filteredProducts.map((producto, index) => (
              <div className={Style.coleccion} key={index}>
                <div className={Style.container}>
                  <img src={producto.img} alt={producto.nombre} className={Style.image}/>
                </div>
                <h3 className={Style.name}>{producto.nombre}</h3>
                <p className={Style.price}>{producto.precio}</p>
                <a href="#" className={Style.button} onClick={() => abrir(producto)}>Ver más</a>
                <button className={Style.agregar} onClick={() => addToCart(producto)}>Agregar al Carrito</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {modalState.show && (
        <ProductDetails product={modalState.product} cerrar={cerrar} addToCart={addToCart} />
      )}
    </div>
  );
};

export default Coleccion;
