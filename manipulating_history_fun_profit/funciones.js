window.addEventListener("popstate",comenzar,false);
function comenzar()
{
    document.getElementById("photonext").addEventListener("click",cambia,false);
    document.getElementById("photoprev").addEventListener("click",cambia,false);
    window.addEventListener("popstate",cambia,false);
}
var foto=0;
function cambia(signo)
{ 
    if(signo=="+")
    {
        foto++;
    }else if(signo=="-")
    {
        foto--;
    } 
    switch(foto) 
    {
        case 0:
            document.getElementById("photoimg").src="img/khia.jpg"
            document.getElementById("p").innerHTML="Khia" ;
            window.history.pushState(0,null,"khia.html");
          break;
        case 1:
            document.getElementById("photoimg").src="img/khia2.jpg"
            document.getElementById("p").innerHTML="khia";
            window.history.pushState(1,null,"khia1.html");
          break;
          case 2:
            document.getElementById("photoimg").src="img/jack.jpg"
            document.getElementById("p").innerHTML="Jack";
            window.history.pushState(2,null,"jack.html");
          break;
          case 3:
            document.getElementById("photoimg").src="img/khia3.jpg"
            document.getElementById("p").innerHTML="Khia";
            window.history.pushState(3,null,"khia3.html");
          break;
          case 4:
            document.getElementById("photoimg").src="img/jack2.jpg"
            document.getElementById("p").innerHTML="Jack";
            window.history.pushState(4,null,"jack2.html");
          break;
        default:
            if(signo=="+")
            {
                foto--;
            }else
            {
                foto++;
            }
          break;
    }
}
