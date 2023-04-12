var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body  = document.getElementById("gradient");

function setGradient() {
    body.style.background = "linear-gradient(to right,"
    + color1.value
    +","
    + color2.value
    +")";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input",setGradient);




























function moveCommand(direction){
    var whatHappens; 
    switch(direction){
     case"forward": 
        whatHappens="you encounter a ghost"
        break;
     case"back":
        whatHappens="you arrived home"
        break;
     case"right":
        whatHappens="you found a river"
        break;
     case"left":
        whatHappens="you ran into troll"
        break;
     default:
        whatHappens="please enter a valid direction";
    }
    return whatHappens;
}






const multiply = (a,b) => a*b;
const curriedMultiply = (a) => (b) => a*b;
const multiplyBy2 = curriedMultiply(2);


const compose = (f,g) => (a) => f(g(a));
const sum = (num) => num * 2;




















