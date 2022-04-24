angular
  .module('listaTelefonica')
  .controller(
    'listaTelefonicaCtrl',
    function ($scope, contatos, serialGenerator, operadoras) {
      $scope.app = 'Projeto - Lista Telefonica - AngularJs 1.8';
      $scope.contatos = contatos.data;
      $scope.operadoras = operadoras.data;

      var generateSerial = function (contatos) {
        contatos.forEach(function (item) {
          item.serial = serialGenerator.serial;
        });
      };

      $scope.adicionarContato = function (contato) {
        contato.data = new Date();
        contato.serial = serialGenerator.generate();
        contatosAPI.saveContato(contato);
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
      };

      $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
          if (!contato.selecionado) return contato;
        });
        console.log($scope.contatos);
      };

      $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
          return contato.selecionado;
        });
      };

      $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
      };
      generateSerial($scope.contatos);
    }
  );
