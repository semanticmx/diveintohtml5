function supports_html5_storage() {
    try {
      document.getElementById("et").innerHTML="Soporta localstorage";

      return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        document.getElementById("et").innerHTML="No soporta localstorage";
      return false;
    }
  }
  function recupera_datos()
  { 
      alert("hola");
     
      var nombre =document.getElementById("nombre").value;
      var edad= document.getElementById("edad").value;
      var correo= document.getElementById("correo").value;
      var datos=[nombre,edad,correo];
      localStorage.setItem('key',datos);
      
      alert(localStorage.getItem('key'));
      
        
  }
  

  window.onload=supports_html5_storage;