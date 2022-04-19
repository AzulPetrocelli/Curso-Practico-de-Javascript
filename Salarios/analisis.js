const salarysArg = argentina.map(function(person){
  return person.salary;
});

  const listaOrdenada = salarysArg.sort(function(a,b){
  return a - b;
  });

let media;

function mediana(list){

  const listOrganized = list.sort(function(a,b){
  return a - b;
  });

  if(listOrganized.length % 2 === 0){
    const index1 = listOrganized [(listOrganized.length / 2) - 1];
    const index2 = listOrganized [(listOrganized.length / 2)];
    media =(index1 + index2) / 2;
  }else{
    const index = parseInt(listOrganized.length / 2);
    media = listOrganized[index];
  }

  console.log("$ " + media);
}
 

const spliceStart = ((salarysArg.length)*90)/100;
const spliceEnd = salarysArg.length - spliceStart;
const salaryTop10 = salarysArg.splice(spliceStart, spliceEnd,);

const medianaTop10 = mediana(salaryTop10);
