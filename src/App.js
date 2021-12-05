import React from "react";
import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
      </div>
    </Router>
  );
}

export default App;
