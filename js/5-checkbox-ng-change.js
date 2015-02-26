angular
	.module('contenedor', [])
	.controller('contenedorController', checkController);

function checkController() {
	this.aviso = function(){
		console.log('Me has pinchado');
	}
};	