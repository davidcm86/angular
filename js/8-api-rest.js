angular
	.module('apiApp', [])
	.controller('apiAppCtrl', controladorPrincipal);

	function controladorPrincipal($scope, $http){
		var vm = this;
		vm.buscaCervezas = function(){
			var url = "http://api.openbeerdatabase.com/v1/beers.json?callback=JSON_CALLBACK";
			if(vm.nombre){
				url += "&query=" + vm.nombre;
			}
			console.log(url);
			$http.jsonp(url).success(function(respuesta){
				console.log("res:", respuesta);
				vm.cervezas = respuesta.beers;
			});
		}
}