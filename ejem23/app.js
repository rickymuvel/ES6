// Orden de enumeraciones de las propiedades de los objetos.

// ES5
let usuario = {
	nombre: "Ricky",
	apellido: "Muñoz",
	edad: 30,
	bio: "Analista programador",
	2: "Nada en particular"
}

// console.log( usuario );

// Todas las llaves van en orden ascendente.
// todas las llaves de tipo string, van ordenadas en la manera que fueron agregadas al objeto
// Todos los simbolos en el orden que fueron agregadas al objeto

var objeto = {
	c: 1,
	0: 1,
	x: 1,
	15: 1,
	r: 1,
	3: 1,
	b: 1
};

objeto.d = 1;
objeto["2"] = 1;
objeto["a"] = 1;

console.log( Object.getOwnPropertyNames(objeto).join(","));
console.log( Object.keys( objeto ));

console.log( JSON.stringify( objeto ));

for( i in Object.keys( objeto )){
	console.log( Object.keys( objeto )[i]);
}