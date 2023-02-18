import React, { useRef, useState } from "react";

const Controller = ({
  active,
  setActive,
}: {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
}) => {
  // const togglePage = () => {
  //   [...document.querySelectorAll(".control")].forEach((button) => {
  //     button.addEventListener("click", function () {
  //       document.querySelector(".active-btn").classList.remove("active-btn");
  //       this.classList.add("active-btn");
  //       document.querySelector(".active").classList.remove("active");
  //       document.getElementById(button.dataset.id).classList.add("active");
  //     });
  //   });

  // };

  const toggleTheme = () => {
    document.body.classList.toggle("light-mode");
  };

  const linksRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleClick = (index: number) => {
    setActive(index);
  };

  const links = [
    { label: "home", icon: "fas fa-home", index: 0 },
    { label: "about", icon: "fas fa-user", index: 1 },
    { label: "portfolio", icon: "fas fa-briefcase", index: 2 },
    { label: "certificates", icon: "fas fa-newspaper", index: 3 },
    { label: "contact", icon: "fas fa-envelope-open", index: 4 },
  ];
  // className={activeIndex === link.index ? 'active' : ''}

  return (
    <>
      <div className="controls">
        {[...links].map((link) => (
          <div
            className={`control ${active === link.index ? "active-btn" : ""}`}
            ref={(el) => (linksRef.current[link.index] = el)}
            data-id={link.label}
            key={link.label + link.index}
            onClick={() => setActive(link.index)}
          >
            <i className={link.icon}></i>
          </div>
        ))}

        {/* <div className="control active-btn" data-id="home">
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
        </div> */}
      </div>
      <div className="theme-btn" onClick={() => toggleTheme()}>
        <i className="fas fa-adjust"></i>
      </div>
    </>
  );
};

export default Controller;
