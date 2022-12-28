import { CardProps } from "./types";

class Deck {
    cards: CardProps[];
  
    shuffleArray = (array: CardProps[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
  
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp
      }
  
      return array
    }
  
    constructor() {
      this.cards = [];
  
      const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  
      const suits = ['♠️', '♥️', '♦️', '♣️'];
  
      for (const suit of suits) {
        for (const rank of ranks) {
          this.cards.push({ rank, suit })
        }
      }
      this.shuffleArray(this.cards)
    }
}

export default Deck