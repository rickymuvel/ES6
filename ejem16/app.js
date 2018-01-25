// Funciones de fecha y arreglos

var arreglo = [5,10,11,2,1,9,20];

var ordenado = arreglo.sort(function(a,b){
	return a-b;
})

console.log( ordenado );

let ordenado2 = arreglo.sort((a,b)=>a-b);
console.log(ordenado2);