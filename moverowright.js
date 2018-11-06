function moveRowRight(row){
  //consolidate to the right
for(var i=3;i>=1;i--){
  var pos = i 
  while((pos >= 0)&&(board[row][pos]==0)){
    pos--;
  }
  if((pos>-1)&&(pos!=i)){
    board[row][i]=board[row][pos];
    board[row][pos]=0;
  }
}
//check for matching values
for(var i=3;i>=0;i--){
  if(board[row][i]==board[row][i-1]){
    board[row][i]=board[row][i]*2;
    board[row][i-1]=0;
  }
}
  //consolidate to the right
for(var i=3;i>=1;i--){
  var pos = i 
  while((pos >= 0)&&(board[row][pos]==0)){
    pos--;
  }
  if((pos>-1)&&(pos!=i)){
    board[row][i]=board[row][pos];
    board[row][pos]=0;
  }
}
}
function moveRight(){
  for (var row=0; row<4; row++){
    moveRowRight(row);
  }
  newTile();
  fillTable();
}
