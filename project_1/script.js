document.addEventListener('DOMContentLoaded', function(){

var playerOne = 1;
var playCircles = $('.playCircle');
var reset = $('#button');

///token variables
var morty = $('.morty');
var rick = $('.rick')

///////////////////////////Row Variables///////////////
var row1 = $('div.row1');
var row2 = $('div.row2');
var row3 = $('div.row3');
var row4 = $('div.row4');
var row5 = $('div.row5');
var row6 = $('div.row6');
var gameBoardArray = [row1, row2, row3, row4, row5, row6];

$('#instructions').click(function(){
  $('.meeseeks').show("slow");
  $('#instructions').hide("fast");
});
$('#mrMeeseeks').click(function(){
  $('.meeseeks').hide("slow");
  $('#instructions').show("fast");
});

 /////////======================Reset Function
reset.click(function(event){
  for(var i = 0; i < 6; i++){
    for(var j = 0; j< 7; j++){
      gameBoardArray[i][0].children[j].style.backgroundImage = 'none';
      gameBoardArray[i][0].children[j].style.backgroundColor = 'rgb(0, 194, 214)';
      gameBoardArray[i][0].children[j].style.border = '1px solid black';
    }
  }
  playerOne = 1;
  console.log('reset button clicked');
});

////////////////////////======================all play logic
playCircles.click(function(event){
  var clickedDiv = $(this);
  var indexClickedDiv = clickedDiv.index();
  ////Available play div variables
  var firstRowToken = $(gameBoardArray[0][0].children[indexClickedDiv]);
  var secondRowToken = $(gameBoardArray[1][0].children[indexClickedDiv]);
  var thirdRowToken = $(gameBoardArray[2][0].children[indexClickedDiv]);
  var fourthRowToken = $(gameBoardArray[3][0].children[indexClickedDiv]);
  var fifthRowToken = $(gameBoardArray[4][0].children[indexClickedDiv]);
  var sixthRowToken = $(gameBoardArray[5][0].children[indexClickedDiv]);
  var tokenArray = [firstRowToken, secondRowToken, thirdRowToken, fourthRowToken, fifthRowToken, sixthRowToken];

  if(playerOne){
    if(sixthRowToken.css('background-color') == 'rgb(0, 194, 214)'){
      var counter = 0;
      var myInterval = setInterval(function() {
        if(counter === tokenArray.length - 1) {
          clearInterval(myInterval);
        }
        if(counter !== 0) {
          tokenArray[counter-1].css('background', 'rgb(0, 194, 214)');
        }
        tokenArray[counter].css('background', 'url(images/Morty-token.jpg) no-repeat');
        tokenArray[counter].css('background-size', 'contain');
        counter++;
      }, 50);
      $(sixthRowToken.css('border', '1px solid rgb(0, 0, 1)'));
      checkWinner(gameBoardArray);
      announceWinner();
      playerOne= playerOne - 1;
    }
    else if(fifthRowToken.css('background-color') == 'rgb(0, 194, 214)'){
      var counter = 0;
      var myInterval = setInterval(function() {
        if(counter === tokenArray.length - 2) {
          clearInterval(myInterval);
        }
        if(counter !== 0) {
          tokenArray[counter-1].css('background', 'rgb(0, 194, 214)');
        }
        tokenArray[counter].css('background', 'url(images/Morty-token.jpg) no-repeat');
        tokenArray[counter].css('background-size', 'contain');
        counter++;
      }, 50);
      $(fifthRowToken.css('border', '1px solid rgb(0, 0, 1)'));
      checkWinner(gameBoardArray);
      announceWinner();
      playerOne= playerOne - 1;
    }
    else if(fourthRowToken.css('background-color') == 'rgb(0, 194, 214)'){
      var counter = 0;
      var myInterval = setInterval(function() {
        if(counter === tokenArray.length - 3) {
          clearInterval(myInterval);
        }
        if(counter !== 0) {
          tokenArray[counter-1].css('background', 'rgb(0, 194, 214)');
        }
        tokenArray[counter].css('background', 'url(images/Morty-token.jpg) no-repeat');
        tokenArray[counter].css('background-size', 'contain');
        counter++;
      }, 50);
      $(fourthRowToken.css('border', '1px solid rgb(0, 0, 1)'));
      checkWinner(gameBoardArray);
      announceWinner();
      playerOne= playerOne - 1;
    }
    else if(thirdRowToken.css('background-color') == 'rgb(0, 194, 214)'){
      var counter = 0;
      var myInterval = setInterval(function() {
        if(counter === tokenArray.length - 4) {
          clearInterval(myInterval);
        }
        if(counter !== 0) {
          tokenArray[counter-1].css('background', 'rgb(0, 194, 214)');
        }
        tokenArray[counter].css('background', 'url(images/Morty-token.jpg) no-repeat');
        tokenArray[counter].css('background-size', 'contain');
        counter++;
      }, 50);
      $(thirdRowToken.css('border', '1px solid rgb(0, 0, 1)'));
      checkWinner(gameBoardArray);
      announceWinner();
      playerOne= playerOne - 1;
    }
    else if(secondRowToken.css('background-color') == 'rgb(0, 194, 214)'){
      var counter = 0;
      var myInterval = setInterval(function() {
        if(counter === tokenArray.length - 5) {
          clearInterval(myInterval);
        }
        if(counter !== 0) {
          tokenArray[counter-1].css('background', 'rgb(0, 194, 214)');
        }
        tokenArray[counter].css('background', 'url(images/Morty-token.jpg) no-repeat');
        tokenArray[counter].css('background-size', 'contain');
        counter++;
      }, 50);
      $(secondRowToken.css('border', '1px solid rgb(0, 0, 1)'));
      checkWinner(gameBoardArray);
      announceWinner();
      playerOne= playerOne - 1;
    }
    else if(firstRowToken.css('background-color') == 'rgb(0, 194, 214)'){
      var counter = 0;
      var myInterval = setInterval(function() {
        if(counter === tokenArray.length - 6) {
          clearInterval(myInterval);
        }
        if(counter !== 0) {
          tokenArray[counter-1].css('background', 'rgb(0, 194, 214)');
        }
        tokenArray[counter].css('background', 'url(images/Morty-token.jpg) no-repeat');
        tokenArray[counter].css('background-size', 'contain');
        counter++;
      }, 50);
      $(firstRowToken.css('border', '1px solid rgb(0, 0, 1)'));
      checkWinner(gameBoardArray);
      announceWinner();
      playerOne= playerOne - 1;
    }
  }
  /////////////======player two logic===========//////////////////////////////////////////
  else if (!playerOne){
    if(sixthRowToken.css('background-color') == 'rgb(0, 194, 214)'){
      var counter = 0;
      var myInterval = setInterval(function() {
        if(counter === tokenArray.length - 1) {
          clearInterval(myInterval);
        }
        if(counter !== 0) {
          tokenArray[counter-1].css('background', 'rgb(0, 194, 214)');
        }
        tokenArray[counter].css('background', 'url(images/Rick-token.jpg) no-repeat');
        tokenArray[counter].css('background-size', 'contain');
        counter++;
      }, 50);
      $(sixthRowToken.css('border', '1px solid rgb(0, 1, 0)'));
      checkWinner(gameBoardArray);
      announceWinner();
      playerOne= playerOne + 1;
    }
    else if(fifthRowToken.css('background-color') == 'rgb(0, 194, 214)'){
      var counter = 0;
      var myInterval = setInterval(function() {
        if(counter === tokenArray.length - 2) {
          clearInterval(myInterval);
        }
        if(counter !== 0) {
          tokenArray[counter-1].css('background', 'rgb(0, 194, 214)');
        }
        tokenArray[counter].css('background', 'url(images/Rick-token.jpg) no-repeat');
        tokenArray[counter].css('background-size', 'contain');
        counter++;
      }, 50);
      $(fifthRowToken.css('border', '1px solid rgb(0, 1, 0)'));
      checkWinner(gameBoardArray);
      announceWinner();
      playerOne= playerOne + 1;
    }
    else if(fourthRowToken.css('background-color') == 'rgb(0, 194, 214)'){
      var counter = 0;
      var myInterval = setInterval(function() {
        if(counter === tokenArray.length - 3) {
          clearInterval(myInterval);
        }
        if(counter !== 0) {
          tokenArray[counter-1].css('background', 'rgb(0, 194, 214)');
        }
        tokenArray[counter].css('background', 'url(images/Rick-token.jpg) no-repeat');
        tokenArray[counter].css('background-size', 'contain');
        counter++;
      }, 50);
      $(fourthRowToken.css('border', '1px solid rgb(0, 1, 0)'));
      checkWinner(gameBoardArray);
      announceWinner();
      playerOne= playerOne + 1;
    }
    else if(thirdRowToken.css('background-color') == 'rgb(0, 194, 214)'){
      var counter = 0;
      var myInterval = setInterval(function() {
        if(counter === tokenArray.length - 4) {
          clearInterval(myInterval);
        }
        if(counter !== 0) {
          tokenArray[counter-1].css('background', 'rgb(0, 194, 214)');
        }
        tokenArray[counter].css('background', 'url(images/Rick-token.jpg) no-repeat');
        tokenArray[counter].css('background-size', 'contain');
        counter++;
      }, 50);
      $(thirdRowToken.css('border', '1px solid rgb(0, 1, 0)'));
      checkWinner(gameBoardArray);
      announceWinner();
      playerOne= playerOne + 1;
    }
    else if(secondRowToken.css('background-color') == 'rgb(0, 194, 214)'){
      var counter = 0;
      var myInterval = setInterval(function() {
        if(counter === tokenArray.length - 5) {
          clearInterval(myInterval);
        }
        if(counter !== 0) {
          tokenArray[counter-1].css('background', 'rgb(0, 194, 214)');
        }
        tokenArray[counter].css('background', 'url(images/Rick-token.jpg) no-repeat');
        tokenArray[counter].css('background-size', 'contain');
        counter++;
      }, 50);
      $(secondRowToken.css('border', '1px solid rgb(0, 1, 0)'));
      checkWinner(gameBoardArray);
      announceWinner();
      playerOne= playerOne + 1;
    }
    else if(firstRowToken.css('background-color') == 'rgb(0, 194, 214)'){
      var counter = 0;
      var myInterval = setInterval(function() {
        if(counter === tokenArray.length - 6) {
          clearInterval(myInterval);
        }
        if(counter !== 0) {
          tokenArray[counter-1].css('background', 'rgb(0, 194, 214)');
        }
        tokenArray[counter].css('background', 'url(images/Rick-token.jpg) no-repeat');
        tokenArray[counter].css('background-size', 'contain');
        counter++;
      }, 50);
      $(firstRowToken.css('border', '1px solid rgb(0, 1, 0)'));
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
      if(gameBoardArray[i][0].children[j].style.border == '1px solid rgb(0, 0, 1)' &&
        gameBoardArray[i][0].children[j+1].style.border == '1px solid rgb(0, 0, 1)' &&
        gameBoardArray[i][0].children[j+2].style.border == '1px solid rgb(0, 0, 1)' &&
        gameBoardArray[i][0].children[j+3].style.border == '1px solid rgb(0, 0, 1)'){
        console.log('red wins');
      return true;
      }
    }
  }
  for(var i = 0; i < 6; i++){
    for(var j = 0; j < 4; j++){
      if(gameBoardArray[i][0].children[j].style.border == "1px solid rgb(0, 1, 0)" &&
        gameBoardArray[i][0].children[j+1].style.border == "1px solid rgb(0, 1, 0)" &&
        gameBoardArray[i][0].children[j+2].style.border == "1px solid rgb(0, 1, 0)" &&
        gameBoardArray[i][0].children[j+3].style.border == "1px solid rgb(0, 1, 0)"){
        console.log('yellow wins');
      return true;
      }
    }
  }
  //////////////Check Columns for winner
  for(var i = 0; i < 3; i++){
    for(var j = 0; j< 7; j++){
      if(gameBoardArray[i][0].children[j].style.border == "1px solid rgb(0, 0, 1)" &&
        gameBoardArray[i+1][0].children[j].style.border == "1px solid rgb(0, 0, 1)" &&
        gameBoardArray[i+2][0].children[j].style.border == "1px solid rgb(0, 0, 1)" &&
        gameBoardArray[i+3][0].children[j].style.border == "1px solid rgb(0, 0, 1)"){
        console.log('red wins')
      return true;
      }
    }
  }
  for(var i = 0; i < 3; i++){
    for(var j = 0; j< 7; j++){
      if(gameBoardArray[i][0].children[j].style.border == "1px solid rgb(0, 1, 0)" &&
        gameBoardArray[i+1][0].children[j].style.border == "1px solid rgb(0, 1, 0)" &&
        gameBoardArray[i+2][0].children[j].style.border == "1px solid rgb(0, 1, 0)" &&
        gameBoardArray[i+3][0].children[j].style.border == "1px solid rgb(0, 1, 0)"){
        console.log('yellow wins')
      return true;
      }
    }
  }
  ////////////////Checking down right for winner
for(var i = 0; i < 3; i++){
    for(var j = 0; j< 4; j++){
      if(gameBoardArray[i][0].children[j].style.border == "1px solid rgb(0, 0, 1)" &&
        gameBoardArray[i+1][0].children[j+1].style.border == "1px solid rgb(0, 0, 1)" &&
        gameBoardArray[i+2][0].children[j+2].style.border == "1px solid rgb(0, 0, 1)" &&
        gameBoardArray[i+3][0].children[j+3].style.border == "1px solid rgb(0, 0, 1)"){
        console.log('red wins')
      return true;
      }
    }
  }
  for(var i = 0; i < 3; i++){
    for(var j = 0; j< 4; j++){
      if(gameBoardArray[i][0].children[j].style.border == "1px solid rgb(0, 1, 0)" &&
        gameBoardArray[i+1][0].children[j+1].style.border == "1px solid rgb(0, 1, 0)" &&
        gameBoardArray[i+2][0].children[j+2].style.border == "1px solid rgb(0, 1, 0)" &&
        gameBoardArray[i+3][0].children[j+3].style.border == "1px solid rgb(0, 1, 0)"){
        console.log('yellow wins')
      return true;
      }
    }
  }
  ///////////////////////checking down left for winner
  for(var i = 3; i < 6; i++){
    for(var j = 0; j< 4; j++){
      if(gameBoardArray[i][0].children[j].style.border == "1px solid rgb(0, 0, 1)" &&
        gameBoardArray[i-1][0].children[j+1].style.border == "1px solid rgb(0, 0, 1)" &&
        gameBoardArray[i-2][0].children[j+2].style.border == "1px solid rgb(0, 0, 1)" &&
        gameBoardArray[i-3][0].children[j+3].style.border == "1px solid rgb(0, 0, 1)"){
        console.log('red wins')
      return true;
      }
    }
  }
  for(var i = 3; i < 6; i++){
    for(var j = 0; j< 4; j++){
      if(gameBoardArray[i][0].children[j].style.border == "1px solid rgb(0, 1, 0)" &&
        gameBoardArray[i-1][0].children[j+1].style.border == "1px solid rgb(0, 1, 0)" &&
        gameBoardArray[i-2][0].children[j+2].style.border == "1px solid rgb(0, 1, 0)" &&
        gameBoardArray[i-3][0].children[j+3].style.border == "1px solid rgb(0, 1, 0)"){
        console.log('yellow wins')
      return true;
      }
    }
  }
}

function announceWinner(){
  if(playerOne == true && checkWinner() == true){
    setTimeout(function(){
    $('.container').remove();
    $('.meeseeks').remove();
    $('#instructions').remove();
    $('#winningMessage').html('OOOO WEEE! CONGRATS MOOOOOOOOORTY! CLICK ME TO RESET THE GAME!')
    /////reset game
    $('#button').click(function(){
    location.reload();
    });
    console.log('player one wins');
  }, 750);
  }
  else if(playerOne == false && checkWinner() == true){
    setTimeout(function(){
    $('.container').remove();
    $('.meeseeks').remove();
    $('#instructions').remove();
    $('#winningMessage').html('OOOO WEEE! GOOD JOB RIIIIIIIIICK! CLICK ME TO RESET THE GAME!')
    $('#button').click(function(){
    location.reload();
    });
    console.log('player two wins');
  }, 750);
  }
}













});