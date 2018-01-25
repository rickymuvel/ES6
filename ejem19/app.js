// Métodos concisos: Eliminación de la palabra "function despues del getNombre"

var persona = {
	nombre: "Ricky",
	getNombre: function(){
		return this.nombre ;
	}
}

var persona = {
	nombre: "Ricky",
	getNombre(){
		return this.nombre ;
	}
}

console.log(persona.getNombre());