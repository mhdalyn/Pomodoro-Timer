import React from "react";
import "./App.css";
import Pomodoro from "./pomodoro/Pomodoro";
import header from "./img/pomodorotimer.png"

function App() {
  return (
    <div className="App">
      <header className="App-header container">
        <img src={header} alt="Pomodoro timer" />
      </header>
      <div className="container">
        <Pomodoro />
      </div>
    </div>
  );
}

export default App;
