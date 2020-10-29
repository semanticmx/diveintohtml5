function setupHistoryClicks() {
    addClicker(document.getElementById("photonext"));
    addClicker(document.getElementById("photoprev"));
  }
  function addClicker(link) {
    link.addEventListener("click", function(e) {
      swapPhoto(link.href);
      history.pushState(null, null, link.href);
      e.preventDefault();
    }, false);
  }
  function swapPhoto(href) {
    var req = new XMLHttpRequest();
    req.open("GET",
             "http://diveintohtml5.info/examples/history/gallery/" +
               href.split("/").pop(),
             false);
    req.send(null);
  }