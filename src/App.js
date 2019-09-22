import React, { useState } from 'react';
import './App.css';
import { deck } from './data/deck';
import Card from './Card';

function App() {
  const [deckList, setDeck] = useState(deck);
  return (
    <div className="app">
      <h1>BlackJack</h1>
      {/* Nav
      Playing field
      Player controls */}
      {deckList.map(({id, name, value, suite}) => (

       <Card key={id}
        name={name}
        suite={suite}
        value={value}/>

      ))}
    </div>
  );
}

export default App;
