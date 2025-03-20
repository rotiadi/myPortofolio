import React, { useState } from "react";

const CardProject = ({ title, image, description, appLink, gitLink, tags }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <h3 className="card-project-title" style={{ textAlign: "center" }}>
        <a href={appLink} target="_blank" rel="noreferrer">
          {title}
        </a>
      </h3>
      <div
        className={`card-project ${isFlipped ? "flipped" : ""}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="card-inner">
          <div className="card-front">
            <div className="card-project-image">
              <img src={image} alt="project" />
            </div>
          </div>

          <div className="card-back">
            <p>{description}</p>
            <div className="card-project-links">
              {gitLink && (
                <>
                  <p>GitHub: </p>
                  {gitLink.map((source) => (
                    <a key={source} href={source} target="_blank">
                      {source}
                    </a>
                  ))}
                </>
              )}
            </div>
            <div className="card-project-tags">
              {tags &&
                tags.map((tag) => (
                  <div key={tag} className="tag">
                    {tag}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
