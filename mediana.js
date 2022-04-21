//Aca tengo una lista desordenada

const lista =[
  1,
  6,
  2,
  7,
  3,
  8,
  4,
  9,
  5,
]

//Aca uso el metodo sort para ordenarlos con una funcion que
//especifica que tiene q estar ordenado de menor a mayor
const listaOrdenada = lista.sort(function (a , b){
    return a - b;
  }
)

const mitadLista1 = listaOrdenada.length / 2
const mitadLista2 = parseInt(listaOrdenada.length / 2)


//Cree una funcion que me dice si la cantidad de elementos en mi array es par o inpar
function esPar (numero) {
  if (numero % 2 === 0){
    return true;
  } else{
    return false;
  }
}

let mediana

if (esPar (listaOrdenada.length)){
  const elemento1 = listaOrdenada[mitadLista1 -1]
  const elemento2 = listaOrdenada[mitadLista1]

  mediana = ( elemento1 + elemento2) / 2
}else{
  mediana = listaOrdenada[mitadLista2]
}