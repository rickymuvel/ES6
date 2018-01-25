var funciones = [];

for (var i = 0; i < 10; i++){
	funciones.push( function(){ console.log(i) });
	// funciones.push(
	// 	(function(valor){
	// 				return function(){
	// 					console.log(valor);
	// 				}
	// 	})(i)
	// )
}

// Esto ocurre porque el ultimo valor devuelto es 10, entonces, cuando llegue a funciones.forEach() la función va a iterar sobre el ultimo valor devuelto de i que es 10.

funciones.forEach(function(func){
	func();
});