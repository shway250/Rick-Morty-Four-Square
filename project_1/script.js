document.addEventListener('DOMContentLoaded', function(){

var playerOne = 1;
var playCircles = $('.playCircle');
var reset = $('#button');

///////////////////////////Row Variables///////////////
var row1 = $('div.row1');
var row2 = $('div.row2');
var row3 = $('div.row3');
var row4 = $('div.row4');
var row5 = $('div.row5');
var row6 = $('div.row6');
var gameBoardArray = [row1, row2, row3, row4, row5, row6];
 
reset.click(function(event){
  for(var i = 0; i < 6; i++){
    for(var j = 0; j< 7; j++){
      gameBoardArray[i][0].children[j].style.backgroundColor = 'rgb(0, 194, 214)';
    }
  }
  console.log('reset button clicked');
});

playCircles.click(function(event){

  ///////var parentGameBoard = $(event.target).parents();
  ///finding clicked div
  var clickedDiv = $(this);
  var indexClickedDiv = clickedDiv.index();
  ////Available play div variables
  var firstRowToken = $(gameBoardArray[0][0].children[indexClickedDiv]);
  var secondRowToken = $(gameBoardArray[1][0].children[indexClickedDiv]);
  var thirdRowToken = $(gameBoardArray[2][0].children[indexClickedDiv]);
  var fourthRowToken = $(gameBoardArray[3][0].children[indexClickedDiv]);
  var fifthRowToken = $(gameBoardArray[4][0].children[indexClickedDiv]);
  var sixthRowToken = $(gameBoardArray[5][0].children[indexClickedDiv]);

  if(playerOne){
    //getting this far
    if(sixthRowToken.css('background-color') == 'rgb(0, 194, 214)'){
      $(sixthRowToken.css('background-color', 'red'));
      checkWinner(gameBoardArray);
      announceWinner();
      playerOne= playerOne - 1;
    }
    else if(fifthRowToken.css('background-color') == 'rgb(0, 194, 214)'){
      $(fifthRowToken.css('background-color', 'red'));
      checkWinner(gameBoardArray);
      announceWinner();
      playerOne= playerOne - 1;
    }
    else if(fourthRowToken.css('background-color') == 'rgb(0, 194, 214)'){
      $(fourthRowToken.css('background-color', 'red'));
      checkWinner(gameBoardArray);
      announceWinner();
      playerOne= playerOne - 1;
    }
    else if(thirdRowToken.css('background-color') == 'rgb(0, 194, 214)'){
      $(thirdRowToken.css('background-color', 'red'));
      checkWinner(gameBoardArray);
      announceWinner();
      playerOne= playerOne - 1;
    }
    else if(secondRowToken.css('background-color') == 'rgb(0, 194, 214)'){
      $(secondRowToken.css('background-color', 'red'));
      checkWinner(gameBoardArray);
      announceWinner();
      playerOne= playerOne - 1;
    }
    else if(firstRowToken.css('background-color') == 'rgb(0, 194, 214)'){
      $(firstRowToken.css('background-color', 'red'));
      checkWinner(gameBoardArray);
      announceWinner();
      playerOne= playerOne - 1;
    }
  }
  /////////////======player two logic===========/////////////////
  else if (!playerOne){
    if(sixthRowToken.css('background-color') == 'rgb(0, 194, 214)'){
      $(sixthRowToken.css('background-color', 'yellow'));
      checkWinner(gameBoardArray);
      announceWinner();
      playerOne= playerOne + 1;
    }
    else if(fifthRowToken.css('background-color') == 'rgb(0, 194, 214)'){
      $(fifthRowToken.css('background-color', 'yellow'));
      checkWinner(gameBoardArray);
      announceWinner();
      playerOne= playerOne + 1;
    }
    else if(fourthRowToken.css('background-color') == 'rgb(0, 194, 214)'){
      $(fourthRowToken.css('background-color', 'yellow'));
      checkWinner(gameBoardArray);
      announceWinner();
      playerOne= playerOne + 1;
    }
    else if(thirdRowToken.css('background-color') == 'rgb(0, 194, 214)'){
      $(thirdRowToken.css('background-color', 'yellow'));
      checkWinner(gameBoardArray);
      announceWinner();
      playerOne= playerOne + 1;
    }
    else if(secondRowToken.css('background-color') == 'rgb(0, 194, 214)'){
      $(secondRowToken.css('background-color', 'yellow'));
      checkWinner(gameBoardArray);
      announceWinner();
      playerOne= playerOne + 1;
    }
    else if(firstRowToken.css('background-color') == 'rgb(0, 194, 214)'){
      $(firstRowToken.css('background-color', 'yellow'));
      checkWinner(gameBoardArray);
      announceWinner();
      playerOne= playerOne + 1;
    }
  }
});

function checkWinner(checker){
  ///////////////Checks rows for winner
  for(var i = 0; i < 6; i++){
    for(var j = 0; j < 4; j++){
      if(gameBoardArray[i][0].children[j].style.backgroundColor == "red" &&
        gameBoardArray[i][0].children[j+1].style.backgroundColor == "red" &&
        gameBoardArray[i][0].children[j+2].style.backgroundColor == "red" &&
        gameBoardArray[i][0].children[j+3].style.backgroundColor == "red"){
        console.log('red wins');
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
        console.log('yellow wins');
      return true;
      }
    }
  }
  //////////////Check Columns for winner
  for(var i = 0; i < 3; i++){
    for(var j = 0; j< 7; j++){
      if(gameBoardArray[i][0].children[j].style.backgroundColor == "red" &&
        gameBoardArray[i+1][0].children[j].style.backgroundColor == "red" &&
        gameBoardArray[i+2][0].children[j].style.backgroundColor == "red" &&
        gameBoardArray[i+3][0].children[j].style.backgroundColor == "red"){
        console.log('red wins')
      }
    }
  }
  for(var i = 0; i < 3; i++){
    for(var j = 0; j< 7; j++){
      if(gameBoardArray[i][0].children[j].style.backgroundColor == "yellow" &&
        gameBoardArray[i+1][0].children[j].style.backgroundColor == "yellow" &&
        gameBoardArray[i+2][0].children[j].style.backgroundColor == "yellow" &&
        gameBoardArray[i+3][0].children[j].style.backgroundColor == "yellow"){
        console.log('yellow wins')
      }
    }
  }
  ////////////////Checking down right for winner
for(var i = 0; i < 3; i++){
    for(var j = 0; j< 4; j++){
      if(gameBoardArray[i][0].children[j].style.backgroundColor == "red" &&
        gameBoardArray[i+1][0].children[j+1].style.backgroundColor == "red" &&
        gameBoardArray[i+2][0].children[j+2].style.backgroundColor == "red" &&
        gameBoardArray[i+3][0].children[j+3].style.backgroundColor == "red"){
        console.log('red wins')
      }
    }
  }
  for(var i = 0; i < 3; i++){
    for(var j = 0; j< 4; j++){
      if(gameBoardArray[i][0].children[j].style.backgroundColor == "yellow" &&
        gameBoardArray[i+1][0].children[j+1].style.backgroundColor == "yellow" &&
        gameBoardArray[i+2][0].children[j+2].style.backgroundColor == "yellow" &&
        gameBoardArray[i+3][0].children[j+3].style.backgroundColor == "yellow"){
        console.log('yellow wins')
      }
    }
  }
  ///////////////////////checking down left for winner
  for(var i = 3; i < 6; i++){
    for(var j = 0; j< 4; j++){
      if(gameBoardArray[i][0].children[j].style.backgroundColor == "red" &&
        gameBoardArray[i-1][0].children[j+1].style.backgroundColor == "red" &&
        gameBoardArray[i-2][0].children[j+2].style.backgroundColor == "red" &&
        gameBoardArray[i-3][0].children[j+3].style.backgroundColor == "red"){
        console.log('red wins')
      }
    }
  }
  for(var i = 3; i < 6; i++){
    for(var j = 0; j< 4; j++){
      if(gameBoardArray[i][0].children[j].style.backgroundColor == "yellow" &&
        gameBoardArray[i-1][0].children[j+1].style.backgroundColor == "yellow" &&
        gameBoardArray[i-2][0].children[j+2].style.backgroundColor == "yellow" &&
        gameBoardArray[i-3][0].children[j+3].style.backgroundColor == "yellow"){
        console.log('yellow wins')
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