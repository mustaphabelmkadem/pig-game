'use strict';

// Selecting elements
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const totalScore0 = document.querySelector('#score--0');
const totalScore1 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const section = document.querySelectorAll('section');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
let currentScoreP0, currentScoreP1;

// Staring conditions

const init = function () {
  currentScoreP0 = 0;
  currentScoreP1 = 0;
  currentScore0.textContent = 0;
  totalScore0.textContent = 0;
  currentScore1.textContent = 0;
  totalScore1.textContent = 0;
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  player1.classList.remove('player--winner');
  player0.classList.remove('player--winner');
  dice.classList.add('hidden');
};
init();

const switchUser = function () {
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

const playerWin = function () {
  for (let i = 0; i < section.length; i++) {
    if (!section[i].classList.contains('player--active')) {
      section[i].classList.add('player--winner');
    } else {
      section[i].classList.remove('player--active');
    }
  }
};

// Rooling dice functionnality
rollBtn.addEventListener('click', () => {
  // Generating random dice
  const randomDice = Math.trunc(Math.random() * 6) + 1;

  // Display dice
  dice.classList.remove('hidden');
  dice.src = `dice-${randomDice}.png`;

  const cumulScore = function () {
    for (let i = 0; i < section.length; i++) {
      if (
        section[i].classList.contains('player--0') &&
        section[i].classList.contains('player--active')
      ) {
        currentScore0.textContent = currentScoreP0 += randomDice;
      }
      if (
        section[i].classList.contains('player--1') &&
        section[i].classList.contains('player--active')
      ) {
        currentScore1.textContent = currentScoreP1 += randomDice;
      }
    }
  };

  if (randomDice !== 1) {
    // Add dice to current score
    cumulScore();
  } else {
    // swich to next player
    switchUser();

    currentScoreP0 = 0;
    currentScoreP1 = 0;

    currentScore0.textContent = currentScoreP0;
    currentScore1.textContent = currentScoreP1;
  }
});

// hold button event handler
holdBtn.addEventListener('click', () => {
  switchUser();
  let totalscore0 = 0;
  let totalscore1 = 0;
  totalscore0 += Number(currentScore0.textContent);
  totalscore1 += Number(currentScore1.textContent);
  let totalscorePlayer0 = Number(totalScore0.textContent);
  let totalscorePlayer1 = Number(totalScore1.textContent);
  totalScore0.textContent = totalscorePlayer0 += totalscore0;
  totalScore1.textContent = totalscorePlayer1 += totalscore1;
  currentScoreP0 = 0;
  currentScoreP1 = 0;
  currentScore0.textContent = currentScoreP0;
  currentScore1.textContent = currentScoreP1;
  if (totalscorePlayer0 >= 20 || totalscorePlayer1 >= 20) {
    playerWin();
    dice.classList.add('hidden');
  }
});

// new game button event handler
newBtn.addEventListener('click', init);
