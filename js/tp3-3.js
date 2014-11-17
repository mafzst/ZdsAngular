(function() {
  var app = angular.module('zesteStore', []);

  app.controller('StoreController', function() {
    this.product = fruit;

    this.currentImage = 0;

    this.setCurrentImage = function(index) {
      this.currentImage = index;
    }
  });

  var fruit = {
      name: 'Clem',
      description: "Une jolie clémentine !",
      price: 2.50,
      stock: 32,
     images: [
        "img/clem1.png",
        "img/clem2.png"
      ],
      };
})();
