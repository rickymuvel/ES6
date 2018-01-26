// Coerción de los símbolos
// Podemos sumar numeros con textos, booleanos con textos, etc. pero los simbolos son inflexibles.

let id = Symbol.for("id");
let numero = 10;
let texto = "10";
let bool = true;
let NotAN = NaN;

console.log( numero + texto );
console.log( numero + Number(texto) );
console.log( "Mi simbolo es: "+ id ); // TypeError: can't convert symbol to string
console.log( "Mi simbolo es: "+ String(id) ); // Mi simbolo es: Symbol(id)