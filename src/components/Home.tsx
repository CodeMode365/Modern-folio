import React from "react";
import CvViewer from "./CvViewer";

const Home = ({ active }: { active: number }) => {
  return (
    <header
      className={`container header ${active === 0 ? "active" : ""}`}
      id="home"
    >
      <div className="header-content">
        <div className="left-header">
          <div className="h-shape"></div>
          <div className="image">
            <img src="img/hero1.jpg" alt="" />
          </div>
        </div>
        <div className="right-header">
          <h1 className="name">
            Hi, I'm <span>Pabin B. Dhami.</span> A Web Developer / Designer.
          </h1>
          <p>
            I'm a Web Developer, I love to create beautiful and functional
            websites.
            <br />
            “If You Think Math is Hard Try Web Design"
          </p>
          <CvViewer />
        </div>
      </div>
    </header>
  );
};

export default Home;
