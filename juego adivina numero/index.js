import { Juego } from "./juego.js";
play();
function play() {
  var guess = new Juego();
  document.getElementById("sendNumber").addEventListener("click", getNumber);
  function getNumber() {
    guess.userNumber = document.getElementById("userNumber").value;
    document.getElementById("mensage").innerHTML = guess.checkNumber();
  }
  document.getElementById("mensage").innerHTML = "";
}
document.getElementById("back").addEventListener("click", play);
