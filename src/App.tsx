import React from "react";
import { Home, Controller } from "./components";
import Wrapper from "./components/pages/Wrapper";

const App = () => {
  return (
    <div className="main-content">
      <Home />
      <Wrapper />
      <Controller />
    </div>
  );
};

export default App;
