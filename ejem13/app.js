// Aclarando el doble comportamiento de las funciones:
// 1. Cuando se usa new
// 2. Cuando no se usa new

console.log("ES5");
function Persona( nombre ){
	if( this instanceof Persona ){
		this.nombre = nombre;
	}
	else {
		throw new Error("Esta función debe ser utilizada con el new");
	}
	console.log( this.nombre );
}
var persona = new Persona("Ricky"); // Correcto
// var noEsPersona = Persona("Ricky");
var noEsPersona = Persona.call(persona, "Ricky Muñoz"); // Correcto


console.log("ES6");
/*
NEW.TARGET
META PROPIEDAD
--------------

Una meta propiedad es una propiedad de un no-objeto, que provee
información adicional relacionada con su procedencia 
(como el new)

cuando el constructor de la función es llamada, new.target
se llena con el operador new.

Si la función "Call()" es ejecutada, "new.target" no estará definida
ya que no se ejecutó el constructor.
*/

function Persona2( nombre ){
	// typeof new.target retornaría undefined en caso de 
	// no ser creado por new
	if( typeof new.target !== "undefined" ){
		this.nombre = nombre;
	}
	else {
		throw new Error("Esta función debe ser utilizada con el new");
	}
	console.log( this.nombre );
}
var persona = new Persona2("Ricky"); // Correcto
// Aquí estamos obligando al compilador a usar el new, sin importarle el call.
var noEsPersona = Persona2.call(persona, "Ricky Muñoz"); // Correcto
