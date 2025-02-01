# Comandos de GIT

**ls** :Muestra lo que hay en la carpeta actual.

Ejemplo: ls documentos  imágenes  proyecto

**cd** [carpeta] :Entra en una carpeta específica.

Ejemplo: cd documentos
    Ahora estás dentro de la carpeta documentos.

**code .** :Abre la carpeta actual en Visual Studio Code.

Ejemplo: code .
    Visual Studio Code se abrirá con todos los archivos de la carpeta.

**mkdir** [nombre] :Crea una nueva carpeta.

Ejemplo: mkdir nuevo_proyecto
    Esto crea una carpeta llamada nuevo_proyecto.

**cd ..** :Regresa a la carpeta anterior.

Ejemplo: cd ..
    Si estabas en documentos, ahora estarás en la carpeta principal.

**pwd** :Muestra dónde estás en el sistema.

Ejemplo: pwd /home/usuario/proyecto

Esto te dice que estás en /home/usuario/proyecto.
git init : Inicializa un repositorio Git en la carpeta actual. Sirve para convertir una carpeta en un repositorio donde podrás versionar tus cambios.

**git add** : Agrega archivos al área de preparación (stage). Esto significa que estás diciendo a Git qué archivos quieres incluir en el próximo commit.
Ejemplo: ```bash  git add archivo.txt

**git commit -m "[mensaje]"** :Guarda los cambios en el historial de tu repositorio con un mensaje descriptivo.Es como tomar una “foto” del estado actual de tus archivos.
Ejemplo: git commit -m "Añadí el archivo index.html"

**git status** :Muestra el estado del repositorio:
Qué archivos han sido modificados.
Cuáles están en el área de preparación.
Si hay algo listo para ser guardado con un commit.
Ejemplo: git status

**git log** :Muestra el historial de commits realizados en tu repositorio.
Es útil para ver qué cambios se hicieron y cuándo.
Ejemplo: git log

**git push** : Sube tus cambios del repositorio local al repositorio remoto (por ejemplo, GitHub).
Ejemplo: git push origin main

**git clone [URL]** : Crea una copia exacta de un repositorio remoto en tu máquina local.
Ejemplo: git clone <https://github.com/usuario/repositorio.git>
