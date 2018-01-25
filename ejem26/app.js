// Destructuración de objetos

let ajustes = {
	nombre: "Ricky Muñoz",
	email: "luenmuvel@gmail.com",
	facebook: "rickymuvel",
	google: "rickymuvel123",
	premium: true
}

let nombre = ajustes.nombre,
	email = ajustes.email,
	facebook = ajustes.facebook;

console.log(nombre, email, facebook);

// Aplicando la destructuración de objetos

let { nombre, email, facebook, google, premium } = ajustes;
console.log(nombre, facebook, google, premium);

// El nombre de las variables debe ser exactamente el mismo que el de las claves del objeto.
// En caso sea necesario asignar otro nombre a la variable hay que hacer lo siguiente;

let { nombre, email, facebook, google, premium:dePago } = ajustes;
console.log( dePago );


// El orden de la declaración no altera el producto. En realidad podríamos hacer:

let { premium:dePago, email, facebook, nombre,  google } = ajustes;

// y no hay ningún problema
// además podríamos inicializar las variables en caso no existan en el objeto original:

let { premium:dePago, email, facebook, nombre,  google, twitter="rickymuvel" } = ajustes;
console.log( twitter );

// o bien podríamos asignarle otro nombre de variable:
let { premium:dePago, email, facebook, nombre,  google, twitter:cuentaTwi="rickymuvel" } = ajustes;
console.log( cuentaTwi );
