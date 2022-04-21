const notes = [];
//Funcion constructora
function notas(course,note,credit){
  this.course = course;
  this.note = note;
  this.credit = credit;
}

function calcularPonderado(){
  //Creo un array que con el metodo map le voy agregando los valores
  // de la multiplicacion entre la nota y el credito de cada objeto
  const noteWithCredit = notes.map(function(object){
    return object.note * object.credit;
  })
  

  //creo una variable que con el metodo reduce, le doy un valor inicial a la suma de 0 este se
  //suma con el primer valor de noteWithCredit hasta el ultimo, esta acumulando valores basicamente
  const sumNoteWithCredit = noteWithCredit.reduce(
    function(sum = 0, newValor){
    return sum + newValor;
  });


  const credits = notes.map(
    function(object){
    return Number(object.credit);
  });


  const sumCredit = credits.reduce(
    function(sum = 0, newValor){
    return sum + newValor;
  });


  const Ponderado = sumNoteWithCredit/sumCredit;

  alert("El promedio Ponderado es: " + Ponderado);
}

function agregarValor(){
  const materia = document.getElementById("inputMateria");
  const course = materia.value;

  const nota = document.getElementById("inputNota");
  const note = nota.value;

  const credito = document.getElementById("inputCredito");
  const credit = credito.value;

  const indice = notes.findIndex((element) => element.course == course);

  if(indice == -1){
    notes.push(new notas(course,note,credit));
  }else{
    alert("Esta materia ya ha sido cargada");
  }
}

function eliminarValor(){
  const materia = document.getElementById("inputMateria");
  const course = materia.value;

  const nota = document.getElementById("inputNota");
  const note = nota.value;

  const credito = document.getElementById("inputCredito");
  const credit = credito.value;

  //si el valor se encuentra ahi me va a devolver la posicion en la que se encuentra
  //se el valor NO se encuentra ahi por defecto indice va a ser -1
  const indice = notes.findIndex((element) => element.course == course);

  if(indice == -1){
    alert("Esta materia aun no ha sido cargada")
  }else{
    notes.splice(indice , 1)
  }

}




