import React from "react";

const Controller = () => {
  return (
    <>
      <div className="controls">
        <div className="control active-btn" data-id="home">
          <i className="fas fa-home"></i>
        </div>
        <div className="control" data-id="about">
          <i className="fas fa-user"></i>
        </div>
        <div className="control" data-id="portfolio">
          <i className="fas fa-briefcase"></i>
        </div>
        <div className="control" data-id="certificates">
          <i className="far fa-newspaper"></i>
        </div>
        <div className="control" data-id="contact">
          <i className="fas fa-envelope-open"></i>
        </div>
      </div>
      <div className="theme-btn">
        <i className="fas fa-adjust"></i>
      </div>
    </>
  );
};

export default Controller;
