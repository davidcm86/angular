angular
	.module('apiApp', [])
	.controller('apiAppCtrl', controladorPrincipal);

function controladorPrincipal($scope, $http){
	var vm = this;
	vm.orden = false;
	vm.campo = "name";
	var url = "http://api.openbeerdatabase.com/v1/beers.json?callback=JSON_CALLBACK";

	vm.buscaCervezas = function(nombre){
		url += "&query=" + nombre;
		if(nombre){ // al rellenarlo gracias al binding ya tenemos los datos
			console.log(nombre);
			url += "&query=" + nombre;
		}
		$http.jsonp(url).success(function(respuesta){
			console.log("res:", respuesta);
			vm.cervezas = respuesta.beers;
		});
	}
}	