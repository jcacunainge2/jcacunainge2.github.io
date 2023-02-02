//Apartado para darle mtransiccion o moviento al titulo
// Seleccionamos el elemento h1
const elementoH1 = document.querySelector('.contenedor--descripcion h1');
// Convertimos el texto en un array de letras
const texto = elementoH1.textContent.split('');
// Reemplazamos el texto del elemento h1 con una cadena vacía
elementoH1.textContent = '';
// Recorremos el array de letras
texto.forEach((letra, i) => {
  // Creamos un elemento span para cada letra
  const letraSpan = document.createElement('span');
  letraSpan.textContent = letra;
  letraSpan.style.visibility = 'hidden';
  // Agregamos el elemento span al elemento h1
  elementoH1.appendChild(letraSpan);
  // Mostramos la letra con un retraso
  setTimeout(() => {
    letraSpan.style.visibility = 'visible';
  }, i * 100);
});

//Apartado para descargar el hoja de vida  
let openButton = document.getElementById("open-button");
openButton.addEventListener("click", function() {
  fetch("./archivos/Hoja de vida Jhan Acuña.pdf")
    .then(response => response.arrayBuffer())
    .then(buffer => {
      let blob = new Blob([buffer], { type: "application/pdf" });
      let url = URL.createObjectURL(blob);
      let a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.click();
    });
});

// //Sección descripcion de proyecto, animacion de aparecer y aparece descripcion:
//Contenedor proyecto 1
document.getElementById("titulo").addEventListener("mouseover", function(){
  document.getElementById("descripcion").style.display = "block";
});
// document.getElementById("titulo").addEventListener("mouseout", function(){
//   document.getElementById("descripcion").style.display = "none";
// });

//Contenedor proyecto 2
document.getElementById("titulo2").addEventListener("mouseover", function(){
  document.getElementById("descripcion2").style.display = "block";
});
// document.getElementById("titulo2").addEventListener("mouseout", function(){
//   document.getElementById("descripcion2").style.display = "none";
// })

//Contenedor proyecto 3
document.getElementById("titulo3").addEventListener("mouseover", function(){
  document.getElementById("descripcion3").style.display = "block";
});
// document.getElementById("titulo3").addEventListener("mouseout", function(){
//   document.getElementById("descripcion3").style.display = "none";
// })
