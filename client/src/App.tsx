import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Reset } from "styled-reset";
import FreePostWrite from "./pages/FreePostWrite/FreePostWrite";

function App() {
  return (
    <div className="App">
      <Reset />
      <FreePostWrite />
    </div>
  );
}

export default App;
