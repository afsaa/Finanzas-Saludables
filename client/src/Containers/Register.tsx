import React, { useState } from "react";
import { connect } from "react-redux";
import { registerRequest } from "../actions";
import { Link, useHistory } from "react-router-dom";
import "../assets/styles/Register.scss";

const Register = (props: any) => {
  const history = useHistory();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (event: any) => {
    setForm({ ...form, [event?.target.name]: event?.target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    props.registerRequest(form);
    history.push("/login");
  };

  return (
    <section className="register">
      <div className="register__container">
        <h2>Regístrate</h2>
        <form
          className="register__container--form"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            name="name"
            className="input"
            type="text"
            placeholder="Nombre"
            onChange={(e) => handleInput(e)}
          />
          <input
            name="email"
            className="input"
            type="email"
            placeholder="Correo"
            onChange={(e) => handleInput(e)}
          />
          <input
            name="password"
            className="input"
            type="password"
            placeholder="Contraseña"
            onChange={(e) => handleInput(e)}
          />
          <button className="button" type="submit">
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

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
