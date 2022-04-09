//Codigo del cuadrado--------------------------------------------------------------------------------------------------

console.group("Cuadrado");
const ladoDelCuadrado = 5;
console.log("El lado del cuadrado mide: " + ladoDelCuadrado + "cm");

const perimetroDelCuadrado = ladoDelCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroDelCuadrado + "cm");

const areaDelCuadrado = ladoDelCuadrado * ladoDelCuadrado;
console.log("El area del cuadrado mide: " + areaDelCuadrado + "cm^2");

console.groupEnd();

//Codigo del triangulo-------------------------------------------------------------------------------------------------
console.group("Triangulos");
const ladoDelTriangulo1 = 6;
const ladoDelTriangulo2 = 6;
const baseDelTriangulo = 4;
const alturaDelTriangulo = 5.5;

console.log(
  "Los lados del triangulo miden: " 
  + ladoDelTriangulo1 
  + "cm, " + 
  ladoDelTriangulo2 
  + "cm, " 
  + baseDelTriangulo 
  + "cm "
);

console.log("La altura del triangulo es: " + alturaDelTriangulo + "cm");

const perimetroDelTriangulo = ladoDelTriangulo1 + ladoDelTriangulo2 + baseDelTriangulo;
console.log("El perimetro del triangulo es: " + perimetroDelTriangulo + "cm");

const areaDelTriangulo = (ladoDelTriangulo1 * baseDelTriangulo) / 2;
console.log("El area del triangulo mide: " + areaDelTriangulo + "cm^2");

console.groupEnd();

//Codigo del circulo-------------------------------------------------------------------------------------------------------

console.group("Circulo");

//Radio
const radioDelCirculo = 4;
console.log("El radio del circulo es: " + radioDelCirculo + "cm");

//Diametro
const diametroDelCirculo = radioDelCirculo * 2;
console.log("El diametro del circulo es: " + diametroDelCirculo + "cm");

//PI
const PI = Math.PI;

//Circunferencia
const circunferenciaDelCirculo = diametroDelCirculo * PI;
console.log("El circunferencia del circulo es: " + circunferenciaDelCirculo + "cm");

//Area
const areaDelCirculo = (radioDelCirculo * radioDelCirculo) * PI;
console.log("El area del circulo es: " + areaDelCirculo + "cm");

console.groupEnd();
