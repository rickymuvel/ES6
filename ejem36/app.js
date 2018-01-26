// Los Set
// Historicamente, Javascript solo ha tenido un tipo de colección de datos: los array
// Y aunque muchos digan que los objetos son una colección de pares de valores, no son realmente una colección de datos.

// En otros lenguajes:

// 1. listas
// 2. Arreglos
// 3. Colecciones
// 4. Mapas,
// 5. Etc.

// Qué son los Sets?

// on una lista ordenada de valores sin duplicados
// Permiten un rápido acceso a la data que contienen

// Los Set tienen funciones nativas en su prototipo y no pueden tener duplicados.

let items = new Set();

items.add(10)
items.add(11)
items.add(8)
items.add(8) // este no se añade porque ya existe.
items.add("8") // Este sí lo acepta porque es otro tipo de dato: string.
			 // Antes de insertar un valor, dentro del set hay un Object.is para verificar que exista el dato.
items.add(7)

console.log( items );
console.log( items.size ); // Obtenemos el numero de elementos, es como un length para los arreglos.

let items2 = new Set([1,2,3,4,5,6,7,7,7,7,7,7,7,7,7,7,7, 8]); // Me crea un set con un arreglo con solo 8 elementos, ignorando los otros 7 petidos
console.log( items2 );
console.log( items2.size );

// Como saber si un elemento existe?

console.log( items2.has(8) );