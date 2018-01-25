// Funciones de flecha parte 2
// Ejemplo 7: (No hay cambios en el objeto 'this')

// var manejador = {
// 	id: 123,
// 	init: function(){
// 		document.addEventListener("click", function(event){
// 			console.log(this); // apunta al objeto global.
// 			this.clickEnPagina( event.type );
// 		}, false);
// 	},
// 	clickEnPagina: function( type ){
// 		console.log( "Manejando", type, "para el id:", this.id );
// 	}
// }

// manejador.init();

// solución al problema del objeto global en el ES5.
// var manejador2 = {
// 	id: 123,
// 	init: function(){
// 		document.addEventListener("click", (function(event){
// 			this.clickEnPagina( event.type );
// 		}).bind(this), false);
// 	},
// 	clickEnPagina: function( type ){
// 		console.log( "Manejando", type, "para el id:", this.id );
// 	}
// }

// La solución pasa por encerrar la función callback entre paréntesis y bindearla pasandole el this.

// manejador2.init();

// Ahora con ES6

let manejador = {
	id: 123,
	init: function() {
		document.addEventListener("click", event => this.clickEnPagina( event.type ))
	},
	clickEnPagina: function(type){
		console.log("Manejando", type, "para el id:", this.id )
	}
}

manejador.init();