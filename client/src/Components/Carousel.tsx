import React from "react";
import "../assets/styles/Carousel.scss";

import playIcon from "../assets/images/play-icon.png";

export const Carousel = ({ posts }: { posts: any }) => {
  return (
    <section className="carousel">
      <div className="carousel__container">
        {posts.map(
          ({
            id,
            imgSrc,
            imgAlt,
            title,
            subtitle,
          }: {
            id: number;
            imgSrc: string;
            imgAlt: string;
            title: string;
            subtitle: string;
          }) => (
            <div key={id} className="carousel-item">
              <img className="carousel-item__img" src={imgSrc} alt={imgAlt} />
              <div className="carousel-item__details">
                <div>
                  <img src={playIcon} alt="Play icon" />
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">{subtitle}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};
