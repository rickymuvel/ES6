// Nomhbres de propiedades computadas o procesadas

// ES5
var persona = {};

var apellido = "apellido";

persona["Primer nombre"] = "Luis"
persona[apellido] = "Muñoz"

var persona = {
	"Primer nombre" : "Nadia"
}

// console.log( persona["Primer nombre"] );

// ES6

var apellido = "primer apellido";

var persona = {
	"Primer nombre": "Luis",
	[ apellido ]: "Muñoz"
}

console.log( persona["Primer nombre"] );
console.log( persona[apellido] );

var subFijo = " nombre";

var persona = {
	["primer"+ subFijo]: "Nadia",
	["segundo"+ subFijo] : "Mileshka"
}

console.log( persona["primer nombre"]);
console.log( persona["segundo"+ subFijo]);