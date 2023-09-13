class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) {
      return undefined;
    }

    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    };

    return shuffleArray(this.cards);
  }

  checkIfPair(card1, card2) {
    // ... write your code here

    this.pairsClicked += 1;

    if (card1 === card2) {
      this.pairsGuessed += 1;
    }

    return card1 === card2;
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === 0 || this.pairsGuessed < this.cards.length / 2) {
      return false;
    } else {
      return true;
    }
  }
}
