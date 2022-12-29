import React, { useState } from 'react';
import './App.css';

import Deck from './Deck';
import Card from './components/Card';
import Button from './components/Button';
import Footer from './components/Footer';
import { CardProps } from './types';


const App = () => {
  // eslint-disable-next-line
  const [deck, setDeck] = useState(new Deck())
  const [currentCard, setCurrentCard] = useState<CardProps>({ rank: 'A', suit:'♣️'})


  const handleClick = () => {
      const card = deck.cards.pop()
      if (card) {
        setCurrentCard(card)
      } else {
        console.log("Deck is empty")
      }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        Card Generator
      </header>
      <h3 className='App-h3'>
        Cards left in the deck: {deck.cards.length}
      </h3>
      <hr></hr>
      <Card {...currentCard}/>
      <Button onClick={handleClick}>Generate a new card</Button>
      <Footer ></Footer>
    </div>
  )
};


export default App
