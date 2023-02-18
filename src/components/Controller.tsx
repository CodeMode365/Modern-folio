import React, { useRef, useState } from "react";

interface controllerProps {
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const Controller = ({
  active,
  setActive,
  darkTheme,
  setDarkTheme,
}: controllerProps) => {
  const toggleTheme = () => {
    if (darkTheme) {
      document.body.classList.remove("light-mode");
      setDarkTheme(false);
    } else {
      document.body.classList.add("light-mode");
      setDarkTheme(true);
    }
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
      </div>
      <div className="theme-btn" onClick={() => toggleTheme()}>
        <i className="fas fa-adjust"></i>
      </div>
    </>
  );
};

export default Controller;
