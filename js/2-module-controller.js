angular
	.module('miModulo', []) 
	// sin poner el scope utilizamos el this. En las vistas tendremos que poner un nombre al controlador llamado.
	// de esta manera no hay problema con el minify
	// de esta manera se pueden poner mas controladores en un mismo DOM
	.controller('miControlador', function(){
		this.color = 'Verde';
	});