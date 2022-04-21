const lista = [
  "A",
  "B",
  "C",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "F",
  "A",
  "Z",
  "X",
  "B",
]

//Creo una bariable de objetos para guardar los valores
const listaCount = {}

//mapeo el array elemento por elemento y por cada uno se genera un condicional que dice
//SI el elemento se encuentra en la bariable de objetos entonces el valor de ese elemento 
//sumarle uno SINO por defecto vale 1 y asi vamos agregando objetos con un valor
lista.map(
  function (elemento){
    if (listaCount[elemento]){
      listaCount[elemento] += 1;
    }else{
      listaCount[elemento] = 1;
    }
  }
)


//Aca convierto el objeto listaCount en un array con el metodo object.entries() 
//y al hacer eso se genera un array de arrays, seguido del metodo .sort() que 
//lo que hace es ordenar segun la funcion en este caso los posiciona de menor a mayor
//segun su valor, ya que su valor se encuentra en la posicion ARRAY[1]

const arrayList = Object.entries(listaCount).sort(
  function (valorAcumulado , valorNuevo){
    return valorAcumulado[1] - valorNuevo[1];
  }
)


//Ya una ves ordenados los valores de menor a mayor en la variable arrayList guardo el 
//valor en la ultima posicion (el mayor) en la variable moda
const moda = arrayList[arrayList.length - 1];
