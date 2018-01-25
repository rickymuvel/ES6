/// Funciones de flecha
// Ejemplo 1 (Son equivalentes):
var miFuncion2 = function( valor ){
	return valor;
}

let miFuncion1 = valor => valor;

console.log(miFuncion1("Hola"))
console.log(miFuncion2("Mundo"))

// Ejemplo 2: (Son equivalentes)

var sumar2 = function(num1, num2){
	return num1 + num2;
}

var sumar1 = (num1, num2) => num1 + num2;

console.log(sumar1(5 , 1));

// Ejemplo 3: (Son equivalentes)

var saludar2 = function(){
	return "Hola mundo";
}

let saludar1 = () => "Hola mundo";

// Ejemplo 4: (Son equivalentes)

var saludarPersona = function(nombre){
	var salida = "Hola "+ nombre;
	return salida;
}

let saludarPersona2 = nombre => {
	let salida = `Hola ${nombre}`;
	return salida;
}

console.log(saludarPersona2("Ricky"));

// Ejemplo 5: (Son equivalentes)

var obtenerLibro = function(id){
	return {
		id:id,
		nombre: "Harry Potter"
	};
}

let obtenerLibro2 = id => ({ id:id, nombre: "Harry Potter"});
console.log(obtenerLibro2(1));

// Ejemplo 6: (Funciones anónimas)
// Funciones que son ejecutadas inmediatamente despues de ser creadas

var saludo1 = function(nombre){
	return "Hola "+ nombre;
}("Ricky");

console.log(saludo1);

let saludo2 = ( nombre => `Hola ${nombre}`)("Nadia");
console.log( saludo2 );

