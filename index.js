var player1 = Math.floor(Math.random()*6)+1;
var diceImage = "./images/dice" + player1 + ".png";
document.querySelector(".img1").setAttribute("src",diceImage);


var player2 = Math.floor(Math.random()*6)+1;
var diceImage = "./images/dice" + player2 + ".png";
document.querySelector(".img2").setAttribute("src",diceImage);


if(player1 == player2){
    document.querySelector("h1").textContent="It's a Draw!!";
}
else if(player1 > player2){
    document.querySelector("h1").textContent="Player 1 Wins!";
}
else{
    document.querySelector("h1").textContent="Player 2 Wins!";
}