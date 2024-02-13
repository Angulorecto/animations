var box1 = document.getElementById("box1");
var box2 = document.querySelector("box2");
var hammer = document.getElementById("hammer");

box1.addEventListener("animationend", () => {
  document.getElementById("box1").style.bottom = "50%";
  document.getElementById("box2").style.top = "50%";
});
hammer.addEventListener("animationend", () => {
  document.getElementById("hammer").style.opacity = "100%";
  document.getElementById("hammer").style.left = "40%";
  document.getElementById("hammer").style.top = "10%";
  document.getElementById("hammer").style.width = "20%";
});
function start() {
  document.getElementById("box1").style.animation = "down 1s";
  document.getElementById("box2").style.animation = "up 1s";
  document.getElementById("box1").style.display = "block";
  document.getElementById("box2").style.display = "block";
  document.getElementById("hammer").style.animation = "fade 2s";
  document.getElementById("hammer").style.display = "block";
}
