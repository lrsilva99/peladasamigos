angular.module('starter.controllers', ['ngCordova'])


.controller('HomeCtrl', function ($scope) {})


.controller('ProductsCtrl', function ($scope, $http, Products) {
    Products.getProductsAll().success(function (data) {
        console.log(data);
        $scope.products = data;
    }).error(function (data, status) {
        console.log("Erro ao executar get");
    });
})

.controller('ProductServicesCrtl', function ($scope, $stateParams, Products) {


    Products.getProduct($stateParams.productId).success(function (data) {
        console.log(data);
        $scope.product = data;
    }).error(function (data, status) {
        console.log("Erro ao executar get");
    });

    $scope.fazerPedidoReserva = function (quadra) {

        var push = PushNotification.init(
        {
            "android": { "senderID": "747034740221" },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            },
            windows: {}
        });

        push.on('registration', function (data) {
            var pedidoReservaQuadra = {
                deviceId: data.registrationId,
                quadra: quadra
            }

            Products.postPedidoProduct(pedidoReservaQuadra).success(function (data) {
                console.log(data);
                $scope.product = data;
            }).error(function (data, status) {
                console.log("Erro ao executar get");
            });
        });

        push.on('notification', function (data) {
            alert(data.title + " Message: " + data.message);
        });

        push.on('error', function (e) {
            alert(e);
        });
    }
});

