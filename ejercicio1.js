/*
En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

-La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
-La función debe validar que la longitud de los 3 lados del triángulo corresponden a 
un triángulo isósceles.
-La función debe retornar la altura del triángulo.

Pista: la función Math.sqrt de JavaScript puede ayudarte a calcular raíces cuadradas.
*/

function alturaTriangulo(lado, base) {
  const operacion = (lado*lado)-((base/2)*(base/2))
  return Math.sqrt(operacion)
}

function calcularAlturaTriangulo() {
  const base = document.getElementById("InputBaseTriangulo");
  const baseValue = Number(base.value);

  const lado1 = document.getElementById("InputLadoTriangulo1");
  const lado1Value = Number(lado1.value);

  const lado2 = document.getElementById("InputLadoTriangulo2");
  const lado2Value = Number(lado2.value);

  const altura = alturaTriangulo(lado1Value, baseValue);
  alert("La altura del triangulo es: " + altura);
}

function calcularTipoDeTriangulo() {
  const base = document.getElementById("InputBaseTriangulo");
  const baseValue = Number(base.value);

  const lado1 = document.getElementById("InputLadoTriangulo1");
  const lado1Value = Number(lado1.value);

  const lado2 = document.getElementById("InputLadoTriangulo2");
  const lado2Value = Number(lado2.value);

  let triangulo

  switch(true){
    case (baseValue === lado1Value && lado1Value === lado2Value):
    triangulo = "Equilatero"
    break

    case (baseValue !== lado1Value && lado1Value === lado2Value):
    triangulo = "Isósceles"
    break

    case (baseValue !== lado1Value && lado1Value !== lado2Value):
    triangulo = "Escaleno"
    break
  }
  alert("la longitud de los tres lados del triángulo corresponden a un triángulo: " + triangulo);
}