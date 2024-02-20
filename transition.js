function text() {
  document.getElementById("title").style.animation = "textIn 1s forwards";
  document.getElementById("title").style.display = "block";
  document.getElementById("reason").style.animation = "textIn 1s forwards";
  document.getElementById("reason").style.display = "block";
}
function start() {
  document.getElementById("box1").style.animation = "down 1s forwards";
  document.getElementById("box2").style.animation = "up 1s forwards";
  document.getElementById("box1").style.display = "block";
  document.getElementById("box2").style.display = "block";
  document.getElementById("hammer").style.animation = "fade 3s forwards";
  document.getElementById("hammer").style.display = "block";
  setTimeout(text, 3000);
}
function banOut() {
  document.getElementById("box1").style.animation = "fadeOut 3s forwards";
  document.getElementById("box2").style.animation = "fadeOut 3s forwards";
  document.getElementById("hammer").style.animation = "fadeOut 3s forwards";
}
function warnOut() {
  document.getElementById("title").style.animation = "fadeOut 3s forwards";
  document.getElementById("reason").style.animation = "fadeOut 3s forwards";
  document.getElementById("glass").style.animation = "fadeOut 3s forwards";
}
function warn() {
  document.getElementById("title").style.animation = "warnText 3s forwards";
  document.getElementById("title").style.display = "block";
  document.getElementById("reason").style.animation = "warnText 3s forwards";
  document.getElementById("reason").style.display = "block";
  document.getElementById("triangle").style.animation = "warn 6s forwards";
  document.getElementById("triangle").style.display = "block";
  document.getElementById("glass").style.animation = "glassy 0.7s forwards";
  document.getElementById("glass").style.display = "flex";
  setTimeout(warnOut, 6000);
}
