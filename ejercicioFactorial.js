
let n = Number (prompt("Ingrese un numero: "));
let resultadoFactorial = 1;


for (let i = 1; i <= n; i++) 
{
    resultadoFactorial = resultadoFactorial * i;
}


console.log(`El factorial de ${n} es: ${resultadoFactorial}`) 
  
