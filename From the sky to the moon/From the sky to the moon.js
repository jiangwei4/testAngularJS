var myApp = angular.module('myApp',[]);

myApp.controller("exemple1Ctrl", function($scope){
    $scope.image="sky";
    $scope.lieux="you are in the sky";
        $scope.quelLieux=function(int){
        if(int==0){
            $scope.lieux="you are in the sky";
            $scope.image="sky";
         return "let's see the moon";
        } else {
            $scope.lieux="you are on the moon";
            $scope.image="moon";
         return "let's back to the sky";
        }
    }
    $scope.lieuxChoisi= function() {
            return $scope.lieux;
    } 
});
