import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { loginRequest } from "../actions";
import "../assets/styles/Login.scss";

import googleIcon from "../assets/images/google-icon.png";
import twitterIcon from "../assets/images/twitter-icon.png";

const Login = (props: any) => {
  const { loginRequest } = props;
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  type User = {
    email: string;
    password: string;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const user: User = { email, password };
    loginRequest(user);
    setEmail("");
    setPassword("");
    history.push("/");
  };

  return (
    <section className="login">
      <div className="login__container">
        <h2>Inicio de Sesión</h2>
        <form
          className="login__container--form"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            className="input"
            type="email"
            placeholder="Correo"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="button">
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

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
