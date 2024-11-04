import React, { useState } from "react";
import Style from "./LoginStyle.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        console.error("Error al iniciar sesión:", errorData);
        alert(`Error: ${errorData.msg || "Error al iniciar sesión"}`);
        return;
      }

      const data = await response.json();
      console.log("Inicio de sesión exitoso:", data);

      localStorage.setItem("token", data.token);
      alert("Inicio de sesión exitoso");
      window.location.href = "/profile";
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Hubo un error al iniciar sesión. Inténtalo de nuevo.");
    }
  };

  return (
    <div className={Style.login}>
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
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
