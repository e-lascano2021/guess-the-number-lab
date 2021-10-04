console.log('Number Lab')

const game = {
  title: 'Guess the Number!',
  biggestNum: 5,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],

  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

  do {
  this.prevGuesses.push(this.getGuess())
  this.render()
  }while(this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum);
    },

  getGuess() {
    let guess= parseInt (
        prompt (`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`))
    while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum){
      guess = parseInt(
        prompt(`The number has to be between ${this.smallestNum} and ${this.biggestNum}. Try again.`)
      )
    }return guess
  },

  render(){
    if (this.prevGuesses[this.prevGuesses.length -1] > this.secretNum){
      alert (`Your guess is too high. Previous guesses ${this.prevGuesses.join()}`)
    }else if(this.prevGuesses[this.prevGuesses.length -1] < this.secretNum){
      alert (`Your guess is too low. Privious guess: ${this.prevGuesses.join()}`)
  }else {
    alert (`Congrats! You guessed the number in ${this.prevGuesses.length} tries!`)
  }
  } 
}

game.play()
