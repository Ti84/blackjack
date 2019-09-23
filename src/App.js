import React, { useState } from "react";
import "./App.css";
import { deck } from "./data/deck";
import { Field } from "./Field";
import Controls from "./Controls";

function App() {
  const [currentDeckState, setCurrentDeck] = useState(deck);
  const [dealerHandState, setDealerHand] = useState([]);
  const [playerHandState, setPlayerHand] = useState([]);
  const [playingState, setPlayingState] = useState(false);

  const drawNewCard = (faceDown = false) => {
      const drawnCard = grabCard();
      return { card: drawnCard, faceDown: faceDown };
  }

  const drawCard = (playerName) => {
   switch(playerName) {
    case 'dealer':
        setDealerHand([...dealerHandState, drawNewCard()]);
        break;
      case 'player':
        setPlayerHand([...playerHandState, drawNewCard()]);
        break;
        default:
          console.error('Incorrect player given.');
          break;
    }
  }

  const grabCard = () => {
    const cardIndex = Math.floor(Math.random() * currentDeckState.length);
    const drawnCard = currentDeckState[cardIndex];
    const tempDeck = [...currentDeckState];
    tempDeck.splice(cardIndex, 1);
    setCurrentDeck(tempDeck);

    return drawnCard;
  }

  const startGame = () => {
    setDealerHand([drawNewCard(true), drawNewCard()]);
    setPlayerHand([drawNewCard(), drawNewCard()]);
    setPlayingState(true);
  }

  const passTurn = () => {
    console.log('nice');
  }

  return (
    <div className="app">
      <h1>BlackJack</h1>
      {/* Nav
      Playing field
      Player controls */}
      <Field fieldName="Dealer" fieldHand={dealerHandState} />
      <Field fieldName="Player" fieldHand={playerHandState} />
      <Controls onStart={() => startGame()} onHit={() => drawCard('player')} onStand={() => passTurn()} />
    </div>
  );
}

export default App;
