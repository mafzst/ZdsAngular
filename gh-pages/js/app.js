(function() {
  var app = angular.module('zesteStore', []);

  app.controller('StoreController', function() {
    this.products = fruits;
  });

  app.controller("TabController", function() {
    this.tab = 1;

    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };

    this.setTab = function(setTab) {
      this.tab = setTab;
    };
  });

  app.controller('GalleryController', function(){
    this.current = 0;

    this.setCurrent = function(imageNumber){
      this.current = imageNumber || 0;
    };
  });

  app.controller("ReviewController", function(){

    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var fruits = [{
      name: 'Clem',
      description: "Une jolie clémentine !",
      price: 2.50,
      stock: 12,
      images: [
        "img/clem1.png",
        "img/clem2.png"
      ],
      reviews: [{
        stars: 5,
        body: "I love this !",
        author: "joe@example.org",
        createdOn: 1397490980837
      }]
    }, {
      name: 'Citron',
      description: "Véritable citron de Menton",
      price: 0.75,
      stock: 0,
      images: [
        "img/citron1.png",
        "img/citron2.png"
      ],
      reviews: [{
        stars: 3,
        body: "Bof !",
        author: "JimmyDean@example.org",
        createdOn: 1397490980837
      }]
    }, {
      name: 'Pamplemousse',
      description: "Pamplemousse, ça mousse !",
      price: 1.50,
      stock: 354,
      images: [
        "img/pamp1.png",
        "img/pamp2.png"
      ],
      reviews: [{
        stars: 5,
        body: "Trooop booon j'adooooore !!!",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
      }]
    }];
})();
