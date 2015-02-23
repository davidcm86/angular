angular
	.module('operacionesApp', [])
	.controller('operacionesCtrl', controladorPrincipal);
// al cargar nuestro controlador, llamamos directamente a este método
function controladorPrincipal() {
	// iniciamos las variables
	this.total = 0;
	this.cantidad = 0; 
	// en este controlador, llamamos al método sumar, parseamos y sumamos al total de la variable
	this.sumar = function (){
		this.total += parseInt(this.cantidad); 
	}

	this.restar = function (){
		this.total -=parseInt(this.cantidad)
	}
}
