angular
	.module("app", [])
	// esta factoria nos sirve para guardar y mostrar datos que podrán ser llamados y cambiados por variso controladores
	.factory("gatosFactory", function(){
		var nombresGatos = ['Dolfo','Rubi'];
		var interfaz = {
			getGatos: function(){
				return nombresGatos;
			},
			nuevoGato: function(nombreGato){
				console.log('Nombre gato en factoria: ' + nombreGato);
				nombresGatos.push(nombreGato);
			}
		}
		return interfaz;
	})
	.controller("gatosController", function(gatosFactory){
		var vm = this;
		vm.nuestrosGatos = gatosFactory.getGatos();
		vm.funciones = {
			guardarNombreGato: function(){
				console.log(vm.nombreGato);
				gatosFactory.nuevoGato(vm.nombreGato);
				vm.mensaje = "Nombre de gato guardado";
			},
			borrarGato: function(){
				vm.mensaje = "";
			}
		}
	})
	.controller("gatosAmigosController", function(gatosFactory){
		var ga = this;
		ga.nuestrosGatos = gatosFactory.getGatos();
	});