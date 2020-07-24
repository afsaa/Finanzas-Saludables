import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Register.scss";

export const Register = () => {
  return (
    <section className="register">
      <div className="register__container">
        <h2>Regístrate</h2>
        <form className="register__container--form">
          <input className="input" type="text" placeholder="Nombre" />
          <input className="input" type="email" placeholder="Correo" />
          <input className="input" type="password" placeholder="Contraseña" />
          <button className="button" type="button">
            Registrarme
          </button>
        </form>
        <p className="register__container--login-link">
          <Link to="/login">Iniciar sesión</Link>
        </p>
      </div>
    </section>
  );
};
