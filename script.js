'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

//const score = document.querySelector('.score').value;
//console.log(score);  wont work
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// for check btn
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number Entered😒'; // to change text of message
    displayMessage('No Number Entered😒');
  }
  //when guess is wrong
  else if (secretNumber !== guess) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too high' : '📉Too low');
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈Too high' : '📉Too low';
      score--;
      document.querySelector('.score').textContent = score; //to set score
    } else {
      displayMessage('💥You Lost the Game');
      document.querySelector('.score').textContent = 0;
    }
  }
  //when player wins
  else if (secretNumber === guess) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉Correct Number!!');
    document.querySelector('body').style.backgroundColor = '#60b347'; //to change background color of body element
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.highscore').value = 0;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
