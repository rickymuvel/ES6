// Clases como expresiones

// Por qué usar la sintaxis de clase?

// 1. Las clases funcionan muy parecido a la declaración LET, solo están ahí hasta que la ejecución alcanza la declaración.
// 2. Todo el código dentro de la clase funciona en modo estricto: "strict mode".
// 3. Todos los métodos no son enumerables
// 4. Todos los métodos internos no tienen un constructor, por consecuencia no se pueden llamar con el método new.
// 5. Llamar una clase sin new dará un error.
// 6. Intentar renombrar el nombre de la clase dentro de algún método de la misma dará un error.
// 7. Las clases tienen métodos estáticos y métodos privados.

let miFuncion = function(){
	console.log( "Hola mundo" );
}

// Una función hecha expresión
let otraFuncion = miFuncion;
console.log( typeof otraFuncion ); // function
otraFuncion();

let Persona = class {
	constructor(nombre){
		this.nombre = nombre,
		this.edad = 30;
		this.direccion = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, doloribus. Dignissimos est at quos suscipit ea nisi voluptatum, quae quia aliquam iste amet provident unde reiciendis aliquid aperiam placeat! Fugiat."
	}

	decirNombre(){
		console.log( `Hola ${this.nombre}` );
	}
}

let ricky = new Persona("Ricky");
ricky.decirNombre();
console.log( typeof ricky ); // object
console.log( ricky instanceof Persona ); // true
