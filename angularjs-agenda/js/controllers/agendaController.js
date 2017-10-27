/**
 *
 */

angular.module("agendaApp").controller("agendaController", function ($scope, agendaAPI){

	$scope.contato = undefined;

	$scope.contatos = [];

	$scope.operadoras = [
		{nome: "Oi", codigo:31, categoria: "Celular", preco:2},
		{nome: "Vivo", codigo:14, categoria: "Celular", preco:1},
		{nome: "Tim", codigo:21, categoria: "Fixo", preco:3}
	];

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


	$scope.adicionarContato = function(contato){

		contato.data = new Date();
		agendaAPI.saveContato(contato)
		.then(function(response){
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

});
