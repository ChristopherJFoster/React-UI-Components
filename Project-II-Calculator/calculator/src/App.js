import React from "react";
import "./css/main.css";
import Display from "./components/DisplayComponents/Display";
import ButtonsGroup from "./components/ButtonComponents/ButtonsGroup";

const App = () => {
  return (
    <div className="chassis">
      <Display />
      <ButtonsGroup />
    </div>
  );
};

export default App;
