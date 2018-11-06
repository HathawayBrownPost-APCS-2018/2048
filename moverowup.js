function moveRowUp(col){
  //consolidate to the top
for(var i = 1; i <= 3; i++){
  var pos = i;
  while((pos <= 3) && (board[pos][col]==0)){
    pos++;
  }
  if((pos < 4) && (pos != i)){
    board[i][col] = board[pos][col];
    board[pos][col] = 0;
  }
}
////////////////////////

//check for matching values
for(var i = 0; i < 3; i++){
  if(board[i][col]==board[i+1][col]){
    board[i][col]=board[i][col]*2;
    board[i+1][col]=0;
  }
}
  //consolidate to the right
for(var i = 1; i <= 3; i++){
  var pos = i 
  while((pos <= 3)&&(board[pos][col]==0)){
    pos++;
  }
  if((pos < 4)&&(pos!=i)){
    board[i][col]=board[pos][col];
    board[pos][col]=0;
  }
}
}
function moveUp(){
  for (var col = 0; col < 4; col++){
    moveRowUp(col);
  }
  newTile();
  fillTable();
}
