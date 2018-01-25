// Parámetros REST - Parámetros sin nombre
/*El parámetro "rest" es indicado con tres puntos (...) seguido del 
nombre que le asignaremos a dicho parámetro.

Este parámetro se convierte en un arreglo que contiene el "RESTo"
de los parámetros pasados a la función.

De ahí se origina el nombre REST*/

// function agregar_alumno( ){
// 	console.log( arguments );
// 	for(var i = 1; i< arguments.length; i++){
// 		arguments[0].push( arguments[i] );
// 	}

// 	return arguments[0];
// }

// var alumnos_arr = ["Fernando"];

// var alumnos_arr2 = agregar_alumno(alumnos_arr, "Maria", "Pedro", "Susana", "Juan");

// console.log("Solución 1:");
// console.log("----------------------------");
// console.log( alumnos_arr2 );

function agregar_alumno(arr_alumnos, ...alumnos){
	console.log( arguments );
	for(let i = 1; i< alumnos.length; i++){
		arr_alumnos.push( alumnos[i] );
	}

	return arr_alumnos;
}

let alumnos_arr = ["Fernando"];

let alumnos_arr2 = agregar_alumno(alumnos_arr, "Maria", "Pedro", "Susana", "Juan");


console.log("Solución 2:");
console.log("----------------------------");
console.log( alumnos_arr2 );