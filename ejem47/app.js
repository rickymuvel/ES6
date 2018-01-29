// Clases como parámetros

// Caso 1

function creadorClases( definicionClase ){
  return new definicionClase();
}

let objeto = creadorClases( class {
  constructor(){
    this.nombre = undefined;
    this.edad = 35;
  }

  saludar(){
    console.log( "Hola!" );
  }
});

objeto.saludar();

// Caso 2

class Cuadrado {
  constructor(lado){
    this.lado = lado;
  }

  getArea(){
    return this.lado * this.lado;
  }
}


function imprimirCuadrado( cuadrado ){
  if(!(cuadrado instanceof Cuadrado)){
    console.log( "El parámetro enviado no es del tipo cuadrado" );
    return;
  }
  console.log( cuadrado.getArea() );
}

let mesa = new Cuadrado(10); // 100
let mesa = 123; // error

imprimirCuadrado( mesa ); // 100