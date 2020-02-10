'use strict'

//generar un numero randmom y que el usuario adivine el numero

debugger;
var NumAlea = Math.round(Math.random() * 20+1);

//alert("esto es un numero random " + NumAlea);

do {
    var  NumUsu = parseInt(prompt("adivina el numero entre el 1 y el 10", 0))
    if (NumUsu == NumAlea) {
        alert("El numero  es correcto");
      
    }

}
while (NumAlea == NumUsu) {
    alert("El numero ingresado Es incorrecto, vuelva a intentarlo correcto")
}
