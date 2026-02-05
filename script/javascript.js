console.log("hallo");


window.onload = function () {
console.log("Page is fully loaded");
start();
// Your code here
};


function toonfoto() {
document.getElementById("thankyou").style.display = "block";
}



function islam() {
document.getElementById("description").innerHTML = ("in nederland is 6% procent moslim. De islam is een monotheïstische" + 
    "religie die gebaseerd is op de overgave aan de wil van Allah. Mohammed is de profeet en de Koran is het heilige boek. Moslims bidden vijf keer per dag, vasten tijdens de ramadan, helpen anderen en volgen leefregels zoals geen alcohol en geen varkensvlees. Ze geloven ook in leven na de dood");
document.body.style.backgroundColor = "";
}

function katholicisme() {
}

function hindoeisme() {
document.getElementById("description").innerHTML = ("Qua praktijken en filosofieën omvat het hindoeïsme een breed scala van wetten en voorschriften van dagelijkse moraal, gebaseerd op de concepten van karma en dharma en op maatschappelijke normen, zoals hindoeïstische huwelijksgebruiken");
}

function Boeddhisme() {
document.getElementById("description").innerHTML = ("Het boeddhisme is een religie. Het doel van boeddhisten is om te ontsnappen uit de cirkel van wedergeboorten, oftewel de samsara. Verlossing van het lijden speelt een centrale rol binnen het boeddhisme. Je kunt alleen van het lijden verlost worden door het edele achtvoudige pad te bewandelen.");

}

function dark() {
    document.body.style.backgroundColor = "black";
    document.getElementById("moon").innerHTML = "⋆⁺₊⋆ ☾⋆⁺₊⋆";

}

function light() {
  document.body.style.backgroundColor = "white";
    document.getElementById("sun").innerHTML = "⋆｡ ﾟ☁︎｡ ⋆｡ ﾟ☀︎｡ ⋆｡ ﾟ";
}



var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();


var x = setInterval(function() {

 
 var now = new Date().getTime();
    

var distance = countDownDate - now;
    
 
 var days = Math.floor(distance / (90000 * 60 * 60 * 24));
 var hours = Math.floor((distance % (20000 * 60 * 60 * 24)) / (90000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

 document.getElementById("demo").innerHTML = days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ";
    
 
   if (distance < 0) {
     clearInterval(x);
     document.getElementById("demo").innerHTML = "the periode is bijna afgelopen";
   }
   
 }, 1000);

 function myFunction() {
   var txt;
   if (confirm("Pls donate, in de donatie pagina, zodat we meer mensen, kunnen berijken, over de probleem, om de zrogen dat jongeren in criminaliteit minder wordt")) {
  
   } else {
  
   }
 }

function doneer() {
  let elemBar = document.getElementById("myBar");
let elemBedrag = document.getElementById("myBedrag");
let elemPercentage = document.getElementById("myPercentage");
    let huidigbedrag = elemBedrag.innerHTML;
    let elem2 = document.getElementById("donationAmount");
    let doneerbedrag = elem2.value;

    let nieuwBedrag = Number(huidigbedrag) + Number(doneerbedrag);
    elemBedrag.innerHTML = nieuwBedrag;
    elemPercentage.innerHTML = 100 / 5000 * nieuwBedrag + "%";

    elemBar.style.width = 100 / 5000 * nieuwBedrag  + "%";
    elemBar.innerHTML = 100 / 5000 * nieuwBedrag   + "%";
    
}


function start() {
let elemBar = document.getElementById("myBar");
let elemBedrag = document.getElementById("myBedrag");
let elemPercentage = document.getElementById("myPercentage");
let huidigbedrag = elemBedrag.innerHTML;
let huidigpercentage = 100 / 5000 *  huidigbedrag;

elemBar.style.width = huidigpercentage + "%";
elemBar.innerHTML = huidigpercentage + "%";

}

setInterval(myFunction, 180000);

