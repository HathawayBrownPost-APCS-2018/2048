var curRow, curCol;
var board = [];

function initialize() {
  document.getElementById("demo").innerHTML = "Initialize completed."
  for (var row = 0; row < 4; row++) {
    board[row] = [0, 0, 0, 0];
  }
}

function startGame () {
  curRow = Math.floor(Math.random() *4);
  curCol = Math.floor(Math.random() *4);
}


function moveLeft () {
  if (curCol > 0)
    curCol = curCol - 1;
}
