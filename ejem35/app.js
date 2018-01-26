// Recuperando las propiedades  simbolo

let id = Symbol.for("id");
let activo = Symbol.for("activo");

let persona = {
	[id]: "123",
	[activo]: true,
	["codigo"]: "XY123",
	nombre: "Ricky",
	apellido: "Muñoz",
	edad: 35
};

console.log( Object.keys(persona) ); // no aparecen los simbolos.

for( key in persona){ // for ... in
	console.log( key, persona[key] );
}

// Acceder a los simbolos usando getOwnPropertySymbols

let simbolos = Object.getOwnPropertySymbols(persona);
console.log( simbolos );

for (i in simbolos ){
	console.log( simbolos[i], Symbol.keyFor(simbolos[i]) );
}