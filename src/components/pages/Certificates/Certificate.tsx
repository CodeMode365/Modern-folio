import React from "react";
import LazyLoad from "react-lazyload";

interface certificateProps {
  title: string;
  link: string;
  image: string;
}

const Certificate = ({ title, link, image }: certificateProps) => {
  return (
    <div className={`certificate`}>
      <a href={link} target="_blank">
        <LazyLoad
          once
          height={300}
          placeholder={
            <img src="./img/load.png" style={{ filter: "grayscale(0)" }} />
          }
        >
          <img
            src={image}
            alt={title}
            style={{ width: "100%", height: "300px" }}
          />
        </LazyLoad>
      </a>
      <div className="certificate-text">
        <h4>{title}</h4>
      </div>
    </div>
  );
};

export default Certificate;
