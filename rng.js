function ani() {
  document.getElementById("star").style.animation = "";
  document.getElementById("vignette").style.display = "block";
  document.getElementById("vignette").style.animation = "vignette 10s ease";
  document.getElementById("star").style.animation = "10s cubic-bezier(1, 0, 0.68, 1.01) 0s 1 normal none running growStar";
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("vignette").style.display = "block";
  document.getElementById("vignette").style.animation = "vignette 10s ease";
  document.getElementById("star").style.display = "block";
  document.getElementById("star").style.animation = "centerAnimation 10s cubic-bezier(1, 0, 0.68, 1.01) 0s 1 normal forwards";
})
