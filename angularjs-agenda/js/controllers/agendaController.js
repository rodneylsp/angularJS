/**
 *
 */

angular.module("agendaApp").controller("agendaController", function ($scope, agendaAPI, operadoraAPI, serialGenerator){

	$scope.contato = undefined;

	$scope.contatos = [];

	$scope.operadoras = [];

	$scope.classe1 = "selecionado";
	$scope.classe2 = "negrito";


	var carregarContatos = function(){

		agendaAPI.getContatos()
			.then(function(response){
				$scope.contatos = response.data;
			}, function(response){
				alert(url + " está indisponível.");
			});

	};


	var carregarOperadoras = function(){
		operadoraAPI.getOperadoras()
		.then(function(response){
			$scope.operadoras = response.data;
		}, function(response){
			alert(url + " está indisponível.");
		});
	};


	$scope.adicionarContato = function(contato){

		contato.serial = serialGenerator.generate();
		contato.data = new Date();

		agendaAPI.saveContato(contato).then(function(response){

			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			carregarContatos();

		}, function(response){

				alert("Erro ao inserir contato.");
		});
	};

	$scope.apagarContato = function(contatos){
		$scope.contatos = contatos.filter(function (contato){
			if(!contato.selecionado) return contato;
		});
	};

	$scope.isContatoSelecionado = function(contatos) {
		return contatos.some(function (contato){
			return contato.selecionado;
		});
	};

	$scope.ordernarPor = function (campo) {
		$scope.ordenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	carregarContatos();
	carregarOperadoras();

});
