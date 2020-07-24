import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer__custom">
      <Link to="/">Términos y condiciones</Link>
      <Link to="/">Política de privacidad</Link>
      <Link to="/">Centro de ayuda</Link>
    </footer>
  );
};
