import React from "react";
import projectsDetail from "./Api";
import FolioItem from "./FolioItem";

const Portfolio = () => {
  return (
    <section className="container" id="portfolio">
      <div className="main-title">
        <h2>
          My <span>Portfolio</span>
          <span className="bg-text">My Work</span>
        </h2>
      </div>
      <p className="port-text">
        Here are some of my work that I've done in various programming languages.
      </p>
      <div className="portfolios">
        {[...projectsDetail].map((project, index) => (
          <FolioItem
            title={project.title}
            github={project.github}
            image={project.img}
            live={project.live}
            key={project.title + index}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
