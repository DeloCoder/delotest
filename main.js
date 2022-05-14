
const operacion=prompt("elija una operacion:   Suma, Resta, multiplicacion o Division");
const numero1= Number(prompt("elija un numero: "));
const numero2= Number(prompt("elija otro numero: "));

if(isNaN(numero1) || isNaN(numero2))
{ alert("numeros no validos")}
else
{
  if (operacion==="suma")
  { console.log("la suma es: "+(numero1+numero2));
}
 else if (operacion==="resta")
{ console.log("la resta es: "+(numero1-numero2));
}
 else if (operacion==="multiplicacion")
{ console.log("la multiplicacion es: "+(numero1*numero2));
}
 else if (operacion==="division")
{ console.log("la division es: "+(numero1/numero2));
}
  if (numero2===0)
{ console.log("no se puede dividir por 0");}
}