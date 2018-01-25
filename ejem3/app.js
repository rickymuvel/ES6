// Repeat

let texto = "Hola";

console.log( texto.repeat(2) ); // Hace que se repita dos veces el texto.

const ESPACIOS = 12;

let nombres = ["Fernando", "Melissa", "Juan"];
let telefonos = ["958969230", "909665874", "987654321"];

for (i in nombres){
	let dif = ESPACIOS - nombres[i].length;
	console.log( nombres[i] + " ". repeat(dif) +"|"+ telefonos[i]);
}