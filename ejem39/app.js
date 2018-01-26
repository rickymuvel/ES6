// Convertir un Set en Array

let numeros = [2,3,4,4,4,4,4,4,5,3,6,5,4,2,7,1,6,7];

let setNumeros = new Set(numeros);

console.log( setNumeros );

// let arrayNumeros = [...setNumeros];
// console.log( arrayNumeros );

let arrayNumeros = eliminaDuplicados( setNumeros );
console.log( arrayNumeros );


function eliminaDuplicados( items ){
	// let set = new Set(items);
	// return [...set];
	return [... new Set(items) ]; // es lo mismo que las dos lineas comentadas.
}