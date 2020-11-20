window.onload=draw;
function draw() {
    var b_canvas = document.getElementById("rec");
    var b_context = b_canvas.getContext("2d");
    b_context.fillRect(50, 25, 150, 100);
    gradient();
    imagen();
  }
  function gradient(){
    var c = document.getElementById("rec1");
    var ctx = c.getContext("2d");
    var grd = ctx.createLinearGradient(0, 0, 0, 200);
    grd.addColorStop(0, "green");
    grd.addColorStop(1, "blue");
    ctx.fillStyle = grd;
    ctx.fillRect(50, 25, 150, 100);

    var c1 = document.getElementById("rec2");
    var ctx1 = c1.getContext("2d");
    var grd1 = ctx1.createLinearGradient(0, 0, 300, 0);
    grd1.addColorStop(0, "red");
    grd1.addColorStop(1, "black");
    ctx1.fillStyle = grd1;
    ctx1.fillRect(50, 25, 150, 100);

    var c2 = document.getElementById("rec3");
    var ctx2 = c2.getContext("2d");
    var grd2 = ctx2.createLinearGradient(0, 0, 200, 125);
    grd2.addColorStop(0, "white");
    grd2.addColorStop(1, "black");
    ctx2.fillStyle = grd2;
    ctx2.fillRect(50, 25, 150, 100);

    var c3 = document.getElementById("rec4");
    var ctx3 = c3.getContext("2d");
    var grd3 = ctx3.createLinearGradient(0, 0, 125, 200);
    grd3.addColorStop(0, "white");
    grd3.addColorStop(1, "black");
    ctx3.fillStyle = grd3;
    ctx3.fillRect(50, 25, 150, 100);
    
  }
function imagen(){
    var canvas = document.getElementById("im");
        var context = canvas.getContext("2d");
        var cat = new Image();
        cat.src = "khia3.jpg";
        cat.onload = function() {
  for (var x = 0, y = 0;
       x < 500 && y < 375;
       x += 50, y += 37) {
    context.drawImage(cat, x, y, 88, 56);
  }
  }
}
