const orszag = document.getElementById("orszag");
const valasz = document.getElementById("valasz");
const form = document.getElementById("form");

const megoldas = document.getElementById("megoldas");
const pontszam = document.getElementById("pontszam");
const userResponse = document.getElementById("varos");
let kerdesOrszag;

let kerdesDb = 0;
let helyesDb = 0;

const varosok = [
    {orszag: "Magyarország", varos: "Budapest"},
    {orszag: "Németország", varos: "Berlin"},
    {orszag: "Csehország", varos: "Bécs"},
    {orszag: "Spanyolország", varos: "Madrid"},
    {orszag: "Olaszország", varos: "Róma"},
    {orszag: "Svédország", varos: "Stockholm"},
    {orszag: "Finnország", varos: "Helsinki"},
    {orszag: "Franciaország", varos: "Párizs"},
    {orszag: "Egyesült Királyság", varos: "London"}
];
generateQuestion();
function generateQuestion () {
    kerdesOrszag = varosok[Math.floor(Math.random() * varosok.length)];
    orszag.innerHTML = kerdesOrszag.orszag
    userResponse.value = "";
}

form.onsubmit = function(e) {
    e.preventDefault();
    if (userResponse.value === kerdesOrszag.varos) {
        valasz.innerHTML = "Helyes";
        helyesDb++
    }
    else {
        valasz.innerHTML = "Helytelen";
    }

    megoldas.innerHTML = kerdesOrszag.orszag + " Fővárosa " + kerdesOrszag.varos;
    kerdesDb++;

    pontszam.innerHTML = helyesDb + "/" + kerdesDb;
    generateQuestion();
}