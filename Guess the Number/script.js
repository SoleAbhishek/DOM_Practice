let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('.guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');
const lowOrHigh = document.querySelector('.lowOrHi');
const p = document.createElement('p');
let playGame = true;
let prevGuess = [];
let numGuess = 0;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter a Valid Number');
  } else if (guess > 99) {
    alert('Please enter a number less than 100');
  } else if (guess < 1) {
    alert('Please enter a number greater than 0');
  } else {
    prevGuess.push(guess);
    if (numGuess === 9) {
      displayGuess(guess);
      displayMessage(`Game Over! The Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Congrats! You guessed the number correctly`);
    endGame();
  } else if (guess > randomNumber) {
    displayMessage(`Guessed Number is Higher`);
  } else if (guess < randomNumber) {
    displayMessage(`Guessed Number is Lower`);
  }
}
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} , `;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`;
}
function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id ='newGame'>Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGame = document.querySelector('#newGame');
  newGame.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    guessSlot.innerHTML = '';
    prevGuess = [];
    numGuess = 0;
    remaining.innerHTML = `${10 - numGuess}`;
    startOver.removeChild(p);
    userInput.removeAttribute('disabled');
    playGame = true;
  });
}
