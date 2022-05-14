const datoUsuario = Number(prompt("ingresa un numero: "))
if(!isNaN(datoUsuario))
 {
   for(let i=1; i<=datoUsuario; i++)
   {
      console.log(i);
      
   }
 }
 else
  { alert("no ingreso un dato valido");
 }
