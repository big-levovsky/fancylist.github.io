/**
 * Created by Rami L on 11/12/2016.
 */
(function(){

    var app = angular.module("fancyList", ["checklist-model" ]);

    app.controller("MainCtrl", ["$scope",function($scope) {
            $scope.pets = ["Cat", "Dog", "Fish", "bear"];
            $scope.selectedPets = [];

    }]);


    app.directive("checkboxList", function(){
       return {
           scope: {
               items: '=',
               selectedItems: '='
           },
           restrict: 'AE',
           replace: true,
           templateUrl: 'checkboxListView.html',
           link: function(scope, elem, attrs) {

                scope.toggleAll = function () {
                    //if nothing or something selected -> check all
                    if(scope.selectedItems.length >= 0 && scope.selectedItems.length < scope.items.length ) {
                        angular.copy(scope.items, scope.selectedItems);
                    }
                    //if all selected - > uncheck all
                    else {
                        angular.copy([], scope.selectedItems);

                    }
                };

                scope.syncAllBtn = function () {
                    scope.partial = false;

                    //if all selected -> check toggleAll button
                    if (scope.selectedItems.length == scope.items.length)
                        scope.isAllChecked = true;

                    //if nothing selected -> uncheck toggleAll button
                    else if (scope.selectedItems.length == 0)
                        scope.isAllChecked = false;

                    //if some of the items selected (partial) -> check with special color
                    else {
                        scope.isAllChecked = false;
                        scope.partial = true;
                    }



                };


           }
       };
    });


}());