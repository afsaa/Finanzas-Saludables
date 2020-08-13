import React from "react";
import "../assets/styles/Hero.scss";

export const Hero = () => {
  const hero_title_text: String =
    "45% de los empleados gastan entre 2 y 3 horas preocupándose por su situación financiera";
  const hero_description_text: String =
    "Ahorra esas horas para usarlas en lo que más te gusta.";
  const hero_cta_text: String = "Aprende ahora como lograrlo!";

  return (
    <div className="hero">
      <div className="hero__container">
        <h2 className="hero__title">{hero_title_text}</h2>
        <p className="hero__description">{hero_description_text}</p>
        <button className="hero__cta" type="button">
          {hero_cta_text}
        </button>
      </div>
    </div>
  );
};
