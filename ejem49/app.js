// Herencia de clases:

class Rectangulo {
	constructor(alto, largo){
		this.alto = alto;
		this.largo = largo;
	}

	getArea(){
		return this.alto * this.largo;
	}
}

let rectangulo = new Rectangulo(3,2);

// console.log( rectangulo.getArea() ); // 6

class Cuadrado extends Rectangulo {
	constructor(lado){
		super(lado, lado) // ejecutamos el constructor del padre
	}
}

let cuadrado = new Cuadrado(5);
console.log( cuadrado.getArea() );

console.log( cuadrado instanceof Cuadrado ); // true
console.log( cuadrado instanceof Rectangulo ); // true