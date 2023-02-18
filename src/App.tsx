import React, { useState } from "react";
import { Home, Controller } from "./components";
import Wrapper from "./components/pages/Wrapper";

const App = () => {
  const [activeLink, setActiveLink] = useState<number>(0);
  return (
    <div className="main-content">
      <Home active={activeLink} />
      <Wrapper active={activeLink} />
      <Controller active={activeLink} setActive={setActiveLink} />
    </div>
  );
};

export default App;
