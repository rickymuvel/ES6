// Cambiar el prototipo de un objeto

let gato = {
	sonido(){
		console.log("Miau!");
	},
	chillido(){
		console.log("MIAUU!!");
	}
}

let perro = {
	sonido(){
		console.log("Guau!");
	}
}

let angora = Object.create( gato );
console.log( Object.getPrototypeOf( angora ) === gato );

angora.sonido();
angora.chillido();

//-----------------
// Ahora se pueden camibiar los prototipos con una sola función y no 
// crearse un montón de código para hacerlo.

Object.setPrototypeOf( angora, perro );

console.log( Object.getPrototypeOf( angora ) === gato );

angora.sonido();
angora.chillido(); // Esto lanza un error poruqe perro no tiene el método chillido()