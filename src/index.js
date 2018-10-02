'use strict';

class MTG {
  constructor() {
    this.gameState = {
      player1: {
        deck: [],
        graveyard: [],
        battlefield: [],
        life: 20, 
        hand: []
      },
      player2: {
        deck: [],
        graveyard: [],
        battlefield: [],
        life: 20, 
        hand: []
      }
    };

    this.gameTranscript = [];
  }

  createDeck(deck, player) {
    this.gameState[player].deck = deck;
  }

  changeLife(type, amount, player) {
    if (type === 'add') {
      this.gameState[player].life = this.gameState[player].life + amount;
    }
    else if (type === 'subtract') {
      this.gameState[player].life = this.gameState[player].life - amount;
    }
  }

  draw(amount, player) {
    for (let i = 0; i < amount; i++) {
      this.hand.push(this.gameState[player].deck.pop());
    }
  }

  shuffle(deck) {
    return deck.map(() => Math.floor(Math.random() * deck.length));
  }

  turn(player) {
    // untap lands and creatures
    for (let card of this.gameState[player].battlefield) {
      if (card.tapped && !tappedPerm) {
        
      }
    }
    // draw a card
    // play a land, only one per turn
    // cast creatures, sorceries, instants
    // declare attackers
    // oponent declares blockers
    // combat damage is dealt
    // play a land if not played before
    // cast creatures, sorceries, instants
    // creatures heal
    // pass the turn to the oponent
  }

  main() {
    this.turn(player1);
  }
}

module.exports = MTG;