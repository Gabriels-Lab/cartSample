
    var mainApp = angular.module("MainApp", []);
    var mainController = mainApp.controller("MainController", ["$scope","ProductService", function($scope, ProductService){
        $scope.dataList = [];

        $scope.dataList = ProductService.getProducts();


        

    }]);
