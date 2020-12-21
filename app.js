const boardSquares = document.querySelectorAll('.square');
const gameMessage = document.querySelector('.game-message');
let turnCount = 1;
const xTurns = [];
const oTurns = [];
let gameOver = false;

function checkForWin(player, playerMoves) {
  if (
    ['tl', 'tm', 'tr'].every(square => playerMoves.includes(square)) || 
    ['ml', 'mm', 'mr'].every(square => playerMoves.includes(square)) ||
    ['bl', 'bm', 'br'].every(square => playerMoves.includes(square)) ||

    ['tl', 'ml', 'bl'].every(square => playerMoves.includes(square)) ||
    ['tm', 'mm', 'bm'].every(square => playerMoves.includes(square)) ||
    ['tr', 'mr', 'br'].every(square => playerMoves.includes(square)) ||

    ['tl', 'mm', 'br'].every(square => playerMoves.includes(square)) ||
    ['tr', 'mm', 'bl'].every(square => playerMoves.includes(square))
  ) {
    gameMessage.innerText = `${player} Wins!`
    gameOver = true;
  }
}

function takeTurn (square) {
  console.log('turnCount', turnCount);
  if (turnCount % 2 !== 0) {
    gameMessage.innerText = "It's O's Turn";
    square.classList.add('xMove')
    xTurns.push(square.id);
    checkForWin('X', xTurns);
  } else {
    gameMessage.innerText = "It's X's Turn";
    square.classList.add('oMove')
    oTurns.push(square.id);
    checkForWin('O', oTurns);
  }
  turnCount++;
}

document.addEventListener('DOMContentLoaded', () => {
  boardSquares.forEach(square => {
    square.addEventListener('click', e => {
      console.log(e.target);
      takeTurn(e.target);
    });
  });
});