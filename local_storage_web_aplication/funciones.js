window.onload=supports_html5_storage;
function supports_html5_storage() {
  envia= document.getElementById("enviar");
  envia.addEventListener("click",recupera_datos,false);
    try {
      document.getElementById("et").innerHTML="Soporta localstorage";
      return "localStorage" in window && window["localStorage"] !== null;
    } catch (e) {
        document.getElementById("et").innerHTML="No soporta localstorage";
      return false;
    }
  }
  function recupera_datos(e){ 
    var datos = "<h3>Los datos ingresados anteriormente son: </h6>";
      datos += document.getElementById("nombre").value+"<br>";
      datos += document.getElementById("edad").value+"<br>";
      datos += correo= document.getElementById("correo").value+"<br>";
      localStorage.setItem(nombre,datos);
      document.getElementById("muestra").innerHTML=datos;
      e.preventDefault();
  }
  function limpia()
  {
    document.getElementById("nombre").value="";
    document.getElementById("edad").value="";
    document.getElementById("correo").value="";
  }
