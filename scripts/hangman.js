class Hangman{
  constructor(word, guesses){
    this.word = word.toLowerCase().split('');
    this.guesses = guesses;
    this.guessedLetters = [];
    this.status = 'playing';
  }

  calculateStatus(){
    let finished = this.word.every(letter => this.guessedLetters.includes(letter) || letter === ' ');
  
    if(this.guesses === 0){
      this.status = 'failed';
    }else if(finished){
      this.status = 'finished';
    }else{
      this.status = 'playing';
    }
  }

  get statusMessage(){
    if(this.status === 'playing'){
      return `${game1.guesses} guesses left.`;
    }else if(this.status === 'failed'){
      return `Nice try! The word was "${this.word.join('')}". Press reset.`;
    }else{
      return `Great job, you guessed the right word! Press reset.`;
    }
  }

  get puzzle(){
    let puzzle = '';
    this.word.forEach(letter => {
      if(this.guessedLetters.includes(letter) || letter === ' '){
        puzzle += letter;
      }else{
        puzzle += '*';
      }
    });
    return puzzle;
  }

  makeGuess(guess){
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const badLetter = !this.word.includes(guess);
  
    if(this.status != 'playing'){
      return
    }
  
    if(isUnique){
      this.guessedLetters.push(guess);
    }
  
    if(isUnique && badLetter){
      this.guesses --;
    }
  
    this.calculateStatus();
  }
}