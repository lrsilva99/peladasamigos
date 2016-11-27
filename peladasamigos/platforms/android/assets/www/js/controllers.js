angular.module('starter.controllers', ['ngCordova'])

.controller('HomeCtrl', function ($scope,$cordovaPush) {

    //link do exemplo que utilizei https://phonegappro.com/tutorials/apache-cordova-phonegap-push-notification-tutorial-part-2/    
  
    //Não sei onde devo colocar o código abixo

    document.addEventListener("deviceready",onDeviceReady,false);
    function onDeviceReady(){
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
            $scope.registrationId = data.registrationId
            document.getElementById("gcm_id").innerHTML = data.registrationId;
        });

        push.on('notification', function(data) {
            alert(data.title+" Message: " +data.message);
        });

        push.on('error', function(e) {
            alert(e);
        });
    }



})


.controller('ProductsCtrl', function ($scope, Products) {
    $scope.products = Products.getProductsAll()
})
.controller('ProductServicesCrtl', function ($scope, $stateParams, Products) {
    $scope.product = Products.getProduct($stateParams.productId);
    $scope.servicesAll = Products.getServicesAll($stateParams.productId);
});

