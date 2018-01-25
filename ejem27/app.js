// Destructuración de objetos anidados.

let autoGuardado = {
	archivo: "app.js",
	cursor: {
		linea: 7,
		columna: 16 
	},
	ultimoArchivo: {
		archivo: "index.html",
		cursor: {
			linea: 8,
			columna: 20
		}
	},
	otroNodo: {
		subNodo: {
			cursor: {
				linea: 11,
				columna: 11
			}
		}
	}
};

// Quiero destructurar "cursor"

let { cursor:cursorActivo } = autoGuardado;
console.log(cursorActivo);

// quiero el cursor del ultimoArchivo

let { ultimoArchivo:{ cursor:ultimoArchivo }} = autoGuardado;
console.log( ultimoArchivo );

let { otroNodo: {subNodo: { cursor:otroSuperNodo }} } = autoGuardado;

console.log( otroSuperNodo );

let otroSuperNodo2 = autoGuardado.otroNodo.subNodo.cursor;
console.log( otroSuperNodo2 );

let { linea, columna } = otroSuperNodo2;
console.log( linea, columna );