/**
 * Exemplo de serviço criado com factory.
 */

angular.module("agendaApp").factory("agendaAPI", function($http, config){

  var _getContatos = function (){
    return $http.get(config.baseUrl + "/contatos");
  };

  var _saveContato = function (contato){
      return $http.post(config.baseUrl + "/contatos", contato);
  };

  return {
    getContatos : _getContatos,
    saveContato : _saveContato
  };

});
