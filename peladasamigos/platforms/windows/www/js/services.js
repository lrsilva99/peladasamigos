angular.module('starter.services', [])

 // Arqui vamos pegar a relação das quadras.

.factory('Products', function ($http) {
    
    // Pegar a relação de todas as quadras e seus horários disponíveis ou alugados
    var _getQuadras = function () {
        return $http.get("http://peladaservice.cloudapp.net/api/quadras");
    };
    // Pegar a relação de uma determinada quadra e seus horários disponíveis ou alugados
    var _getQuadra = function (id) {
        return $http.get("http://peladaservice.cloudapp.net/api/quadras/" + id);
    };

    // Post da quadra e horário(s) selecionado(s) pelo usuário.
    var _postPedidoReservaQuadra = function (pedidoReservaQuadra) {
        return $http.post("http://peladaservice.cloudapp.net/api/quadras", pedidoReservaQuadra);
    }

    return {
        getProductsAll: _getQuadras,
        getProduct: _getQuadra,
        postPedidoProduct: _postPedidoReservaQuadra
    };
});