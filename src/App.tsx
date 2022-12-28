import React, { useState } from 'react';
import './App.css';
import './components/Card.css'
import './components/Button.css'

import Deck from './Deck';
import Card from './components/Card';
import Button from './components/Button';
import { CardProps } from './types';



const App = () => {
  const [deck, setDeck] = useState(new Deck())
  const [currentCard, setCurrentCard] = useState<CardProps>({ rank: 'A', suit:'♣️'})


  const handleClick = () => {
    console.log(deck, currentCard)
    
      const card = deck.cards.pop()
      if (card) {
        setCurrentCard(card)
      } else {
        console.log("Deck is empty")
      }

    //const newCard: CardProps = deck.pop()
    //setCurrentCard(newCard)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        Card Generator
      </header>
      <h3 className='App-h3'>
        Cards left in the deck: {deck.cards.length}
      </h3>
      <Card {...currentCard}/>
      <Button onClick={handleClick}>Generate a new card</Button>
    </div>
  )
};


export default App
