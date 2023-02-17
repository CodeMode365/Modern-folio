import React from "react";

interface folioProp {
  title: string;
  github: string;
  image: string;
  live?: string;
}

const FolioItem = ({ title, github, image, live }: folioProp) => {
  return (
    <div className="portfolio-item">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="hover-items">
        <h3>{title}</h3>
        <div className="icons">
          <a href={github} className="icon">
            <i className="fab fa-github"></i>
          </a>
          {live ? (
            <a href={live} className="icon">
              <i className="fab fas fa-eye"></i>
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default FolioItem;
