import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Login.scss";

import googleIcon from "../assets/images/google-icon.png";
import twitterIcon from "../assets/images/twitter-icon.png";

export const Login = () => {
  return (
    <section className="login">
      <div className="login__container">
        <h2>Inicio de Sesión</h2>
        <form className="login__container--form">
          <input className="input" type="email" placeholder="Correo" />
          <input className="input" type="password" placeholder="Contraseña" />
          <button type="button" className="button">
            Iniciar sesión
          </button>
          <div className="login__container--remember-me">
            <label>
              <input
                type="checkbox"
                name="remember"
                id="checkbox1"
                value="checkbox"
              />
              Recuérdame
            </label>
            <Link to="/">Olvidé mi contraseña</Link>
          </div>
        </form>
        <section className="login__container--social-media">
          <div>
            <img src={googleIcon} alt="Google" />
            <span>Iniciar sesión con Google</span>
          </div>
          <div>
            <img src={twitterIcon} alt="Twitter" />
            <span>Iniciar sesión con Twitter</span>
          </div>
        </section>
        <p className="login__container--register">
          Todavía no tienes una cuenta?
          <Link to="/register">Registrate!</Link>
        </p>
      </div>
    </section>
  );
};
