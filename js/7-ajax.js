angular
	.module('apiApp', [])
	.controller('apiAppCtrl', ['$http', controladorPrincipal]);

function controladorPrincipal($http){
	var vm = this;
	vm.buscaEnRegion = function(){
	// llamámos a las url que vienen del select
	$http.get(vm.url).success(function(respuesta){
		vm.paises = respuesta;
	});
	}
}