import React from "react";

interface certificateProps {
  title: string;
  link: string;
  image: string;
}

const Certificate = ({ title, link, image }: certificateProps) => {
  return (
    <div className={`certificate`}>
      <a href={link} target="_blank">
          <img
            src={image}
            alt={title}
            style={{ width: "100%", height: "300px" }}
          />
      </a>
      <div className="certificate-text">
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default Certificate;
