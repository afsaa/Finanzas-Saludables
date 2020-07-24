import React from "react";
import "../assets/styles/PageNotFound.scss";

export default function PageNotFound() {
  return (
    <section className="page-not-found">
      <h1 className="page-not-found__title animated rubberBand">404</h1>
      <p className="page-not-found__description">
        Upsss, parece que esta página no existe{" "}
        <span role="img" aria-label="Surprised Emoji">
          😯
        </span>
      </p>
    </section>
  );
}
