'use strict';
//selecting dom elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const diceImg = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//providing starting conditions
score0El.textContent=0;
score1El.textContent=0;
diceImg.classList.add("bord");//making the dice a little curvy by adding a border radius class
diceImg.classList.add("hidden");

const diceRoll = Number(Math.trunc(Math.random()*5) + 1);
console.log(diceRoll);

let score = [0,0];
let activePlayer = 0;
let currentScore=0;
let playing = true;

const switchPlayer = function(){
    document.querySelector(`#current--${activePlayer}`).textContent = 0 ;
    activePlayer = activePlayer === 0 ? 1:0;
    currentScore = 0;
    document.querySelector(".player--0").classList.toggle("player--active");
    document.querySelector(".player--1").classList.toggle("player--active");
}



document.querySelector(".btn--roll").addEventListener("click", function(){
if (playing){
//generating a random nnumber
const dice = Math.trunc(Math.random()*6)+1;
console.log(dice);

//display dice
diceImg.classList.remove("hidden");
diceImg.src = `dice-${dice}.png`;

//if 1, switch players
if (dice !== 1){
    currentScore = currentScore + dice;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
}
else{
    switchPlayer();
}

}
});
 
btnHold.addEventListener("click",function(){

    if (playing){
        score[activePlayer] += currentScore ;
        document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer];
        
        if( score[activePlayer]>=50) { 
            playing = false;
            diceImg.classList.add("hidden");

            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`#name--${activePlayer}`).textContent = "Winner!";
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
        }
        else
        switchPlayer();

    }
})

document.querySelector(".btn--new").addEventListener("click", function(){

    score = [0,0];
    activePlayer = 0;
    currentScore=0;

    document.querySelector(`.player--0`).classList.remove("player--winner");
    document.querySelector(`.player--1`).classList.remove("player--winner"); 
    document.querySelector(`.player--0`).classList.add("player--active");
    document.querySelector(`.player--1`).classList.remove("player--active");
    score0El.textContent=0;
    score1El.textContent=0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceImg.classList.remove("hidden");
    playing = true;
    currentScore = 0;


})












