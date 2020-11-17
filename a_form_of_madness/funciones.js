
  function auto()
    {
        alert("ee");
        if (!("autofocus" in document.createElement("input"))==false) {
            alert("3")
           document.getElementById("nombre").focus();
          }
        
    }
window.onload=auto;
function muestra()
{
    var s=document.getElementById("nombre").value;
    s=s+"\n"+document.getElementById("edad").value;
    s=s+"\n"+document.getElementById("fecha").value;
    s=s+"\n"+document.getElementById("email").value;
    s=s+"\n"+document.getElementById("color").value;
    s=s+"\n"+document.getElementById("opciones").value;
}
