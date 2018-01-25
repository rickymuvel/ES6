// parametros por defecto (Opcionales)
// Los parámetors opcionales pueden ser textos, objetos, funciones, etc.
function saludo( mensaje = "Hola Mundo", tiempo = 1500 ){
	// mensaje = mensaje || "Hola mundo";
	mensaje = ( typeof mensaje !== "undefined") ? mensaje : "Hola mundo 2!";

	setTimeout( function() {
		console.log( mensaje );
	}, tiempo);
}
// Si no pasamos un tiempo, este toma el valor undefinied, y si es undefined
// Entonces el setTimeout es inmediatamente ejecutado.
saludo();


// ------------------------------

function saludar( fn = fnTemporal, persona = { nombre: "Ricky"} ){
	console.log( typeof fn );
	if(typeof fn == "undefined" ){
		console.error('No es una función');
		return;
	}

	fn();
	console.log( persona );
}

function fnTemporal(){
	console.log("Hola Mundo FN");
}

var persona = {
	nombre: "Luis Enrique"
}
saludar(fnTemporal, persona);