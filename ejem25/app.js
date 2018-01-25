// Acceso al prototipo con la referencia SUPER

let persona = {
	saludar(){
		return "Hola";
	}
}

let amigo = {
	saludar(){
		// así se hacía antes:
		// return Object.getPrototypeOf(this).saludar.call(this) + ", saludos!!!";
		return super.saludar()+ ", saludos!!!";
	}
}

Object.setPrototypeOf( amigo, persona );
console.log( amigo.saludar());