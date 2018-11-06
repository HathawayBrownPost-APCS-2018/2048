function moveRowLeft(row){
  //consolidate to the left
for(var i=0;i<=3;i++){
  var pos = i 
  while((pos <= 3)&&(board[row][pos]==0)){
    pos++;
  }
  if((pos<4)&&(pos!=i)){
    board[row][i]=board[row][pos];
    board[row][pos]=0;
  }
}
//check for matching values
for(var i=0;i<=3;i++){
  if(board[row][i]==board[row][i+1]){
    board[row][i]=board[row][i]*2;
    board[row][i+1]=0;
  }
}
  //consolidate to the left
for(var i=0;i<=3;i++){
  var pos = i 
  while((pos <= 3)&&(board[row][pos]==0)){
    pos++;
  }
  if((pos<4)&&(pos!=i)){
    board[row][i]=board[row][pos];
    board[row][pos]=0;
  }
}
}
function moveLeft(){
  for (var row=0; row<4; row++){
    moveRowLeft(row);
  }
  newTile();
  fillTable();
}
