// declare a module
var myApp = angular.module('myApp', []);

// configure the module.
// in this example we will create a controller for the to-do list app
myApp.controller('ListController', ['$scope', function($scope) {
    $scope.items = ['Read Books', 'Programming Practice'];
    $scope.newItem = "";

    //save the newly add item inside array
    $scope.storeItem = function() {
        if($scope.newItem != ""){
            $scope.items.push($scope.newItem);
            $scope.newItem = "";
        }  
    }

    //delete item from the list 
    $scope.deleteItem = function(index) {
        $scope.items.splice(index, 1)
    }
  }]);