import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Header.scss";

import Logo from "../assets/images/logo.png";
import ProfileImg from "../assets/images/profile-icon.png";

export const Header = () => {
  return (
    <header className="header">
      <img className="header__img" src={Logo} alt="Logo" />
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={ProfileImg} alt="Profile" />
          <p>Username</p>
        </div>
        <ul>
          <Link to="/">Perfil</Link>
          <Link to="/login">Cerrar Sesión</Link>
        </ul>
      </div>
    </header>
  );
};
