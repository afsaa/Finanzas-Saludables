import React from "react";
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
          <a href="#">Iniciar sesión</a>
        </p>
      </div>
    </section>
  );
};
