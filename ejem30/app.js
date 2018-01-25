// Valores por defecto en la destructuración

let frutas = ["banano", "peras"];

let [ fruta ] = frutas;

console.log( fruta );

/// ------ asignanod un valor por defecto

let [ fruta1, fruta2 = "Manzana"] = frutas;

console.log( fruta1 );
console.log( fruta2 );


/// ----- destructuración de objetos


let opciones = {
	nombre: "Ricky"
}

let { nombre, apellido = "Muñoz" } = opciones;

console.log( nombre, apellido );