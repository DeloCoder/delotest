const operacion = prompt(
  "elija una operacion:   Suma, Resta, multiplicacion o Division"
);
const numero1 = Number(prompt("elija un numero: "));
const numero2 = Number(prompt("elija otro numero: "));

if (isNaN(numero1) || isNaN(numero2)) {
  alert("numeros no validos asno");
} else
  switch (operacion) {
    case "suma": {
      console.log("la suma es: " + (numero1 + numero2));
      break;
    }
    case "resta": {
      console.log("la resta es: " + (numero1 - numero2));
      break;
    }
    case "multipllicacion": {
      console.log("la multipllicacion es: " + numero1 * numero2);
      break;
    }
    case "division":
      {
        if (numero2 === 0) alert("no se puede dividir por 0");
      }

      {
        console.log("la division es: " + numero1 / numero2);
        break;
      }
    default: {
      console.log("operacion invalida");
      break;
    }
  }
