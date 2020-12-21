const boardSquares = document.querySelectorAll('.square');
let count = 0;
const xMoves = [];
const yMoves = [];

document.addEventListener('DOMContentLoaded', () => {
  boardSquares.forEach(square => {
    square.addEventListener('click', e => {
      console.log(e.target);
    })
  })
})