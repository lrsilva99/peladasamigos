angular.module('starter.controllers', ['ngCordova', 'ngCordovaOauth', 'ngStorage', 'angularjs-crypto'])

.controller('HomeCtrl', function ($http, $scope, $cordovaOauth, $localStorage, $crypto) {
    $scope.login = function () {
       
        if ($localStorage.accessToken){

            $http.get('https://graph.facebook.com/v2.5/me', { params: { access_token: $localStorage.accessToken, fields: 'id,name,email,gender,location,picture', format: 'json' } }).then(function (result) {               
            }, function (error) {
                $localStorage.accessToken = null;
                alert("Logar novamente")
            });
        }
        else {
            $cordovaOauth.facebook("1084296558351646", ["email", "public_profile"], { redirect_uri: "http://localhost/callback" }).then(function (result) {
                $localStorage.accessToken = result.access_token;
                $http.get('https://graph.facebook.com/v2.5/me', { params: { access_token: result.access_token, fields: 'id,name,email,gender,location,picture', format: 'json' } }).then(function (result2) {
                    $localStorage.id = crypto.createHash('sha256').update(result2.data.id).digest(CryptoJS);
                    
                });
        }, function (error) {
            alert("Auth Failed..!!" + error);
        });
        }; 
    }
})

.controller('ProductsCtrl', function ($scope, $http, $localStorage, Products) {
    if ($localStorage.access_token) {
        $http.get('https://graph.facebook.com/v2.5/me', { params: { access_token: result.access_token, fields: 'id,name,email,gender,location,picture', format: 'json' } }).then(function (result2) {
            Products.getProductsAll().success(function (data) {
                console.log("Get produtos executado com sucesso");
                alert("Get produtos executado com sucesso");
                $scope.products = data;
            }).error(function (data, status) {
                console.log("Erro ao executar get produtos");
            });
        }, function (error) {
            alert("Erro de autentica��o" + error);
        });

    } else {
        alert('Usu�rio n�o autenticado')
    }
    

})

.controller('ProductServicesCrtl', function ($scope, $stateParams, $ionicPopup, Products) {

    $http.get('https://graph.facebook.com/v2.5/me', { params: { access_token: result.access_token, fields: 'id,name,email,gender,location,picture', format: 'json' } }).then(function (result2) {
        Products.getProduct($stateParams.productId).success(function (data) {
        console.log("Get produto executado com sucesso");

        var reservaParaAlteracao = [
            {
                hour: data.reservas[0].hour,
                select: data.reservas[0].select,
                selectBD: data.reservas[0].select
            },
            {
                hour: data.reservas[1].hour,
                select: data.reservas[1].select,
                selectBD: data.reservas[1].select
            },
            {
                hour: data.reservas[2].hour,
                select: data.reservas[2].select,
                selectBD: data.reservas[2].select
            },
            {
                hour: data.reservas[3].hour,
                select: data.reservas[3].select,
                selectBD: data.reservas[3].select
            },
            {
                hour: data.reservas[4].hour,
                select: data.reservas[4].select,
                selectBD: data.reservas[4].select
            },
            {
                hour: data.reservas[5].hour,
                select: data.reservas[5].select,
                selectBD: data.reservas[5].select
            },
            {
                hour: data.reservas[6].hour,
                select: data.reservas[6].select,
                selectBD: data.reservas[6].select
            },
            {
                hour: data.reservas[7].hour,
                select: data.reservas[7].select,
                selectBD: data.reservas[7].select
            }
        ]

        data.reservas = reservaParaAlteracao;

        $scope.product = data;
        }, function (error) {
            $cordovaOauth.facebook("1084296558351646", ["email", "public_profile"], { redirect_uri: "http://localhost/callback" }).then(function (result) {
                $localStorage.accessToken = result.access_token;
                $http.get('https://graph.facebook.com/v2.5/me', { params: { access_token: result.access_token, fields: 'id,name,email,gender,location,picture', format: 'json' } }).then(function (result2) {
                    $localStorage.id = result2.data.id;
                    //Alert recuperando o access_token no localStorage
                });
            }, function (error) {
                alert("Auth Failed..!!" + error);
            });
        });
    }).error(function (data, status) {
        console.log("Erro ao executar get produto");
    });

    $scope.fazerPedidoReserva = function (quadra) {
        //Configura��o do  PushNotification  
        //747034740221 e o id do AP no google
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

            var quadraParaPost = {
                _id: quadra._id,
                name: quadra.name,
                business_adress: quadra.business_adress,
                ico: quadra.ico,
                reservas: [
                    {
                        hour: quadra.reservas[0].hour,
                        select: quadra.reservas[0].select && !quadra.reservas[0].selectBD
                    },
                    {
                        hour: quadra.reservas[1].hour,
                        select: quadra.reservas[1].select && !quadra.reservas[1].selectBD
                    },
                    {
                        hour: quadra.reservas[2].hour,
                        select: quadra.reservas[2].select && !quadra.reservas[2].selectBD
                    },
                    {
                        hour: quadra.reservas[3].hour,
                        select: quadra.reservas[3].select && !quadra.reservas[3].selectBD
                    },
                    {
                        hour: quadra.reservas[4].hour,
                        select: quadra.reservas[4].select && !quadra.reservas[4].selectBD
                    },
                    {
                        hour: quadra.reservas[5].hour,
                        select: quadra.reservas[5].select && !quadra.reservas[5].selectBD
                    },
                    {
                        hour: quadra.reservas[6].hour,
                        select: quadra.reservas[6].select && !quadra.reservas[6].selectBD
                    },
                    {
                        hour: quadra.reservas[7].hour,
                        select: quadra.reservas[7].select && !quadra.reservas[7].selectBD
                    }
                ]
            }

            var pedidoReservaQuadra = {
                //Obtendo o id do device para posterior enviado da confirma��o da reserva.
                deviceId: data.registrationId,
                quadra: quadraParaPost
            }

            Products.postPedidoProduct(pedidoReservaQuadra).success(function (data) {
                console.log("Post enviado com sucesso");
                $ionicPopup.alert({
                    title: 'Pedido de reserva enviado com sucesso!'
                });

            }).error(function (data, status) {
                console.log("Erro ao executar post");
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

