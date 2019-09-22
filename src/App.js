import React from "react";
import "./App.css";
import { deck } from "./data/deck";
import { Field } from "./Field";

function App() {
  return (
    <div className="app">
      <h1>BlackJack</h1>
      {/* Nav
      Playing field
      Player controls */}
      <Field fieldName="Dealer" fieldHand={[deck[1], deck[15]]} />
      <Field fieldName="Player" fieldHand={[deck[10], deck[5]]} />
    </div>
  );
}

export default App;
