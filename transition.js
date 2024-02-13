function blueDone() {
  document.getElementById("box1").style.bottom = "50%";
  document.getElementById("box2").style.top = "50%";
  document.getElementById("hammer").style.opacity = "100%";
  document.getElementById("hammer").style.left = "40%";
  document.getElementById("hammer").style.top = "10%";
}
function start() {
  document.getElementById("box1").style.animation = "down 1s";
  document.getElementById("box2").style.animation = "up 1s";
  document.getElementById("box1").style.display = "block";
  document.getElementById("box2").style.display = "block";
  document.getElementById("hammer").style.animation = "fade 2s";
  document.getElementById("hammer").style.display = "block";
  // Note: this line's timing has to be 0.15 less then the 3 above.
  setTimeout(blueDone, 0850)
}
