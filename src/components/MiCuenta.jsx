import React, { useState, useEffect } from "react";
import Style from "./MiCuentaStyle.module.css";

const MiCuenta = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [view, setView] = useState("login"); // 'login', 'register', 'profile'

  // Verificar si el usuario está autenticado
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      setView("profile");
    }
  }, []);

  // Manejo del formulario de registro
  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(`Error: ${errorData.msg || "Error al crear la cuenta"}`);
        return;
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      setIsAuthenticated(true);
      setView("profile");
    } catch (error) {
      alert("Hubo un error al crear la cuenta. Inténtalo de nuevo.");
    }
  };

  // Manejo del formulario de inicio de sesión
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(`Error: ${errorData.msg || "Error al iniciar sesión"}`);
        return;
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      setIsAuthenticated(true);
      setView("profile");
    } catch (error) {
      alert("Hubo un error al iniciar sesión. Inténtalo de nuevo.");
    }
  };

  // Cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setView("login");
  };

  // Mostrar contenido según el estado
  if (view === "profile") {
    return (
      <div className={Style.cuenta}>
        <h2>Bienvenido, {username || "Usuario"}</h2>
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </div>
    );
  }

  return (
    <div className={Style.cuenta}>
      {view === "register" ? (
        <>
          <h2>Crear Cuenta</h2>
          <form onSubmit={handleRegister}>
            <div className={Style.form}>
              <label htmlFor="username">Usuario:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className={Style.form}>
              <label htmlFor="email">Correo Electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={Style.form}>
              <label htmlFor="password">Contraseña:</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={Style.form}>
              <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {password && confirmPassword && password !== confirmPassword && (
                <p className={Style.error}>Las contraseñas no coinciden</p>
              )}
            </div>
            <div className={Style.form}>
              <input
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              <label htmlFor="showPassword">Mostrar Contraseña</label>
            </div>
            <button type="submit" disabled={password !== confirmPassword}>
              Crear Cuenta
            </button>
            <button type="button" onClick={() => setView("login")}>
              Ya tengo cuenta
            </button>
          </form>
        </>
      ) : (
        <>
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleLogin}>
            <div className={Style.form}>
              <label htmlFor="email">Correo Electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={Style.form}>
              <label htmlFor="password">Contraseña:</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className={Style.form}>
              <input
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              <label htmlFor="showPassword">Mostrar Contraseña</label>
            </div>
            <button type="submit">Iniciar Sesión</button>
            <button type="button" onClick={() => setView("register")}>
              Crear una cuenta
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default MiCuenta;
