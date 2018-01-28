// Maps, Introducción a los mapas.
// es un nuevo tipo de colección de datos que por mucho 
// tiempo fue necesario en el javascript

// Es una colección de datos que tiene una llave y un valor

// tienen:
// 1. has()
// 2. delete()
// 3. clear()
// 4. size
// 5. iteraciones
// 6. set()
let mapa = new Map();

mapa.set("nombre", "Fernando");
mapa.set('edad', 31);
mapa.set('apellido');
mapa.set();
mapa.set({}, {hola: "Hola mundo"});

console.log( mapa );
console.log( mapa.size );
// obtener nombre
console.log( mapa.get('nombre') );
console.log( mapa.get('edad') );

// verificar que la llave exista:
console.log( mapa.has('apellido') );

// Eliminar una entrada:

mapa.delete('nombre');
console.log( mapa.has('nombre') );
console.log( mapa.get('nombre') );

mapa.set('edad');
console.log( mapa );

// Vaciar el mapa
mapa.clear();
console.log( mapa );