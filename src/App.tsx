import React, { useState } from "react";
import { Home, Controller } from "./components";
import Wrapper from "./components/pages/Wrapper";

const App = () => {
  const [activeLink, setActiveLink] = useState<number>(0);
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  return (
    <div className="main-content">
      <Home active={activeLink} />
      <Wrapper active={activeLink} darkTheme={darkTheme} />
      <Controller
        active={activeLink}
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
        setActive={setActiveLink}
      />
    </div>
  );
};

export default App;
