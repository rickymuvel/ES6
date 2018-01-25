var saludo = "Hola Mundo";

console.log(saludo.substr(0,1) === "H");

console.log( saludo.startsWith("Hola")); // hace lo mismo.
console.log( saludo.endsWith("Mundo"))
console.log( saludo.indexOf("x"));
console.log( saludo.includes("x"));

console.log( saludo.startsWith("Mu", 5)); // Busca a partir de un caracter (Espacio en blanco)
console.log( saludo.includes("a", 5)); // Busca a partir del siguiente caracter despues del caracter 5
console.log( saludo.includes("a", 3)); // Buscar a partir del siguiente caracter despues del caracter 3

