(function () {
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchController);
    LunchController.$inject = ['$scope'];

    function LunchController($scope) {
        $scope.dishes = '';
        $scope.messages = '';
        $scope.CheckDishes = function () {
            var arrayOfDishes = $scope.dishes.split(',');
            if (!$scope.dishes)
                $scope.messages = 'Please enter data first';
            else if (arrayOfDishes.length < 4)
                $scope.messages = 'Enjoy!';
            else
                $scope.messages = 'Too Much!';
        }
    }
})();