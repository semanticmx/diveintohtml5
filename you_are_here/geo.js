console.log("Estoy en el archivo js")
function carga_mapa()
{
    console.log("Entro a funcion");
    if (Modernizr.geolocation) {
        navigator.geolocation.getCurrentPosition(show_map);
        mapa.getValue("soporta");
      } else {

       var mapa= Document.getElementById("mapa");
       mapa.getValue("No lo soporta");
      }
    

}
window.onload(carga_mapa());