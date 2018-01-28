// Declaracion basica de una clase en ES6

class Persona {
	constructor(nombre){
		this.nombre = nombre;
	}

	decirNombre(){
		console.log( this.nombre );
	}
}

let ricky = new Persona("Ricky");
ricky.decirNombre();

console.log( ricky instanceof Persona );
console.log( typeof Persona ); // devuelve function
console.log( Persona.prototype.decirNombre );