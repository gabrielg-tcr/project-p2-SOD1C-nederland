let Feedknop = document.getElementById("feed");
let energyKnop = document.getElementById("sleep");
let happyKnop =  document.getElementById("play");

let HappyTekst = document.getElementById("happiness");
let energyTekst = document.getElementById("energy");
let hungerTekst = document.getElementById("hunger");

let hungry = 100;
let energie = 100;
let happy = 100;


function littleHappy() {
    happy = happy - 1;
    if (happy < 0) {
        happy = 0;
    }  else {

    }
    HappyTekst.innerHTML = "Geluk: " + happy;
}

function morehappy() {
    happy = happy + 2;
  if (happy > 100) {
    happy = 100;
  } else {

  }
 HappyTekst.innerHTML = "Geluk: " + happy;
}

function littleHUNGRY() {
    hungry = hungry - 1;
  if (hungry < 0) {
hungry = 0;
  } else {

  }

    hungerTekst.innerHTML = "honger: " + hungry;
}

function nothungry() {
    hungry = hungry + 2;
 if (hungry > 100) {
    hungry = 100;
 }  else {

 }
  hungerTekst.innerHTML = "honger: " + hungry;
}

function littleEnergie() {
    energie  = energie - 1;
    if (energie < 0) {
        energie = 0;
    } else {

    } 
    energyTekst.innerHTML = "energie: " + energie;
}

function moreEnergie() {
    energie = energie + 2;
     if (energie > 100) {
        energie = 100;
     } else {
        
     }
  energyTekst.innerHTML = "energie: " + energie;
}

function pokemon() {
if (hungry === 0 && energie === 0 && happy === 0) {
document.getElementById("title").innerHTML = "Je Tamagotchi is dood!";
} else {

}
}
 pokemon()



setInterval(littleEnergie, 1000);
setInterval(littleHUNGRY, 1000);
setInterval(littleHappy, 1000);
energyKnop.addEventListener("click", moreEnergie)
Feedknop.addEventListener("click", nothungry)
happyKnop.addEventListener("click", morehappy)