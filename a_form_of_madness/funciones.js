  function auto(){
    document.getElementById("enviar").addEventListener("click",muestra);
    if (!("autofocus" in document.createElement("input"))==false) {        
           document.getElementById("nombre").focus();
          }   
  }
window.onload=auto;
function muestra(e)
{
    var s="<h4>Los datos ingresados anteriormente son: </h4>";
    s+=document.getElementById("nombre").value+"<br>";
    s+="\n"+document.getElementById("edad").value+"<br>";
    s+="\n"+document.getElementById("fecha").value+"<br>";
    s+="\n"+document.getElementById("email").value+"<br>";
    s+="\n"+document.getElementById("color").value+"<br>";
    s+="\n"+document.getElementById("opciones").value+"<br>";
    document.getElementById("datos").innerHTML=s;
    e.preventDefault();
    limpia();
}
function limpia()
{
  document.getElementById("nombre").value="";
  document.getElementById("edad").value="";
  document.getElementById("fecha").value="";
  document.getElementById("email").value="";
  document.getElementById("opciones").value="";
}

