var user = angular.module('app.user', ['ngResource']);
var userFactory = function($resource){
    return $resource('http://storm-project.fr /ios/api', 
        {
            'update' : { method:'PUT' },
            'get':    {method:'GET'},
            'save':   {method:'POST'},
            'query':  {method:'GET', isArray:true},
            'remove': {method:'DELETE'},
            'delete': {method:'DELETE'}
        });
};
    
user.factory('User', [ '$resource', userFactory ]);









var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.user='';
    $scope.mdp='';
    $scope.master = {user: $scope.user, mdp: $scope.mdp};
    $scope.reset = function() {
        $scope.user = '';
        $scope.mdp='';
    };
    $scope.reset();
    $scope.save = function(champ1, champ2){
        if(champ1==""){
            alert("le champ : utilisateur n est pas rempli");
        } else {
            if(champ2==""){
                alert("le champ : mot de passe n est pas rempli");
            } else {
                document.getElementById('contenue').innerHTML="<h1> connecter  "+champ1+"  "+champ2+"</h1>";
            }
        }
    };
});

app.controller('myCtrl2', function($scope) {
    $scope.user='';
    $scope.mdp='';
    $scope.master = {user: $scope.user, mdp: $scope.mdp};
    $scope.reset = function() {
        $scope.user = '';
        $scope.mdp='';
    };
    $scope.reset();
     $scope.save = function(champ1, champ2){
         if(champ1==""){
            alert("le champ : utilisateur n est pas rempli");
        } else {
            if(champ2==""){
                alert("le champ : mot de passe n est pas rempli");
            } else {
                document.getElementById('contenue').innerHTML="<h1>enregistrer  "+champ1+"  "+champ2+"</h1>";
            }
        }
    };
});


