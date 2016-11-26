angular.module('starter.controllers', [])

.controller('HomeCtrl', function ($scope,$cordovaDevice) {
    
    alert($cordovaDevice.getUUID())
    
})


.controller('ProductsCtrl', function ($scope, Products) {
    $scope.products = Products.getProductsAll()
})
.controller('ProductServicesCrtl', function ($scope, $stateParams, Products) {
    $scope.product = Products.getProduct($stateParams.productId);
    $scope.servicesAll = Products.getServicesAll($stateParams.productId);
});

