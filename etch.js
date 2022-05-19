const container = document.getElementById("container");
const colorPick = document.getElementById("choosecolor");
const squares = document.getElementsByClassName("grid-item");
const fade = document.getElementById("fadeButton");
const fadeOn = document.getElementById("on");
const fadeOff = document.getElementById("off");

const onRain = document.getElementById("onRain");
const offRain = document.getElementById("offRain");


const randomColor = () => {
    let r = Math.floor(Math.random() * (255 - 0 + 1) + 0)
    let g = Math.floor(Math.random() * (255 - 0 + 1) + 0)
    let b = Math.floor(Math.random() * (255 - 0 + 1) + 0)
    let color = `rgb(${r}, ${g}, ${b})`
    return color;
}

function makeRows(rows, cols) {
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    cell.style.overflow = "hidden";
    cell.style.width = 560 / cols - 2 + "px";
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener('mouseover', function() {
      if (onRain.style.backgroundColor == "lime") {
        cell.style.backgroundColor = randomColor();
      } else if (offRain.style.backgroundColor == "lime"){
        cell.style.backgroundColor = changeColor();
      } else {
        cell.style.backgroundColor = changeColor();
      }
        cell.style.opacity = parseFloat(cell.style.opacity) + 0.10;
    });
        // Fade Mode
        fadeOn.addEventListener("click", function() {
          cell.style.opacity = 0.1;
          fadeOff.style.backgroundColor = "white";
          fadeOn.style.backgroundColor = "lime";
        })
        fadeOff.addEventListener("click", function() {
          cell.style.opacity = 1;
          fadeOn.style.backgroundColor = "white";
          fadeOff.style.backgroundColor = "lime";
        })
        // Rainbow Mode
        onRain.addEventListener("click", function() {
          offRain.style.backgroundColor = "white";
          onRain.style.backgroundColor = "lime";
        })
        offRain.addEventListener("click", function() {
          onRain.style.backgroundColor = "white";
          offRain.style.backgroundColor = "lime";
        })
  };
};

function changeSides() {
    container.innerHTML = "";
    let sides = prompt("How many squares per side?");
    makeRows(sides, sides);
} 

const changeColor = () => {
    newColor = colorPick.value;
    return newColor;
}




makeRows(16, 16);