var box1 = document.getElementById("box1");
var box2 = document.querySelector("box2");
var hammer = document.getElementById("hammer");

box1.addEventListener("animationend", () => {
  box1.style.bottom = "50%";
  box2.style.top = "50%";
});
hammer.addEventListener("animationend", () => {
  hammer.style.opacity = "100%";
  hammer.style.left = "40%";
  hammer.style.top = "10%";
  hammer.style.width = "20%";
});
function start() {
  box1.style.animation = "down 1s";
  box2.style.animation = "up 1s";
  box1.style.display = "block";
  box2.style.display = "block";
  hammer.style.animation = "fade 2s";
  hammer.style.display = "block";
}
