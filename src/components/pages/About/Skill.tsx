import React from "react";

interface skillProp {
  title: string;
  learnt: string;
}

const Skill = ({ title, learnt }: skillProp) => {
  return (
    <div className="progress-bar">
      <p className="prog-title">{title}</p>
      <div className="progress-con">
        <p className="prog-text">{learnt}</p>
        <div className="progress">
          <span style={{ width: learnt }}></span>
        </div>
      </div>
    </div>
  );
};

export default Skill;
