//Codigo del cuadrado--------------------------------------------------------------------------------------------------

console.group("Cuadrado");

function perimetroCuadrado(lado) {
  return lado * 4;
} 

function areaCuadrado(lado) {
  return lado * lado;
} 

console.groupEnd();

//Codigo del triangulo-------------------------------------------------------------------------------------------------
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base){
  return lado1 + lado2 + base
}

function areaTriangulo(base, altura){
  return (base * altura) / 2;
} 

console.groupEnd();

//Codigo del circulo-------------------------------------------------------------------------------------------------------

console.group("Circulo");

//Diametro
function diametroCirculo(radio){
  return radio * 2;
}

//PI
const PI = Math.PI;

//Circunferencia
function perimetroCirculo(radio){
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

//Area
function areaCirculo(radio){
  return (radio * radio) * PI;
}

console.groupEnd();


//Aqui interactuamos con el HTML---------------------------------------------------------------------------------
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado")
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert("El perimetro del Cuadrado es: " + perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado")
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function calcularPerimetroTriangulo(){
  const base = document.getElementById("InputBaseTriangulo");
  const baseValue = Number(base.value);

  const lado1 = document.getElementById("InputLadoTriangulo1");
  const lado1Value = Number(lado1.value);

  const lado2 = document.getElementById("InputLadoTriangulo2");
  const lado2Value = Number(lado2.value);

  const perimetro = perimetroTriangulo(lado1Value, lado2Value, baseValue);
  alert("El perimetro del Triangulo es: " + perimetro);
}

function calcularAreaTriangulo(){
  const base = document.getElementById("InputBaseTriangulo");
  const baseValue = Number(base.value);

  const altura = document.getElementById("InputAlturaTriangulo");
  const alturaValue = Number(altura.value);

  const area = areaTriangulo(baseValue, alturaValue);
  alert("El area del Triangulo es: " + area);
}


function calcularDiametroCirculo(){
  const radio = document.getElementById("InputCirculo");
  const radioValue = Number(radio.value);

  const diametro = diametroCirculo(radioValue);
  alert("El diametro del circulo es " + diametro);
}

function calcularPerimetroCirculo() {
  const radio = document.getElementById("InputCirculo");
  const radioValue = Number(radio.value);

  const perimetro = perimetroCirculo(radioValue);
  alert("El perimetro del circulo es " + perimetro);
}

function calcularAreaCirculo() {
  const radio = document.getElementById("InputCirculo");
  const radioValue = Number(radio.value);

  const area = areaCirculo(radioValue);
  alert("El area del circulo es " + area);
}