(function () {
'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController',LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {

        $scope.itemList = "";
        $scope.message = "";
        $scope.fontColor = "";

        $scope.checkIfTooMuch = function () {
            var listItems = $scope.itemList.split(",");
            var numItems = 0;
            //Check if any item has blank spaces to replace them with an empty character
            for(var i = 0; i < listItems.length; ++i) {
                var item = listItems[i].replace(/\s/g,"");
                if(item != "") ++numItems;
            }
            if(numItems === 0) {
                $scope.message = "Please enter data first";
                $scope.fontColor = "red";
            }
            else {
                $scope.message = (numItems <= 3)? "Enjoy" : "Too much!";
                $scope.fontColor = "green";
            }
        }
    }
    
})();