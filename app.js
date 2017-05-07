(function () {
'use strict';

angular.module('ShoppingListCheckOffApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list = this;

  list.items =
      ShoppingListCheckOffService.getItemsToBuy();


  list.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list = this;

  list.items =
      ShoppingListCheckOffService.getItemsBought();
}

// If not specified, maxItems assumed unlimited
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var itemsToBuy =  [
    { name: "cookies", quantity: 10},
    { name: "bread", quantity: 1},
    { name: "cheese", quantity: 2},
    { name: "milk", quantity: 4},
    { name: "meat", quantity: 3},
    { name: "coke", quantity: 7}
  ];

  var itemsBought = [];

  service.buyItem = function (itemIndex) {
    itemsBought.push(itemsToBuy[itemIndex]);
    itemsToBuy.splice(itemIndex, 1);

  };

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.getItemsBought = function () {
    return itemsBought;
  };
}


})();
