import React, { useState, useEffect } from 'react';
import './App.css';
import { deck } from './data/deck';
import { Field } from './Field';
import Controls from './Controls';

function App() {
  const [currentDeckState, setCurrentDeck] = useState(deck);
  const [dealerHandState, setDealerHand] = useState({ cards: [], score: 0 });
  const [playerHandState, setPlayerHand] = useState({ cards: [], score: 0 });

  const drawNewCard = (faceDown = false) => {
    const drawnCard = grabCard();
    return { card: drawnCard, faceDown: faceDown };
  };

  const hitMe = playerName => {
    const newCard = drawNewCard();
    switch (playerName) {
      case 'dealer':
        setDealerHand({
          ...dealerHandState,
          cards: [...dealerHandState.cards, newCard],
          score: dealerHandState.score + newCard.card.value
        });
        break;
      case 'player':
        setPlayerHand({
          ...dealerHandState,
          cards: [...playerHandState.cards, newCard],
          score: playerHandState.score + newCard.card.value
        });
        break;
      default:
        console.error('Incorrect player given.');
        break;
    }
  };

  const grabCard = () => {
    const cardIndex = Math.floor(Math.random() * currentDeckState.length);
    const drawnCard = currentDeckState[cardIndex];
    const tempDeck = [...currentDeckState];
    tempDeck.splice(cardIndex, 1);
    setCurrentDeck(tempDeck);

    return drawnCard;
  };

  const startGame = () => {
    const dealerCards = [drawNewCard(true), drawNewCard()];
    const dealerCardScore = dealerCards.reduce(
      (acc, currCard) => acc + currCard.card.value,
      0
    );
    const playerCards = [drawNewCard(true), drawNewCard()];
    const playerCardScore = playerCards.reduce((acc, currCard) => {
      return acc + currCard.card.value;
    }, 0);

    setDealerHand({
      cards: dealerCards,
      score: dealerCardScore
    });
    setPlayerHand({ cards: playerCards, score: playerCardScore });
  };

  const passTurn = () => {
    console.log('nice');
  };

  useEffect(() => {
    const playerScore = playerHandState.score;

    if (playerScore === 21) {
      alert('dealer turn');
    }

    if (playerScore > 21) {
      alert('bust');
    }
  }, [dealerHandState, playerHandState]);

  return (
    <div className="app">
      <h1>BlackJack</h1>

      <Field fieldName="Dealer" fieldHand={dealerHandState} />
      <Field fieldName="Player" fieldHand={playerHandState} />
      <Controls
        onStart={() => startGame()}
        onHit={() => hitMe('player')}
        onStand={() => passTurn()}
      />
    </div>
  );
}

// Add tests
// Refactor code (custom hooks, cleaner code, etc)
// Restock when cards are low
// Ability to Add more decks (1 - 4)
// Controls based on state of game
// End game conditions
// Use effect to calc scores or should we calculate scores somewhere else? (Would want to split score from object useEffect route)

export default App;
