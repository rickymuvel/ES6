// forEach() en los Sets

let personas = new Set(["Fernando", "Maria", "Susana"]);

personas.forEach(function( valor, llave, setOriginal ){
	console.log( valor, llave, setOriginal );
	console.log( personas === setOriginal ); // el setOriginal es el mismo set personas.
});