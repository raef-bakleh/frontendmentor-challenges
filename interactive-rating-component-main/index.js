const display2 = document.querySelector('.card')
const display1= document.querySelector('.container')
const antwort = document.getElementById('val')
var value;

function loadPage(){
    display1.style.display= "none";
    display2.style.display="flex"
}

const buttons = document.querySelectorAll('.numbers')
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    buttons.forEach((button) => button.classList.remove("changeColor"));
    e.target.classList.add("changeColor");
    value = e.target.textContent;
    antwort.innerHTML=value
  });
});






