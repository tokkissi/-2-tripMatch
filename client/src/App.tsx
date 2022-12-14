import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FreePostDetail from "./pages/FreePostDetail/FreePostDetail";
import MatchPostDetail from "./pages/MatchPostDetail/MatchPostDetail";
import { Reset } from "styled-reset";

function App() {
  return (
    <div className="App">
      <Reset />
      <MatchPostDetail />
    </div>
  );
}

export default App;
