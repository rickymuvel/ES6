// Destructuración de parámetros
// ES5
function crearJudador( nickname, opciones ){

	opciones = opciones || {};

	let hp =  opciones.hp,
		sp = opciones.sp,
		clase = opciones.clase;

	console.log( nickname, hp, sp, clase );

	// Codigo para crear el jugador...

}

crearJudador("Ricky", {
	hp: 100,
	sp: 50,
	clase: "Mago"
})

// ES6
function crearJudador2( nickname, 
	{ hp, sp, clase } = { hp:100, sp:50, clase: "Soldado" } 
){
	console.log( nickname, hp, sp, clase );
	// Codigo para crear el jugador...
}

crearJudador2("Ricky", {
	hp: 100,
	sp: 50,
	clase: "Mago"
})

// Notas:
// En la línea 24 estamos igualando un parámetro de tipo objeto a un objeto vacío { hp, sp, clase} = {}
// Esto con la finalidad de que si al instanciar la función no se manda dicha información, 
// la aplicación no se caiga.

// Luego más adelante lo que hicimos es ponerle valores por defecto a ese objeto vacío

crearJudador2("Celcius");

// imprime:
// Celcius 100 50 Soldado