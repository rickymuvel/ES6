// Los WeakSet
// Trabajan de una manera similar a los Sets

let set = new WeakSet();

let persona1 = {
	nombre: "Juan carlos"
}

let persona2 = {
	nombre: "Maria Perez"
}

set.add(persona1);
set.add(persona2);

set.delete(persona1);
console.log( set );

// 1. En un WeakSet, ADD(), HAS(), REMOVE(), dan error si enviamos como parámetro algo que no sea un objeto.
// 2. No tiene manera de hacer repeticiones o ciclos for in.
// 3. Los WeakSet no tienen keys(), values(), por lo uqe no hay manera vía programación de saber cuantos elementos hay dentro.
// 4. No tienen un for-each tampoco.
// 5. No tienen propiedad size.