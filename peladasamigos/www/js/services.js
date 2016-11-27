angular.module('starter.services', [])

 // Arqui vamos pegar a relação das quadras.

.factory('Products', function ($http) {
    // Might use a resource here that returns a JSON array

    var _getQuadras = function () {
        return $http.get("http://localhost:8181/api/quadras");
    };

    var _getQuadra = function (id) {
        return $http.get("http://localhost:8181/api/quadras/" + id);
    };

    var _postPedidoReservaQuadra = function (pedidoReservaQuadra) {
        return $http.post("http://localhost:8181/api/quadras", pedidoReservaQuadra);
    }

    return {
        getProductsAll: _getQuadras,
        getProduct: _getQuadra,
        postPedidoProduct: _postPedidoReservaQuadra
    };
});