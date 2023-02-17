import React from "react";

const CvViewer = () => {
  return (
    <div className="btn-con">
      <a href="./CV.pdf" className="main-btn" target="_blank">
        <span className="btn-text">View CV</span>
        <span className="btn-icon">
          <i className="fas fa-eye"></i>
        </span>
      </a>
    </div>
  );
};

export default CvViewer;
