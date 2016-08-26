var numero = prompt("Ingresa un número");
numero = parseInt(numero);
   
if (numero > 100) {
	document.write("Números mayores que 1 y menores que 100");
}
else {
   	if (numero % 2 != 0)
   		document.write("Odd!");
   	else {
   		if (numero > 2 && numero < 5) 
   			document.write("Good!");
   		else {
   			if (numero > 6 && numero <= 20) 
   				document.write("Great!");		
   			else {
   				if (numero > 20)
   					document.write("Perfect!");
   			}
   		}
	}
}
   
   