//working for player 1
var randomNum1 = Math.floor(Math.random()*6+1) ;
var randomImg1 = "dice" + randomNum1 + ".png" ;
var randomSrc1 = "images/" + randomImg1 ;
var img1 = document.querySelectorAll("img")[0] ;
img1.setAttribute("src",randomSrc1) ;

//working for player 2
var randomNum2 = Math.floor(Math.random()*6+1) ;
var randomSrc2 = "images/dice" + randomNum2 + ".png" ;
document.querySelectorAll("img")[1].setAttribute("src",randomSrc2) ;

//Displaying Results
if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "Player1 Wins! 🎉" ;
}
else if(randomNum1 < randomNum2){
    document.querySelector("h1").innerHTML = "Player2 Wins! 🎉" ;
}
else{
    document.querySelector("h1").innerHTML = "It's A Draw" ;
}
