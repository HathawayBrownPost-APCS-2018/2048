//some more functions that we use
var path = "tiles/"
var curRow, curCol;
var board = [];
//var gameRunning;
var changed;
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

function newTile(){
  if(changed==true){
    do{
     curRow = Math.floor(Math.random() *4); 
     curCol = Math.floor(Math.random() *4);
    }while(!isEmpty(curRow,curCol))
    board[curRow][curCol] =2;
  }
}

function startGame () {
  initialize();
  changed=true;
  //gameRunning = true;
  newTile();
  newTile();
  fillTable();
}

function moveLeft () {
  if (curCol > 0)
    curCol = curCol - 1;
}

function getTile(n){
  switch(n){
    case 0: return "blank.png";
    case 2: return "tile_2.png";
    case 4: return "tile_4.png";
    case 8: return "tile_8.png";
    case 16: return "tile_16.png";
    case 32: return "tile_32.png";
    case 64: return "tile_64.png";
    case 128: return "tile_128.png";
    case 256: return "tile_256.png";
    case 512: return "tile_512.png";
    case 1024: return "tile_1024.png";
    case 2048: return "tile_2048.png";
  }
}

function fillTable(){
  var str= "<table>"
  for(var row=0; row<4;row++){
    str += "<tr>";
    for(var col=0; col<4; col++){
      str += "<td><img src=\"" + path + getTile( board[row][col]) + "\"></td>";
    
    }
    str += "</tr>"
  }
  str += "</table>";
  document.getElementById("theTable").innerHTML = str;
}

function checkDone(){
  checkLose();
  checkWin();
}

function checkWin(){

}

function checkLose(){
  if((changed=true)&&(checkFull()=true)&&(checkMovePossible()=false)){
    return true;
    //alert(You Lose);
  }
  return false;
}

function checkFull(){
  for(var r=0;r<4;r++){
    for(var c=0;c<4;c++){
      if(board[r][c]==0){
        return false;
      }
    }
  }
  return true;
}

function checkMovePossible(){
  for(var row=0;row<4;row++){
    for(var col=0;col<4;col++){
      if(board[row][col]==board[row][col-1]||board[row][col]==board[row-1][col]||board[row][col]==board[row][col+1]||board[row][col]==board[row+1][col]){
        return true;
      }
    }
  }
  return false;
}
