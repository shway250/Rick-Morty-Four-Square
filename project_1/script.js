document.addEventListener('DOMContentLoaded', function(){

var playerOne = 1;

var playCircles = $('.playCircle');


///////////////////////////Row Variables///////////////
var row1 = $('div.row1');
var row2 = $('div.row2');
var row3 = $('div.row3');
var row4 = $('div.row4');
var row5 = $('div.row5');
var row6 = $('div.row6');

var gameBoardArray = [row1, row2, row3, row4, row5, row6];


playCircles.click(function(event){
  if(playerOne){
    event.target.style.backgroundColor = 'red';
   checkWinner(gameBoardArray);
   announceWinner();
   playerOne= playerOne - 1;
  }else{
    event.target.style.backgroundColor = 'yellow';
   checkWinner(gameBoardArray);
   announceWinner();
   playerOne= playerOne + 1;
  }
});

function checkWinner(checker){
  /////Checks rows for winner
  for(var i = 0; i < 6; i++){
    for(var j = 0; j < 4; j++){
      if(gameBoardArray[i][0].children[j].style.backgroundColor == "red" &&
        gameBoardArray[i][0].children[j+1].style.backgroundColor == "red" &&
        gameBoardArray[i][0].children[j+2].style.backgroundColor == "red" &&
        gameBoardArray[i][0].children[j+3].style.backgroundColor == "red"){
        console.log('function works');
      return true;
      }
    }
  }
  for(var i = 0; i < 6; i++){
    for(var j = 0; j < 4; j++){
      if(gameBoardArray[i][0].children[j].style.backgroundColor == "yellow" &&
        gameBoardArray[i][0].children[j+1].style.backgroundColor == "yellow" &&
        gameBoardArray[i][0].children[j+2].style.backgroundColor == "yellow" &&
        gameBoardArray[i][0].children[j+3].style.backgroundColor == "yellow"){
        console.log('function works');
      return true;
      }
    }
  }
}

function announceWinner(){
  if(playerOne == true && checkWinner() == true){
    console.log('player one wins');
  }else if(playerOne == false && checkWinner() == true){
    console.log('player two wins')
  }
}


});