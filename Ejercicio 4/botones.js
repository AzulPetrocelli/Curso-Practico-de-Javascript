  function builder(dni, name, salary){
  this.dni = dni;
  this.name = name;
  this.salary = salary;
 }


  function login(){
    const inputDni = document.getElementById("inputDNI");
    const labelDni = document.querySelector('.labelDni');
    const dni = inputDni.value;

    const inputName = document.getElementById("inputName");
    const name = inputName.value;

    const inputSalary = document.getElementById("inputSalary");
    const salary = inputSalary.value;

    const index = argentina.findIndex((element) => element.dni == dni);

    if(dni == "" || name == "" || salary == ""){
      alert("Te falta rellenar espacios")
    }
    else if(index == -1){
      argentina.push(new builder(dni, name, salary));
      inputDni.value = "";
      inputName.value = "";
      inputSalary.value = "";
    }
    else{
      inputDni.classList.add("is-invalid");
      labelDni.classList.add("text-danger");
      labelDni.textContent = 'El dni que ingreso ya esta registrado';
    }

  }

  function calculatePosition(){
    const inputSalary = document.getElementById("inputSalary");
    const salary = inputSalary.value;
    
    const salarysArg = argentina.map(function(person){
      return person.salary;
    });

    salarysArg.push(salary);
    
    const listOrganized = salarysArg.sort(function(a,b){
    return a - b;
    });
    
    const index = listOrganized.findIndex((element) => element == salary);

    const percent = 100 - parseInt((index * 100)/listOrganized.length)
    
    alert("ganas alrededor de lo que gana el %" + percent + " de la poblacion Argentina")
  }