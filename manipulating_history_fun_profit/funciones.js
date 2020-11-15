var foto=0;
function cambia(signo)
{ 
    if(signo=="+")
    {
        foto++;
    }else
    {
        foto--;
    } 
    switch(foto) 
    {
        case 0:
            document.getElementById("photoimg").src="img/khia.jpg"
            document.getElementById("p").innerHTML="Khia" ;
            
          break;
        case 1:
            document.getElementById("photoimg").src="img/khia2.jpg"
            document.getElementById("p").innerHTML="khia";
            
          break;
          case 2:
            document.getElementById("photoimg").src="img/jack.jpg"
            document.getElementById("p").innerHTML="Jack";
            
          break;
          case 3:
            document.getElementById("photoimg").src="img/khia3.jpg"
            document.getElementById("p").innerHTML="Khia";
            
          break;
          case 4:
            document.getElementById("photoimg").src="img/jack2.jpg"
            document.getElementById("p").innerHTML="Jack";
            
          break;
        default:
            if(signo=="+")
            {
                alert("Ya no hay mas fotos "+foto );
                foto--;
            }else
            {
                alert("Ya no hay mas fotos "+foto );
                foto++;
            }
          break;
    }
}
