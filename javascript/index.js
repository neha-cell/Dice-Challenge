function rollDice (){
  var randomNumber = Math.random();
  randomNumber = Math.floor((randomNumber*6)+1);
  return randomNumber;
}
function rollDiceSelector(){
  var randomNumber = rollDice();
  var src = "images/";
  if(randomNumber===1){
    src = src+"dice1.png";
  }
  if(randomNumber===2){
    src = src+"dice2.png";
  }
  if(randomNumber===3){
    src = src+"dice3.png";
  }
  if(randomNumber===4){
    src = src+"dice4.png";
  }
  if(randomNumber===5){
    src = src+"dice5.png";
  }if(randomNumber===6){
    src = src+"dice6.png";
  }
  return src;
}
function refresh(){
  var dice1 = rollDiceSelector();
  var dice2 = rollDiceSelector();
  if(dice1===dice2){
    document.querySelector("div h1").innerHTML = "Draw";
  }
  if(dice1>dice2){
    document.querySelector("div h1").innerHTML = "🚩Player1 Wins";
  }
  if(dice1<dice2){
    document.querySelector("div h1").innerHTML = "Player2 Wins🚩";
  }

  document.querySelector(".dice .img1").setAttribute("src",dice1);
  document.querySelector(".dice .img2").setAttribute("src",dice2);
}
