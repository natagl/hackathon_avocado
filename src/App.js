import React from "react";
import logo from "./logo.svg";
import "./App.css";
import arrName from "./avocado.json";
import { render } from "@testing-library/react";
import Nutrtion from "./components/Nutrition";
console.log(arrName);

function App(props) {
  return (
    <div>
      <Nutrtion />
    </div>
  );
}

export default App;
