//menu
//el return solo puede realizarce dentro de una funcion
let op = document.getElementById("op");

const operaciones = () => {
  let op = prompt(
    "Ingresa \n 1- para sumar \n 2- resta \n 3- multiplicacion \n 4- division \n 5- salir"
  );

  while (op !== "1" && op !== "2" && op !== "3" && op !== "4" && op !== "5") {
    alert("por favor ingrese una opcion valida");
    op = prompt(
      "Ingresa \n 1- para sumar \n 2- resta \n 3- multiplicacion \n 4- division \n 5- salir"
    );
  }
  if (op == "5") {
    return false;
  }
  let num1 = parseFloat(prompt("Ingrese Numero 1"));
  let num2 = parseFloat(prompt("Ingrese Numero 2"));
  let resultado = 0;

  if (op === "1") {
    resultado = num1 + num2;
  }

  if (op === "2") {
    resultado = num1 - num2;
  }

  if (op === "3") {
    resultado = num1 * num2;
  }

  if (op === "4") {
    if (num2 === 0) {
      return alert("no puedes dividir por 0"); //para que no rebice nada mas del codigo
    } else {
      resultado = num1 / num2;
    }
  }

  alert("el resultado es " + resultado);
};

op.onclick = function () {
  operaciones();
};
