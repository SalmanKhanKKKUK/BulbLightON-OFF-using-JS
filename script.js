let isOPen = false;
let btn = document.querySelector(".switch");
let btnTop = document.querySelector(".bulb-top");
let btnBottom = document.querySelector(".bulb-bottom");
btn.addEventListener("click", function () {
  if (isOPen) {
    btn.classList.remove("on");
    btnBottom.classList.remove("bulbON");
    btnBottom.classList.remove("bulbON");
    
  } else {

    btn.classList.add("on");
    btnTop.classList.add("bulbON");
    btnBottom.classList.add("bulbON");
  }
  isOPen=!isOPen;
})
