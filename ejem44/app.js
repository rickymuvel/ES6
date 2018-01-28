// Nuevo ciclo for of

let numeros = [100, 20, 30, 50, 200];

// Método habitual:
for( let i = 0; i< numeros.length; i++){
	console.log( numeros[i] );
}

// Un método más moderno.
for (let i in numeros ){
	console.log( numeros[i] );
}

// Método for of

for(let numero of numeros ){
	console.log( numero );
}

// Ejemplo con Personas

let personas = [
	{nombre: "Ricky", edad: 35},
	{nombre: "Nadia", edad: 37},
	{nombre: "Jessica", edad: 44},
	{nombre: "José", edad: 28},
	{nombre: "Alberto", edad: 79},
	{nombre: "Edwin", edad: 36}
];

for(let per of personas){
	console.log( per.nombre, per.edad );
}

// Ejemplo con Sets

let personas2 = new Set();
personas2.add({nombre: "Ricky", edad: 35});
personas2.add({nombre: "Nadia", edad: 37});
personas2.add({nombre: "Jessica", edad: 44});
personas2.add({nombre: "Jose", edad: 28});

for(let pers of personas2){
	console.log( pers.nombre, pers.edad );
}

// Ejemplo con Mapas:
// OJO. Los mapas no permiten tener llaves duplicadas. Toma el ultimo clave - valor.

let personas3 = new Map([
	["nombre","Ricky"], 
	["apellido", "Muñoz"]
]);

for(let per3 of personas3 ){
	console.log( per3 );
}

// Usamos el "let" en la declaración de la variable porque queremos que el scope esté solo en el ciclo y ya no fuera de el.
console.log( per3 ); // daría error porque per3 solo fue definido en el scope de bucle