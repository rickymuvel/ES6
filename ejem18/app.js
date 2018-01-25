// Obtejos en ES6

/*Ha recibido muchas mejores ya uqe casi cualquier cosa en javfascript es algún tipo de objeto.

OBJETOS LITERALES:

Este tipo de estructura es el patron mas utilizado en javascript (JSON se construyó de esta sintaxis)

Dichos objetos se encuentran en casi cualquier lenguaje script en el internet, casi el 99% 
de los programas los utilizan en algún punto.

*/

function crearPersona( nombre, apellido, edad ){
	return {
		nombre,
		apellido,
		edad
	}
}

let nadia = crearPersona("Nadia", "Yactayo", 37);
console.log( nadia );