angular
	.module('contenedor', [])
	.controller('contenedorController', contenedorCtrl);

function contenedorCtrl() {
	this.total = 0;
	this.h1 = 'peque';

	this.sumar = function (){
		this.total += parseInt(this.cantidad);
	}
	this.restar = function (){
		this.total -= parseInt(this.cantidad);
	}
	// clases tiene las clases uno,dos y tres a la vez
	this.clases = ['uno','dos','tres'];
};	