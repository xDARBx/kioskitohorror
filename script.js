$(document).ready(function() {
  // Código a ejecutar una vez haya cargado la página, html, librerías etc..
  
  alert('Me ejecuto después de haber cargado toda la página');
});

var boton = document.getElementById("boton");
boton.onclick = function(e) {
e.preventDefault();
var fboton = document.createElement("script");
fboton.src = "script.js";
document.querySelector("body").appendChild(fboton);
}

var productos = ["manzana","pera","banana","kiwi"]
var precios = [300,450,400,900]
var indice = prompt("elija un producto, ejemplo para manzanas tipear 0 así hasta 3," +" "+ productos + ":")
var cantidad = prompt("elija la cantidad a llevar:")
var precio = cantidad * precios[indice]

alert("usted debe abonar: $" + precio + " por el producto deseado, " + productos[indice]+"," + " por la cantidad de: "+ cantidad + " unidades.")
