angular
	.module('postApp', [])
	.controller('postController', ['$http','postController']);

function postController ($http) {
	var pc = this;
	pc.datos = {};

	pc.enviarDatos = function(){
		$http.post("datos-formulario.php", pc.datos)
			.success(function(respuesta){
				console.log(respuesta);
				var respuesta = respuesta;
			});
	}
}	