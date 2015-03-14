var app = angular.module('directivas', []);
//las directivas pueden sustituir parte de tu código, elementos, tags, clases...
app.directive('pruebas', function(){
	return {
	    restrict: 'CEMA', // C: class, E: element, M: comments, A: attributes
	    template: 'Sustituido' // sustituimos la class, element....por Sustituido
  	}
});