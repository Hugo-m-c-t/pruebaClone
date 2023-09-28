function ej1(){
    alert ("Te diré el área de un rectángulo según sus dimensiones.");
  var a = prompt("Dime el ancho del rectángulo.");
  var b = prompt("Dime el alto del rectángulo.");

    alert(rect(a,b));

  function rect(valor1,valor2){
    return ("El área es de: " + (valor1*valor2) + " unidades al cuadrado.");
  }
}

function ej2() {
    alert ("Te diré la suma, resta, multiplicación y división de dos números.");
  var a = parseInt(prompt("Dime el primer número."));
  var b = parseInt(prompt("Dime el segundo número."));

    alert(op(a,b));

  function op(valor1,valor2){
   return("La suma es " + (valor1 + valor2) + ". " + "La resta es " + (valor1 - valor2) + ". " + "La multiplicación es " + (valor1 * valor2) + ". " + "La división es " + (valor1 / valor2) + ". ");
  }
}

function ej3() {
    var num = prompt("Dime un número y te diré si es positivo o negativo");

  alert (PosNeg(num));

  function PosNeg(valor){
    if (valor < 0){
        return "El número es negativo.";
    }
    else if (valor > 0){
        return "El número es positivo.";
    }
    else {
        return "El 0 no es positivo ni negativo.";
    }
  }
}

function ej4() {
    var num = parseInt(prompt("Dime un número del 0 al 10 y lo escribiré con letras."));
    var letras = ["Cero", "Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve", "Diez"];
    while (num > 10 || num < 0){
        alert("El valor no se encuentra entre los admitidos, prueba de nuevo.");
        num = parseInt(prompt("Dime un número del 0 al 10 y lo escribiré con letras."));
    }

    alert (paso(num));

    function paso(valor){
        return letras[valor];
    }
    
}

function ej5() {
  var medida = prompt("Escribe 'Pies' o 'Yardas' según tu medida de distancia de preferencia.").toLowerCase();
  var num = parseFloat(prompt("Escribe la distancia en " + medida + "."));
  if (medida == "pies"){
    alert("La distancia es de " + pies(num) + " metros.");
  }
  if (medida == "yardas"){
    alert("La distancia es de " + yardas(num) + " metros.");
  }

  function pies(valor){
    return (valor * 0.3048);
  }
  function yardas(valor){
    return (valor * 0.9144);
  }
}

