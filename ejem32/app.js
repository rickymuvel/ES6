// Los Simbolos
// Son un tipo de dato único.. nuevo... diferente...
// 1. undefined
// 2. null,
// 3. boolean,
// 4. number,
// 5. string,
// 6. object

// 7. symbol

// Simbolos y propiedades

// Son perfectos para poner nombres de propiedades y así estar seguros que no van a colisionar con los nombres de otras propiedades, de otros elementos, de otras librerías que estén en el mismo código.

let primerNombre = Symbol('Primer nombre');
let segundoNombre = Symbol('Segundo nombre');
let persona = {
	[segundoNombre] : "Enrique"
};

persona[primerNombre] = 'Luis';

console.log( persona.primerNombre ); // lanza undefined
console.log( persona[primerNombre] ); // lanza Luis
console.log( persona[segundoNombre] ); // lanza Enrique

// Nota: 
// Los parámetros de los Symbol() son opcionales, así es que si hacemos un  console.log( primerNombre, segundoNombre ); nos dirá que solo es un simbolo.

console.log( primerNombre );
console.log( segundoNombre );

let simbolo1 = Symbol('simbolo');
let simbolo2 = Symbol('simbolo');

// Los simbolos nunca son iguales.

console.log( simbolo1 == simbolo2 ); // false
console.log( simbolo1 === simbolo2 ); // false 
console.log( Object.is(simbolo1, simbolo2) ); // false

console.log( typeof simbolo1 ); // symbol

// No se puede convertir un simbolo a string:
console.log( "Mi simbolo es ", simbolo1 ); // Error, no se puede convertir...

