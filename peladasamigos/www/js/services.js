angular.module('starter.services', [])

 // Arqui vamos pegar a relação das quadras.

.factory('Products', function ($http) {
    // Might use a resource here that returns a JSON array

    var _getQuadras = function () {
        return $http.get("http://peladaservice.cloudapp.net/api/quadras");
    };

    var _getQuadra = function (id) {
        return $http.get("http://peladaservice.cloudapp.net/api/quadras/" + id);
    };

    var _postPedidoReservaQuadra = function (pedidoReservaQuadra) {
        return $http.post("http://peladaservice.cloudapp.net/api/quadras", pedidoReservaQuadra);
    }

    return {
        getProductsAll: _getQuadras,
        getProduct: _getQuadra,
        postPedidoProduct: _postPedidoReservaQuadra
    };
});