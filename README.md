# diveintohtml5

Este repositorio almacena ejercicios de HTML5 basados en el libro Dive Into HTML5 (http://diveintohtml5.info/)

# Instalación

Descarga el branch main del repositorio

$ git clone git@github.com:semanticmx/diveintohtml5.git

Crea un nuevo branch de desarrollo, por ejemplo basado en el nombre del capítulo. 

ejemplo:

$ git checkout -b features/detecting-modernizr

Esto creará un branch basado en main, donde se pueden agregar cambios incrementales. Por ejemplo una carpeta para el capítulo y archivos HTML para los ejemplos.

$ mkdir detect

$ cd detect

$ touch modernizer.html

Una vez que hayamos terminado con los ejemplos del capítulo, podemos cerrar el branch de desarrollo para ese capítulo y mezclarlo al branch principal.

$ cd ..

$ git add .

$ git commit -m 'Ejemplos del capitulo detecting html5 features'

$ git push origin features/detecting-modernizr

Una vez que el branch de desarrollo ha sido enviado al repositorio origen hay que crear un PR (Pull Request) visitando https://github.com/semanticmx/diveintohtml5

y dando click en el botón "Compare and Pull Request"

Hay que llenar la información del título del PR, siendo una frase corta y descriptiva de lo que se quiere hacer por ejemplo "Ejemplos del capítulo Detecting HTML5 features"

Y en la descripción agregar el ¿Qué?, ¿Por qué? y notas adicionales que describan por qué se hace el PR y en qué nos beneficia ese update.

Una vez creado el PR, se revisará el código y de aprobarse los cambios serán incorporados en el branch principal.
