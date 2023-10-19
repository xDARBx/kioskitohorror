

$("#boton").click(function(){
    var productos = ["Manzana"," Pera"," Banana"," Kiwi"]
var precios = [300, 450, 400, 900]
var indice = prompt("Elija un producto, ejemplo para Manzana tipear 1:"+"\n"+ productos + ":" + "\n" + "PRECIO: $" + precios)
var cantidad = prompt("elija la cantidad a llevar:")
var precio = cantidad * precios[indice-1]

      if(indice<=productos.length){
        Swal.fire('Usted debe abonar: $' + precio + " por el producto elegido: " + productos[indice-1]+ ", " + "y por la cantidad de: " + cantidad + " unidad/es." )
        indice++
      }else{
        Swal.fire("Ingresó un producto que no existe, vuelva a intentarlo.")
      }
});



//alert("usted debe abonar: $" + precio + " por el producto deseado, " + productos[indice]+"," + " por la cantidad de: "+ cantidad + " unidades.")