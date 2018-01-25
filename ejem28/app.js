// Destructuración de arreglos

let frutas = ["banano", "pera", "uva"];

let [fruta1, fruta2] = frutas;

console.log( fruta1 );
console.log( fruta2 );

let [,, fruta3] = frutas;

console.log( fruta3 );

let otraFruta = "Manzana";

[ otraFruta ] = frutas;

console.log( otraFruta );

//----------------------------------------
// Ordenar valores;
let a = 1;
let b = 2;
let temp;

temp = a;
a = b;
b = temp;
console.log( a );
console.log( b );


// Usando la destructuración de arreglos:

[a,b] = [b,a];
console.log( a );
console.log( b );