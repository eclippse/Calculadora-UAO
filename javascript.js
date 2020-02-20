

var ancla = document.getElementsByClassName('texto');
var res = document.getElementById("resultado");
var btnOp = document.getElementById("btnOperacion");

function accion() {

    for (var i = 0; i < ancla.length; i++) {
        ancla[i].classList.toggle('desaparece');
    }
}


function operacion(opcion) {
    var num1 = document.getElementById("numero1").value
    var num2 = document.getElementById("numero2").value

    if (opcion == 'sumar') {
        document.getElementById("resultado").value = parseFloat(num1) + parseFloat(num2);
    }
    if (opcion == 'restar') {
        document.getElementById("resultado").value = num1 - num2;
    }
    if (opcion == 'multiplicar') {
        document.getElementById("resultado").value = num1 * num2;
    }
    if (opcion == 'dividir') {
        document.getElementById("resultado").value = num1 / num2;

    }

}
