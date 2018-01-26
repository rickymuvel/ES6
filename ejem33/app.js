// Compartiendo símbolos Symbol.for() y Symbol.keyFor()

// Para verificar que el simbolo no exista previamente: Symbol.for()
let userID = Symbol.for("userID");

let objeto = {};

objeto[userID] = "12345";

console.log( objeto[userID] );
console.log( userID );

let userID2 = Symbol.for("userID");

// Todos son true porque estamos creando un símbolo basado en otro.

console.log( userID == userID2 ); // true
console.log( userID === userID2 ); // true
console.log( Object.is(userID, userID2) ); // true



console.log( objeto[userID2] ); // 12345
console.log( userID2 ); // Symbol(userID)

let id = Symbol.for("id unico");
console.log( Symbol.keyFor( id ) ); // id unico

let id2 = Symbol.for("id unico2");
console.log( Symbol.keyFor( id2 ) ); // id unico2

let id3 = Symbol("id unico");
console.log( Symbol.keyFor(id3) ); // undefined
