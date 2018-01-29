// Promesas, problemática y su necesidad:

function tareaAsincrona() {
	
	let promesa = new Promise( function(resolve, reject ){
		setTimeout(function(){
			console.log( "Proceso asincrono terminado" );
			resolve();
		}, 1300);
	});

	return promesa;
}

tareaAsincrona().then( function(){
	console.log( "Todo ok" );
}, function(){
	console.error( "Todo mal" );
});

// El reject es opcional