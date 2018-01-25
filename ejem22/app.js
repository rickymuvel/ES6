// Object.assign()

// Nos permite agregar todas las propiedades de un objeto y asignarlas a otro objeto sin usar 
// la herencia directamente.

function mezclar( objReceptor, objDonador ){
	Object.keys( objDonador ).forEach( function(key){
		objReceptor[key] = objDonador[key];
	});
	return objReceptor;
}

var objReceptor = {};
var objDonador = {
	// nombre: "mi-archivo.js",
	get nombre(){
		return "mi-archivo.js"
	}
};

// console.log( objDonador.nombre)

console.log( mezclar(objReceptor, objDonador)); // ES5


Object.assign(objReceptor, objDonador); // ES6
console.log(objReceptor)