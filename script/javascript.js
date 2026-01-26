console.log("hallo");

document.getElementById("tabel_header").style.backgroundColor  = "blue";

function toonfoto() {
document.getElementById("thankyou").style.display = "block";
}

document.getElementById("thankyou").style.display = "none";

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
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
