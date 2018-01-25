// Identificando funciones de flecha y otros ejemplos

var restar = (a,b) => a-b;

console.log(typeof restar);
console.log(restar instanceof Function);

// No se puede declarar new en funciones de flecha.

var restar2 = new restar(1,2); // lanza error porque no tiene un constructor.

// Las funciones de flecha no tienen el arreglo 'arguments'
((a,b) => {
	console.log( arguments[0]); // arguments no está definido en la función de flecha.
})();

// solución:
function ejemplo(x,y){
	((a,b) => {
		console.log( arguments[0]); // arguments no está definido en la función de flecha.
	})();
}

ejemplo(10,20);