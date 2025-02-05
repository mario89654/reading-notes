let edad = parseInt(prompt("Introduce tu edad"))

let containerDom = document.getElementById("container")

if(edad > 18){
    containerDom.innerHTML = `
 <img src="https://cdn-icons-png.flaticon.com/512/1001/1001642.png" alt="">
      <h1>Si puedes Votar</h1>  `;
}
else {
    containerDom.innerHTML = `
 <img src="https://cdn-icons-png.flaticon.com/512/1001/1001642.png" alt="">
      <hi>No puedes votar</h1> `;
      containerDom.computedStyleMap.backgroundColor = "#e0245c"
}
    
