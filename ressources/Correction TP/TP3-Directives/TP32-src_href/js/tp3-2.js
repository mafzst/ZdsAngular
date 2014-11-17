(function() {
  var app = angular.module('zesteStore', []);

  app.controller('StoreController', function() {
    this.product = fruit;
  });

  var fruit = {
      name: 'Clem',
      description: "Une jolie clémentine !",
      price: 2.50,
      stock: 32,
      image: './img/clem1.png',
      };
})();
