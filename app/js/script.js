let slider = document.querySelector("#slider");
let views = document.querySelector(".views span");
let price = document.querySelector(".price-details");
let toggle = document.querySelector("#checkbox-button");

document.querySelector("#slider").value = 2;

/* -- Mouse icon change -- */

function sliderMouseDown() {
  slider.style.cursor="grabbing";
}
function sliderMouseUp() {
  slider.style.cursor="grab";
}

/* -- Slider bar change -- */

function sliderMovement() {
  let x = (this.value / this.max) * 100;
  slider.style.background = "linear-gradient(90deg, hsl(174, 77%, 80%) " + x + "%, hsl(224, 65%, 95%) " + x + "%)";
}

/* -- On/Off discount -- */

function checkDiscount(amount) {
  if(toggle.checked) {
    return amount * 0.75;
  }
  return amount;
}

/* -- Price change -- */

function priceChange() {
  let value = slider.value;
  switch(value) {
    case "0":
      views.innerText = "10K";
      price.innerText = "$" + checkDiscount(8) + ".00";
      break;
    case "1":
      views.innerText = "50K";
      price.innerText = "$" + checkDiscount(12) + ".00";
      break;
    case "2":
      views.innerText = "100K";
      price.innerText = "$" + checkDiscount(16) + ".00";
      break;
    case "3":
      views.innerText = "500K";
      price.innerText = "$" + checkDiscount(24) + ".00";
      break;
    case "4":
      views.innerText = "1M";
      price.innerText = "$" + checkDiscount(36) + ".00";
      break;
  }
}

/* -- Listeners -- */

slider.addEventListener('mousedown', sliderMouseDown, false);
slider.addEventListener('mouseup', sliderMouseUp, false);
slider.addEventListener('mousemove', sliderMovement, false);
slider.addEventListener('click', sliderMovement, false);
slider.addEventListener('input', priceChange, false);
toggle.addEventListener('click', priceChange, false);