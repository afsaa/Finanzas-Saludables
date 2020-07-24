import React from "react";
import "../assets/styles/Hero.scss";

export const Hero = () => {
  const hero_title_text: String =
    "45% de los empleados gastan entre 2 y 3 horas preocupándose por su situación financiera";
  const hero_description_text: String =
    "Ahorra esas horas para usarlas en lo que más te gusta.";

  return (
    <div id="hero">
      <div className="hero-container">
        <h2 className="hero-title">{hero_title_text}</h2>
        <p className="hero-description">{hero_description_text}</p>
      </div>
    </div>
  );
};
