/*
* config é usado para configurar serviços provider
*/
angular.module("agendaApp").config(function(serialGeneratorProvider){

  serialGeneratorProvider.setLength(10);
  
});
