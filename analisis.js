const salarysArg = argentina.map(function(person){
  return person.salary;
});

let media

function mediana(list){

  const listOrganized = list.sort(function(a,b){
  return a - b;
  });

  if(listOrganized.length % 2 === 0){
    const index1 = listOrganized [(listOrganized.length / 2) - 1]
    const index2 = listOrganized [(listOrganized.length / 2)]
    media =(index1 + index2) / 2
  }else{
    const index = parseInt(listOrganized.length / 2)
    media = listOrganized[index]
  }

  alert("$ " + media)
}
 
