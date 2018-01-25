// Cómo los valores por defecto afecta el objeto "arguments"

// En este caso arguments reconoce la existencia de a y b 
// y sus valores pasados en la línea 14:
// function sumar(a,b){

// En este otro caso, los parámetros por defecto, perjudican a arguments
// Y ahora está vacío.
function sumar(a = 1, b = 2){
	console.log( arguments )
}

// En este caso, argumens contendrá toda esta información
// sumar(1, 2, 5, "Ricky", { nombre: "Ricky"});

// En este otro caso, arguments ya no contiene información porque
sumar()