// Remover valores de un set

let items = new Set([1,2,3,4,5]);

console.log( items.size );

items.delete(2);

console.log( items.size );

// Eliminar todos los elementos del set:

items.clear();
console.log( items.size );
console.log( items );