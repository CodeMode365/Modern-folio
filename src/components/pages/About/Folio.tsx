import React from "react";

interface folioProps {
  title: string[];
  count: string;
}

const Folio = ({ title, count }: folioProps) => {
  return (
    <div className="about-item">
      <div className="abt-text">
        <p className="large-text">{count}</p>
        <p className="small-text">
          {title[0]}
          <br />
          {title[1]}
        </p>
      </div>
    </div>
  );
};

export default Folio;
