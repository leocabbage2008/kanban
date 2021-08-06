import "./App.css";
import Grid from "./components/Grid";
import React from "react";

function App() {
  return (
    <div className="App">
      <Grid content={["Bob", "Joe", "Jane", "Lacey"]} />
    </div>
  );
}

export default App;
