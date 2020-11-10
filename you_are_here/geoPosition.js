//Pregunta al ususario si se puede acceder a su ubicacion 
console.log("Estoy en el js");


  function get_location() {
    navigator.geolocation.getCurrentPosition(show_map);
    alert("Entro al primer metodo")
  }
  function show_map(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    document.getElementById("latitud").innerHTML="Mi latitud es "+latitude;
    document.getElementById("longitud").innerHTML="Mi longitudes "+longitude;
    alert(latitude);
    
    show_map1();
  }

  function show_map1(loc) {
    
    
    var map = new GMap2(document.getElementById("geo-wrapper"));
    var center = new GLatLng(loc.coords.latitude, loc.coords.longitude);
    map.setCenter(center, 14);
    map.addControl(new GSmallMapControl());
    map.addControl(new GMapTypeControl());
    map.addOverlay(new GMarker(center, {draggable: false, title: "Estas aqui"}));
  }