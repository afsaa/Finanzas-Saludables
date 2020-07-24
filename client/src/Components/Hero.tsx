import React from "react";
import "../assets/styles/Hero.scss";

export const Hero = () => {
  return (
    <div id="hero">
      <div className="hero-container">
        <h2 className="hero-title">
          45% de los empleados gastan entre 2 y 3 horas preocupándose por su
          situación financiera
        </h2>
        <p className="hero-description">
          Ahorra esas horas para usarlas en lo que más te gusta.
        </p>
      </div>
    </div>
  );
};
