import React from "react";

interface futurePorps {
  title: string;
  status?: string;
}

const Future = ({ title, status }: futurePorps) => {
  return (
    <div className="timeline-item">
      <div className="tl-icon">
        <i className="fas fa-briefcase"></i>
      </div>
      <p className="tl-duration">{status}</p>
      <h5>{title}</h5>
    </div>
  );
};

export default Future;
