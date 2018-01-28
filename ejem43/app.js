// forEach de mapas
let mapa = new Map([ ["nombre", "Ricky"], ["edad", 35]]);

mapa.forEach( 
	(valor, llave , mapaOrigen ) => 
		console.log( `llave: ${llave}, valor: ${valor}`));