// Templates literales y crudos con raw.
// Esto solo funciona con los strings literales ``
let mensaje = `Hola \nMundo\\`,
	mensaje2 = String.raw`Hola \nMundo\\`;

console.log( mensaje );
console.log( mensaje2 );