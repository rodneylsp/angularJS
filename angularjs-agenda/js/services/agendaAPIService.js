/**
 *
 */

angular.module("agendaApp").factory("agendaAPI", function($http){

  var _getContatos = function (){
    return $http.get("http://localhost:8080/contatos/contatos");
  };

  var _saveContato = function (contato){
      return $http.post("http://localhost:8080/contatos/contatos", contato);
  };

  return {
    getContatos : _getContatos,
    saveContato : _saveContato
  };

});
