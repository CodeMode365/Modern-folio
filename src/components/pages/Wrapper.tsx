import React from "react";
import About from "./About";
import Portfolio from "./Portfolios";
import Certificates from "./Certificates";
import Contact from "./Contacts";

const Wrapper = () => {
  return (
    <main>
      <About />
      <Portfolio />
      <Certificates />
      <Contact />
    </main>
  );
};

export default Wrapper;
