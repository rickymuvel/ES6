// Nuevo método:
// Object.is()

// Normalmente usamos los operadores de comparación == ó === para saber si son del mismo tipo y valor

console.log( +0 == -0); // true
console.log( +0 === -0); // true
// Podemos ser más estrictos aún:

console.log( Object.is(+0, -0)); // false

console.log( NaN == NaN); // false
console.log( NaN === NaN); // false
console.log( Object.is(NaN, NaN)); // true

console.log( 5 == 5); // true
console.log( 5 == "5"); // true

console.log( 5 === 5); // true
console.log( 5 === "5"); // false

console.log( Object.is(5,5)); // true
console.log( Object.is(5,"5")); // false