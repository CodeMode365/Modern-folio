import React from "react";
import About from "./About";
import Portfolio from "./Portfolios";
import Certificates from "./Certificates";
import Contact from "./Contacts";

const Wrapper = ({
  active,
  darkTheme,
}: {
  active: number;
  darkTheme: boolean;
}) => {
  return (
    <main>
      <About active={active} />
      <Portfolio active={active} />
      <Certificates active={active} />
      <Contact active={active} darkTheme={darkTheme} />
    </main>
  );
};

export default Wrapper;
