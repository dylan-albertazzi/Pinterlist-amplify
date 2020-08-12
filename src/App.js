import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <div>
        <HomePage />
      </div>
    </Router>
  );
}

export default App;
