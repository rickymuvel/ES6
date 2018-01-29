// Miembros estáticos y métodos computados de una clase.

let nombreMetodo = "gritarNombre";

class Persona {
	constructor( nombre ){
		this.nombre = nombre;
	}

	decirNombre(){
		console.log( this.nombre );
	}

	// los paréntesis para mencionar que es una función y las llaves para indicar el inicio y el fin del cuerpo de la función
	[ nombreMetodo](){ 
		console.log( this.nombre.toUpperCase() );
	}

	static crear( nombre ){
		return new Persona(nombre);
	}
}

let yo = Persona.crear("Ricky");
// yo.decirNombre(); // Ricky
console.log( yo ); // Objeto de la clase Persona con prototipo y métodos creados en la clase.
console.log( yo.gritarNombre() );