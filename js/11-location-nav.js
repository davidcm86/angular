angular
	.module('navApp', ['ngRoute']) // directiva para cargar rutas
	.config(function($routeProvider){ // routeProvider contiene los metodos
		$routeProvider
			.when("/", {
				controller: "navController",
				controllerAs: "nc",
				templateUrl: "11-location-nav.html"
			})
			.when("/11-coches", {
				controller: "navController",
				controllerAs: "nc",
				templateUrl: "11-coches.html"
			})
			.when("/11-potencia", {
				controller: "navController",
				controllerAs: "nc",
				templateUrl: "11-potencia.html"
		});
	})
	.controller("navController", navController);


function navController ($location) {
	var nc = this;
	nc.localizacion = function (ruta) {
		return $location.path() == ruta; //$location.path te pasa la ruta en la que estas
	}
}