
  function errorDni(){
    const inputDni = document.getElementById("inputDNI");
    const labelDni = document.querySelector('.labelDni');
    const dni = inputDni.value;

    if(dni == ""){
        inputDni.classList.add("is-invalid");
        labelDni.classList.add("text-danger");
        labelDni.textContent = 'No ingreso su DNI';
    }else{
        inputDni.classList.remove("is-invalid");
        labelDni.classList.remove("text-danger");
        labelDni.textContent = 'Ingrese su numero de DNI';
    }
  }

  function errorName(){
    const inputName = document.getElementById("inputName");
    const labelName = document.querySelector('.labelName');
    const name = inputName.value;

    if(name == ""){
        inputName.classList.add("is-invalid");
        labelName.classList.add("text-danger");
        labelName.textContent = 'No ingreso su nombre';
    }else{
        inputName.classList.remove("is-invalid");
        labelName.classList.remove("text-danger");
        labelName.textContent = 'Ingrese su primer nombre';
    }
  }

  function errorSalary(){
    const inputSalary = document.getElementById("inputSalary");
    const labelSalary = document.querySelector('.labelSalary');
    const salary = inputSalary.value;

    if(salary == ""){
        inputSalary.classList.add("is-invalid");
        labelSalary.classList.add("text-danger");
        labelSalary.textContent = 'No ingreso su salario';
    }else{
        inputSalary.classList.remove("is-invalid");
        labelSalary.classList.remove("text-danger");
        labelSalary.textContent = 'Ingrese su salario mensual';
    }
  }





