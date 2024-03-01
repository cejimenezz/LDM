let inputNombre = document.querySelector("input#input-nombre");
let inputApellido = document.querySelector("input#input-apellido");
let inputEmail = document.querySelector("input#input-email");
let boton = document.querySelector("#boton-agregar");
let listaEmpleados = document.querySelector("#lista-empleados");
let listaEmpleadosArray = [];
let valorlListaDepartamento = document.querySelector("#select-departamento");
let listaDepartamento = document.querySelector("#lista-departamentos");
let totalDepartamentoIT = document.querySelector("#total-departamentosIT");
let totalDepartamentoMKT = document.querySelector("#total-departamentosMKT");
let totalDepartamentoVNT = document.querySelector("#total-departamentosVNT");
let totalDepartamentoADM = document.querySelector("#total-departamentosADM");
let conteoIT = 0;
let conteoMkt = 0;
let conteoVnt = 0;
let conteoAdm = 0;

boton.addEventListener("click", () => {
  if (inputNombre.value.length > 0 && inputApellido.value.length > 0) {
    listaEmpleadosArray.push(
      `${inputNombre.value}`,
      `${inputApellido.value}`,
      `${inputEmail.value}`,
      `${valorlListaDepartamento.value}`
    );
    console.log(listaEmpleadosArray);

    //CONTEO DE IT
    listaEmpleadosArray.forEach((element) => {
      if (element.includes("IT") && valorlListaDepartamento.value == "IT") {
        conteoIT = listaEmpleadosArray.filter((i) => i == "IT");
        console.log("length IT", conteoIT.length);
      }
    });
    // CONTEO DE MARKETING
    listaEmpleadosArray.forEach((element) => {
      if (
        element.includes("Marketing") &&
        valorlListaDepartamento.value == "Marketing"
      ) {
        conteoMkt = listaEmpleadosArray.filter((i) => i == "Marketing");
        console.log("length marketing", conteoMkt.length);
      }
    });

    // CONTEO DE VENTAS
    listaEmpleadosArray.forEach((element) => {
      if (
        element.includes("Ventas") &&
        valorlListaDepartamento.value == "Ventas"
      ) {
        conteoVnt = listaEmpleadosArray.filter((i) => i == "Ventas");
        console.log("length ventas", conteoVnt.length);
      }
    });
    // CONTEO DE ADMINISTRACION
    listaEmpleadosArray.forEach((element) => {
      if (
        element.includes("Administración") &&
        valorlListaDepartamento.value == "Administración"
      ) {
        conteoAdm = listaEmpleadosArray.filter((i) => i == "Administración");
        console.log("length adm", conteoAdm.length);
      }
    });
    let nodo = document.createElement("li");
    nodo.textContent = `${inputNombre.value} ${inputApellido.value}`;
    nodo.className = "list-group-item animate__animated animate__slideInRight";
    listaEmpleados.append(nodo);
    inputNombre.value = "";
    inputApellido.value = "";
    inputEmail.value = "";
    Swal.fire({
      position: "center",
      icon: "success",
      title: "",
      showConfirmButton: false,
      timer: 1000,
    });
    console.log(conteoMkt);

    if (conteoIT.length > 0) {
      totalDepartamentoIT.textContent = `En el departamento IT hay : ${conteoIT.length} empleados registrados`;
    } else {
      totalDepartamentoIT.textContent = `En el departamento IT hay : 0 empleados registrados`;
    }

    if (conteoMkt > 0) {
      totalDepartamentoMKT.textContent = `En el departamento Marketing hay : ${conteoMkt.length} empleados registrados`;
    } else {
      totalDepartamentoMKT.textContent = `En el departamento Marketing hay 0 empleados registrados`;
    }
    if (conteoVnt > 0) {
      totalDepartamentoVNT.textContent = `En el departamento Ventas hay : ${conteoVnt.length} empleados registrados`;
    } else {
      totalDepartamentoVNT.textContent = `En el departamento Ventas hay 0 empleados registrados`;
    }
    if (conteoAdm > 0) {
      totalDepartamentoADM.textContent = `En el departamento Administración hay : ${conteoAdm.length} empleados registrados`;
    } else {
      totalDepartamentoADM.textContent = `En el departamento Administración hay 0 empleados registrados`;
    }
    // let nodo2 = document.createElement("li");
    // nodo2.textContent = `${valorlListaDepartamento.value}`;
    // nodo2.className = "list-group-item animate__animated animate__slideInRight";
    // listaDepartamento = nodo2;
    // valorlListaDepartamento.value = "";
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Debes introducir todos los datos!",
    });
  }
});
