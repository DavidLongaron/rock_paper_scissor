'use strict';


// You put 1 word into the programn
// and the programmn choose between 3 words and choose 1 at random as an answer.

//Calcula un numero entre 1 y 3
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//Numero random queda asignado
let computerResponse = getRandomInt(1, 3);


//Dependiendo del numero que quede asignado devuelve un valor.
function computerPlay(){
if(computerResponse===1){
    return  "rock";
}
else if(computerResponse===2){
    return "paper";
}
else {
    return "scissors"; 
}
}

function rockPapSci(player){
    let playerResult= player.toLowercase();
 let computerResult= computerPlay();
if(playerResult===computerResult){
    return alert("Draw, try again.")
}
else if (playerResult==="rock"&& computerResult==="paper" ){
    return alert("IA wins. Paper wins against rock")
}
else if (playerResult==="rock"&& computerResult==="scissors" ){
    return alert("Player wins. rock wins against scissors")
}
else if (playerResult==="scissors"&& computerResult==="paper" ){
    return alert("Players wins. scissors wins against paper")
}
else if (playerResult==="scissors"&& computerResult==="rock" ){
    return alert("IA wins. Rock wins against scissors")
}
else if (playerResult==="paper"&& computerResult==="scissors" ){
    return alert("IA wins. Paper loses against scissors")
}
else if (playerResult==="paper"&& computerResult==="rock" ){
    return alert("Player wins. Paper wins against rock")
}
}
// Poner el resultado del jugador

let playerChoice= promt("Rock, paper or scissors?")
rockPapSci(playerChoice);