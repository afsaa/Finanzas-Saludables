import React from "react";

import "../assets/styles/Benefits.scss";
import goal from "../assets/images/goal-icon.png";
import createRoutines from "../assets/images/create-routines-icon.png";
import takeAction from "../assets/images/take-action-icon.png";

export const Benefits = () => {
  return (
    <>
      <section className="benefits">
        <h2 className="benefits__title">
          Creemos en tí y tu capacidad para transformar tu realidad financiera y
          bienestar.
          <br />
          Para lograrlo estamos aquí para apoyarte.
        </h2>
        <div className="benefits__container">
          <div className="benefits__container--benefit">
            <img src={goal} alt="Metas" />
            <h3>
              Desarrolla nuevos hábitos
              <br /> que te ayudarán en el camino
              <br /> a lograr tus metas
            </h3>
          </div>
          <div className="benefits__container--benefit">
            <img src={createRoutines} alt="Rutinas" />
            <h3>
              Crea rutinas saludables <br />
              con tu dinero
            </h3>
          </div>
          <div className="benefits__container--benefit">
            <img src={takeAction} alt="Toma acción" />
            <h3>Toma acción!</h3>
          </div>
        </div>
      </section>
    </>
  );
};
