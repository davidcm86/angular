angular
	.module('routesApp', ['ngRoute']) // directiva para cargar rutas
	.config(function($routeProvider){ // routeProvider contiene los metodos
		$routeProvider
			.when("/10-routes.html", {
				controller: "rutaController",
				controllerAs: "rc",
				templateUrl: "10-routes.html"
			})
			.when("/10-bienvenida", {
				controller: "rutaController",
				controllerAs: "rc",
				templateUrl: "10-bienvenida.html"
			})
			.when("/10-despedida", {
				controller: "rutaController",
				controllerAs: "rc",
				templateUrl: "10-despedida.html"
		});
	})
	.controller('rutaController', function(){
		console.log('El controlador rutaController');
	});