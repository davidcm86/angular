angular
	.module('navApp', ['ngRoute']) // directiva para cargar rutas
	.config(function($routeProvider){ // routeProvider contiene los metodos
		$routeProvider
			.when("/11-location-nav.html", {
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
	nc.ruta = "";
	nc.localizacion = function (ruta) {
		console.log(ruta);
		if (ruta != "") {
			return $location.path() == ruta; //$location.path te pasa la ruta en la que estas
		}
	}
}