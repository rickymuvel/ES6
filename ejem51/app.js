// Promesas, problemática y su necesidad:

function tareaAsincrona() {
	setTimeout(function(){
		console.log( "Proceso asincrono terminado" );
		reject();
	}, 1300);
}

tareaAsincrona();
console.log( "Codigo secuencial" );

function resolve(){
	console.log( "Todo ok" );
}

function reject(){
	console.log( "Todo mal" );
}