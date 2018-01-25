// El operador "Spread"
/*
Muy cercano a REST, se encuentra el operador Spread

Mientras que el parámetro REST permite especificar argumentos
independientes que serán combinados en un arreglo, el operador
"Spread" permite especificar un arreglo que será separado y
cada item enviado será un argumento independiente ala función.

*/

// ES5

// var num1 = 10;
// 	num2 = 30;
var numeros = [1,5,10,20,100,234];

// var max = Math.max(num1, num2);
// var max = Math.max( numeros ); // Imprime NaN
var max = Math.max.apply( Math, numeros ); // Imprime 234
console.log( max );

// ES6

let numeros2 = [1,5,10,20,100,234];
console.log(...numeros2 ) // Imprime los valores del arreglo separados por un espacio en blanco.
let max2 = Math.max( ...numeros2 ); // Imprime 234
console.log( max2 );