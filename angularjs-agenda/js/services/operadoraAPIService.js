/**
 * Exemplo de serviço criado com service.
 */

angular.module("agendaApp").service("operadoraAPI", function($http, config){

  this.getOperadoras = function (){
    return $http.get(config.baseUrl + "/operadoras");
  };

});
