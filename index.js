
var dicetype1="A";
var dicetype2="A";

document.addEventListener("keypress", (event) => {
  var name = event.key;
  if (name === 'R' || name === 'r') {
rollDice();
  }
}, false); // function that adds a keypress Event Listener and calls rollDice() function if 'r' or 'R' is pressed

function rollDice(){
  
var randomNr1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomDice ="images/dice"+dicetype1+"/dice" + randomNr1 + dicetype1+".png";//images/diceA/dice1A.png 

var image1 = document.querySelectorAll("img")[0]; //uses img attribute to find first die image i html document
image1.setAttribute("src", randomDice);


var randomNr2 = Math.floor(Math.random() * 6) + 1;
var randomDice2 = "images/dice" + dicetype2+"/dice" +randomNr2 + dicetype2+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDice2);


if (randomNr1 > randomNr2) {//If player 1 wins
  document.querySelector(".wintext").innerHTML = " Play 1 Wins! " + '<i class="fa-solid fa-medal"></i>';
}
else if (randomNr2 > randomNr1) { //If player 2 wins
  document.querySelector(".wintext").innerHTML = "Player 2 Wins! "+ '<i class="fa-solid fa-medal"></i>';
}
else { //Draw
  document.querySelector(".wintext").innerHTML = "Draw!"+ '<i class="fa-solid fa-scale-balanced"></i>';
}
}

function backgroundChange(option){
  switch(option){
    case 1:
      document.querySelector(".maincontainer").style.background= 'linear-gradient(to right, #C06C84, #6C5B7B, #355C7D)';
      document.querySelectorAll(".playertext")[0].style.color=' #cca64e';   
      document.querySelectorAll(".playertext")[1].style.color=' #cca64e';  
      document.querySelector(".versus").style.color=' #cca64e';  
      break;

     case 2:
      //background: #3E5151;  /* fallback for old browsers */
//ckground: -webkit-linear-gradient(to right, #DECBA4, #3E5151);  /* Chrome 10-25, Safari 5.1-6 */
document.querySelector(".maincontainer").style.background='linear-gradient(to right, #DECBA4, #3E5151)'; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
document.querySelectorAll(".playertext")[0].style.color=' white';   
      document.querySelectorAll(".playertext")[1].style.color=' white';  
      document.querySelector(".versus").style.color=' white';  
      break;

     case 3:
      document.querySelector(".maincontainer").style.background='#F8F2DC'; //original color
      document.querySelectorAll(".playertext")[0].style.color=' #cca64e';   
      document.querySelectorAll(".playertext")[1].style.color='#cca64e';   
      document.querySelector(".versus").style.color=' #cca64e';   
     break;

     case 4:
      document.querySelector(".maincontainer").style.background='url("images/background-board.jpg")';
      document.querySelectorAll(".playertext")[0].style.color='white';   
      document.querySelectorAll(".playertext")[1].style.color='white';   
      document.querySelector(".versus").style.color=' white';   
     break;
    case 5:
      document.querySelector(".maincontainer").style.background='linear-gradient(to bottom, #E2E2E2, #C9D6FF)';
      document.querySelectorAll(".playertext")[0].style.color=' #cca64e';   
      document.querySelectorAll(".playertext")[1].style.color=' #cca64e';    
      document.querySelector(".versus").style.color=' #cca64e';  
     break;

    case 6:
      document.querySelector(".maincontainer").style.background='linear-gradient(to bottom, #2F80ED, #56CCF2)';
      document.querySelectorAll(".playertext")[0].style.color='white';  
      document.querySelectorAll(".playertext")[1].style.color='white';  
      document.querySelector(".versus").style.color=' white';   
     break; 
  }
}

function diceChange(option,dicenr){
  switch(option){
    case 1:
      if(dicenr===1){dicetype1="A";       document.querySelectorAll(".diceimg")[0].setAttribute("src", "images/diceA/dice6A.png");} 
      else { dicetype2="A";       document.querySelectorAll(".diceimg")[1].setAttribute("src", "images/diceA/dice6A.png");}

      break;

     case 2:
         if(dicenr===1){dicetype1="B";     document.querySelectorAll(".diceimg")[0].setAttribute("src", "images/diceB/dice6B.png");} 
         else {dicetype2="B";        document.querySelectorAll(".diceimg")[1].setAttribute("src", "images/diceB/dice6B.png"); }
     break;

     case 3:
      if(dicenr===1){dicetype1="C";       document.querySelectorAll(".diceimg")[0].src="images/diceC/dice6C.png";} 
      else {dicetype2="C";       document.querySelectorAll(".diceimg")[1].src="images/diceC/dice6C.png";}
     break;

     case 4:
      if(dicenr===1){dicetype1="D";       document.querySelectorAll(".diceimg")[0].src="images/diceD/dice6D.png";} 
      else {dicetype2="D";      document.querySelectorAll(".diceimg")[1].src="images/diceD/dice6D.png";}
       break;
            
    case 5:
      if(dicenr===1){dicetype1="E";       document.querySelectorAll(".diceimg")[0].src="images/diceE/dice6E.png";} 
      else{dicetype2="E";       document.querySelectorAll(".diceimg")[1].src="images/diceE/dice6E.png";}
     break;

    case 6:
      if(dicenr===1){dicetype1="F";       document.querySelectorAll(".diceimg")[0].src="images/diceF/dice6F.png";}
       else {dicetype2="F";      document.querySelectorAll(".diceimg")[1].src="images/diceF/dice6F.png";}  
     break; 
  }
}

