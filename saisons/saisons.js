var myApp = angular.module('myApp',[]);

myApp.controller("exemple1Ctrl", function($scope){
	$scope.saison="hiver";
    $scope.date = new Date(); 
    $scope.dateChoisi= function() {
    	var jour=$scope.date.getUTCDate();
    	var mois=($scope.date.getUTCMonth()+1);
     	if((mois==12 && jour>21) || mois==1 || mois==2 || (mois==3 && jour <20)){
     		$scope.saison="hiver";
     		return "hiver";
     	} 
     	if((mois==3 && jour>19) || mois==4 || mois==5 || (mois==6 && jour<21)){
     		$scope.saison="printemps";
     		return "printemps";
     	}
     	if((mois==6 && jour>20) || mois==7 || mois==8 || (mois==9 && jour<22)){
     		$scope.saison="ete";
     		return "ete";
     	}
     	if((mois==9 && jour>21) || mois==10 || mois==11 || (mois==12 && jour<22)){
     		$scope.saison="automne";
     		return "automne";
     	}
    } 
});