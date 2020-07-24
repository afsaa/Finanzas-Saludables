import React from "react";
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
          <a href="#">Perfil</a>
          <a href="#">Cerrar Sesión</a>
        </ul>
      </div>
    </header>
  );
};
