const boardSquares = document.querySelectorAll('.square');
const gameMessage = document.querySelector('.game-message');
const resetButton = document.querySelector('.reset');
let gameOver = false;
let turnCount = 1;
let xTurns = [];
let oTurns = [];

const winCombos = [
  ['tl', 'tm', 'tr'], 
  ['ml', 'mm', 'mr'],
  ['bl', 'bm', 'br'],

  ['tl', 'ml', 'bl'],
  ['tm', 'mm', 'bm'],
  ['tr', 'mr', 'br'],

  ['tl', 'mm', 'br'],
  ['tr', 'mm', 'bl']
];

function resetBoard() {
  boardSquares.forEach(square => {
    square.className = 'square';
    turnCount = 1;
    xTurns = [];
    oTurns = [];
    gameMessage.innerText = "It's X's Turn";
    gameOver = false;
  });
};

function checkForWin(player, playerMoves) {
  winCombos.forEach(combo => {
    if (combo.every(square => playerMoves.includes(square))) {
      combo.forEach(square => {
        document.getElementById(square).classList.add('win');
      })  
      gameMessage.innerText = `${player} Wins!`;
      gameOver = true;
    } else if (turnCount === 9) {
      gameMessage.innerText = "Cat's Game!";
      gameOver = true;
    }
  });
};

function takeTurn (square) {
  if (gameOver === false && !square.classList.contains('filled')) {
    if (turnCount % 2 !== 0) {
      gameMessage.innerText = "It's O's Turn";
      square.classList.add('xMove', 'filled');
      xTurns.push(square.id);
      checkForWin('X', xTurns);
    } else {
      gameMessage.innerText = "It's X's Turn";
      square.classList.add('oMove', 'filled');
      oTurns.push(square.id);
      checkForWin('O', oTurns);
    }
    turnCount++;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  boardSquares.forEach(square => {
    square.addEventListener('click', e => {
      takeTurn(e.target);
    });
  });
  resetButton.addEventListener('click', () => {
    resetBoard();
  });
});