import React from "react";

const CardAboutMe = ({ index, text, image, title }) => {
  return (
    <div className="card-container">
      <h1 className={index % 2 === 0 ? "left" : "right"}>{title}</h1>
      <div className={`card-info ${index % 2 === 0 ? "left" : "right"}`}>
        <div className="card-text">{text}</div>
        <div className="card-image">
          <img src={image} alt="about" />
        </div>
      </div>
    </div>
  );
};

export default CardAboutMe;
