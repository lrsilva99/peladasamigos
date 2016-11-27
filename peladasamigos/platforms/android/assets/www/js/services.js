 
angular.module('starter.services', [])

 // Arqui vamos pegar a relação das quadras.
    
.factory('Products', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var productsAll = [{
        id: 0,
        name: 'Planeta Gol BH',
        business_address: 'Endereço: R. Conselheiro Rocha, 1700 - Santa Teresa, Belo Horizonte - MG, 30150-210/n  Telefone:(31) 3481-6411',
        ico: 'img/quadra1.jpg'
    }, {
        id: 1,
        name: 'Jabulane Quadra Society',
        business_address: 'Av. Portugal, 2031 - Santa Amelia, Belo Horizont',
        ico: 'img/quadra2.jpg'
    }
    , {
        id: 2,
        name: 'Pró-Futebol Quadra Society',
        business_address: ' Av. dos Andradas, 4000 - Pompéia, Belo Horizonte',
        ico: 'img/quadra3.jpg'
    }
    ];

    // Lista dos serviso disponíveis(Horas para aluguel)
    // coloquei alguns exemplos apenas para ver funcionando. Acho que deve vir do banco.
    // talvéz seja necessário o ID do produto.
    var servisesAll = function (productId) {
        var service = [{
            id: 8,
            hour: '08:00',
            select: true,
            date: '01/01/2016'
        }, {
            id: 9,
            hour: '09:00',
            select: false,
            date: '01/01/2016'
        }, {
            id: 10,
            hour: '10:00',
            select: false,
            date: '01/01/2016'
        }, {
            id: 11,
            hour: '11:00',
            select: false,
            date: '01/01/2016'
        }, {
            id: 12,
            hour: '12:00',
            select: false,
            date: '01/01/2016'
        }, {
            id: 13,
            hour: '13:00',
            select: false,
            date: '01/01/2016'
        }, {
            id: 14,
            hour: '14:00',
            select: false,
            date: '01/01/2016'
        }];

        return service
}
    
    return {
        getProductsAll: function () {
            return productsAll;
        },  
        getProduct: function (productId) {
            for (var i = 0; i < productsAll.length; i++) {
                if (productsAll[i].id === parseInt(productId)) {
                    return productsAll[i];
                }
            }
            return null;
        },
        getServicesAll: function (productId) {
            return servisesAll(productId)
            
        }
    };
})
;


