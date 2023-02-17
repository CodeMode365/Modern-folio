import React from "react";
import { skills, FuturePlans, folios } from "./Api";
import Skill from "./Skill";
import Future from "./Future";
import Folios from "./Folio";
import CvViewer from "../../CvViewer";

const About = () => {
  return (
    <section className="container about" id="about">
      <div className="main-title">
        <h2>
          About <span>me</span>
          <span className="bg-text">my stats</span>
        </h2>
      </div>
      <div className="about-container">
        <div className="left-about">
          <h4>Information About me</h4>
          <p>
            I'm Mr. Pabin B. Dhami from Bouddha, Kathmandu <br />
            <br />
            I'm currently pursuasing Diploma in Computer Engineering in
            Kathmandu Institute of Technology located at Basundhara, kathmandu
          </p>
          <CvViewer />
        </div>
        <div className="right-about">
          {[...folios].map((item) => (
            <Folios title={item.title} count={item.count} key={item.title[0]} />
          ))}
        </div>
      </div>
      <div className="about-stats">
        <h4 className="stat-title">My Skills</h4>
        <div className="progress-bars">
          {[...skills].map((skill, index) => (
            <Skill title={skill.title} learnt={skill.learnt} key={index} />
          ))}
        </div>
      </div>
      <h4 className="stat-title">My future plan</h4>
      <div className="timeline">
        {[...FuturePlans].map((plan, index) => (
          <Future
            title={plan.title}
            status={plan.status}
            key={index * Math.random() * new Date().getFullYear()}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
