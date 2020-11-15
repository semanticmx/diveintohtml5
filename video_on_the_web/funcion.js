var v = document.getElementById("movie");
v.onclick = function() {
  if (v.paused) {
    v.play();
  } else {
    v.pause();
  }
};
