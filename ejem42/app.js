// Inicialización de mapas
// recibe como parámetros un solo arreglo. 
// Luego dentro deben existir arreglos clave valor:

let mapa = new Map( [['nombre','ricky'], ['edad', 35]] );

console.log( mapa );

// Haciendo cosas raras:

let mapa2 = new Map( [['nombre', 'ricky'], [undefined, null]] );
console.log( mapa2 );
console.log( mapa2.get(undefined) ); // devuelve null