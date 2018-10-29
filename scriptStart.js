var curRow, curCol;
var board = [];

function initialize() {
  for (var row = 0; row < 4; row++) {
    board[row] = [0, 0, 0, 0];
  }
}

function isEmpty(row,col){
  if(board[row][col] == 0){
    return true;
  }else{
    return false;
  }
}


function startGame () {
  initialize();
  curRow = Math.floor(Math.random() *4);
  curCol = Math.floor(Math.random() *4);
  board[curRow][curCol] =2;
  while(!isEmpty(curRow,curCol)){
    curRow = Math.floor(Math.random() *4); 
    curCol = Math.floor(Math.random() *4);
  }
  board[curRow][curCol] =2;
  fillTable();
}
function moveLeft () {
  if (curCol > 0)
    curCol = curCol - 1;
}
function fillTable(){
  var str= "<table>"
  for(var row=0; row<4;row++){
    str += "<tr>";
    for(var col=0; col<4; col++){
      str += "<td>" + board[row][col]+"</td>";
    }
    str += "</tr>"
  }
  str += "</table>";
  document.getElementById("theTable").innerHTML = str;
}
