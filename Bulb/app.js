let btn = document.getElementById(`Btn`);
let bulb = document.getElementById(`bulb`);
btn.addEventListener("click", Bulb);

function Bulb(e) {
  if (btn.textContent.includes("On")) {
    bulb.src = "on.png";
    btn.textContent = "Turn Off";
  } else {
    bulb.src = "off.png";
    btn.textContent = "Turn On";
  }
}
