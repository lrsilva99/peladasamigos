angular.module('starter.services', ['ngStorage'])

 // Arqui vamos pegar a relação das quadras.

.factory('Products', function ($http, $localStorage) {
    
    // Pegar a relação de todas as quadras e seus horários disponíveis ou alugados
    var _getQuadras = function () {
        return $http.get("https://peladaservice.cloudapp.net/api/quadras", {
            headers: {
                'token': $localStorage.accessToken,
                'id': $localStorage.id,
            }
        });
    };
    // Pegar a relação de uma determinada quadra e seus horários disponíveis ou alugados
    var _getQuadra = function (id) {
        return $http.get("https://peladaservice.cloudapp.net/api/quadras/" + id, {
            headers: {
                'token': $localStorage.accessToken,
                'id': $localStorage.id,
            }
        });
    };

    // Post da quadra e horário(s) selecionado(s) pelo usuário.
    var _postPedidoReservaQuadra = function (pedidoReservaQuadra) {
        return $http.post("https://peladaservice.cloudapp.net/api/quadras", pedidoReservaQuadra, {
            headers: {
                'token': $localStorage.accessToken,
                'id': $localStorage.id,
            }
        });
    }

    return {
        getProductsAll: _getQuadras,
        getProduct: _getQuadra,
        postPedidoProduct: _postPedidoReservaQuadra
    };
});