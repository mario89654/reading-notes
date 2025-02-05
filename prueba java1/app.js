
// Navegar
// Ctrl + Av pag
// Laptop  => Ctrl + Fn + Avpag

// Cerrar una pestañ
// Ctrl + w

// Guardar
// Ctrl + S

let tituloDom = document.getElementById("titulo")
console.log(tituloDom)

//para cambiar el valor a un h1, p, span
tituloDom.innerHTML = "Como estan, terricolas"

let imageDom = document.getElementById("imagen-js")

imageDom.src = "https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
imageDom.alt = "Imagen de Js"

let parrafoDom = document.querySelector("#parrafoElement")
console.log(parrafoDom)
parrafoDom.innerHTML = "Este es un parrafa modificado"

//cambiar color de trexto
parrafoDom.style.color = "blue";

//cambiar tamano de la fuente
parrafoDom.style.fontSize = "20px;"

let containerDom = document.querySelector("#container")

//para insertar elementos hijos dentro de un div
containerDom.innerHTML = `
<p>Este es mi p insertado desde el JS </p>
<h2>Este es un titulo de nivel 2</h2.
`

