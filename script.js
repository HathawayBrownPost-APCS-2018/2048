var curRow, curCol;

function initialize() {
  document.getElementById("demo").innerHTML = "Initialize completed."
}

function startGame () {
  curRow = Math.floor(Math.random() *4);
  curCol = Math.floor(Math.random() *4);
}


function moveLeft () {
  if (curCol > 0)
    curCol = curCol - 1;
}
