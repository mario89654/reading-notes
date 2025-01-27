
#Git y GitHub#

**1. ¿Qué es el control de versiones?**

El control de versiones es un sistema que permite gestionar y registrar los cambios realizados en un proyecto a lo largo del tiempo. Facilita el seguimiento de las modificaciones, la colaboración entre varios desarrolladores, y la capacidad de volver a versiones anteriores en caso de errores. Los sistemas de control de versiones más comunes son Git, Subversion y Mercurial.

**2. ¿Qué es “clone” en Git?**

El comando git clone en Git se utiliza para crear una copia local de un repositorio remoto. Cuando ejecutas este comando, descargas todos los archivos, el historial de commits, y las ramas de un repositorio desde un servidor (como GitHub, GitLab, etc.) a tu máquina local, permitiéndote trabajar en el proyecto.

**3. ¿Cuál es el comando para agregar los archivos modificados a la zona de preparación?**

El comando para agregar archivos modificados a la zona de preparación (staging area) es:

*git add <nombre_del_archivo>*

**4. ¿Cuál es el comando para enviar la captura de los archivos modificados a GitHub?**

El proceso para enviar los cambios a GitHub consiste en varios pasos:
Asegúrate de haber añadido los archivos modificados a la zona de preparación con:
*git add .*

Proceso para enviar los cambios a GitHub
Haz un commit de los cambios:
*git commit -m "Mensaje descriptivo"*

Finalmente, para enviar los cambios a GitHub, utiliza:
*git push origin <nombre_de_la_rama>*

Por ejemplo, si estás en la rama main, sería:
*git push (origin) main*
