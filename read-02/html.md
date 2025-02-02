## HTML

HTML (HyperText Markup Language) es el lenguaje de marcado estándar utilizado para crear páginas web. Es el lenguaje fundamental que estructuró el contenido de las páginas web, como texto, imágenes, enlaces, formularios, entre otros.

Se usa porque define la estructura básica de una página web, permitiendo que los navegadores interpreten y muestren correctamente la información a los usuarios.

**Las 3 partes principales de un elemento HTML:**
-*Etiqueta de apertura:* Es la parte que indica el inicio de un elemento. Se escribe con corchetes angulares, por ejemplo, <p>.
-*Contenido:* Es el contenido o texto que va dentro de las etiquetas, como por ejemplo, el texto dentro de un párrafo.
-*Etiqueta de cierre:* Similar a la etiqueta de apertura, pero con una barra diagonal antes del nombre de la etiqueta. Por ejemplo, </p>.
Por ejemplo:

html
Copy
<p>Este es un párrafo de ejemplo.</p>
En este caso,<p> es la etiqueta de apertura, "Este es un párrafo de ejemplo." es el contenido, y </p> es la etiqueta de cierre.

**¿Cómo le das información extra a un elemento?**
La información extra a los elementos se da mediante atributos. Los atributos proporcionan detalles adicionales sobre un elemento. Se colocan dentro de la etiqueta de apertura, después del nombre de la etiqueta. Por ejemplo:

html
Copy
<a href="https://www.ejemplo.com"> Haz clic aquí</a>
En este caso, el atributo es href, que le indica al navegador la URL a la que debe llevar al usuario cuando hace clic en el enlace.

**¿Por qué es importante usar etiquetas semánticas?**
Las etiquetas semánticas son importantes porque:

-*Accesibilidad*: Ayudan a los navegadores y dispositivos de asistencia (como lectores de pantalla) a comprender mejor la estructura de la página.
-*SEO (Optimización para motores de búsqueda)*: Los motores de búsqueda valoran el uso de etiquetas semánticas, ya que facilitan la indexación y categorización de la página.
-*Mantenimiento y legibilidad*: Usar etiquetas semánticas hace que el código sea más fácil de leer y mantener para otros desarrolladores. Además, el código es más claro respecto a su propósito y significado.
Ejemplo de etiquetas semánticas:

<header>, <nav>, <article>, <section>, <footer> son ejemplos de etiquetas que describen el propósito de una sección o bloque de contenido dentro de la página.
