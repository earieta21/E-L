import React from 'react';
import Style from './MiCuentaStyle.module.css'

const MiCuenta = () => {
  return (
    <div className={Style.cuenta}>
      <h2>Crear Cuenta</h2>
      <form>
        <div className={Style.form}>
          <label htmlFor="username">Usuario:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className={Style.form}>
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className={Style.form}>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className={Style.form}>
          <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />
        </div>
        <button type="submit">Crear Cuenta</button>
      </form>
    </div>
  );
}

export default MiCuenta;
