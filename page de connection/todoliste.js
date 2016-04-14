var app = angular.module('myApp', []);


//afficher tous les todo
app.directive("expander", function($http) {
	return {
			//restrict : "EA",
			template : sessionStorage.t
		};
	});

//page pour ajouter todo ou pour modifier 
app.controller('myCtrl', function($scope,$http) {
	$scope.ajouter=function(){
		window.location='ajouter.html';
	};
	$scope.modifierSupprimer=function(cid){
		sessionStorage.id=cid;
		 // 	window.location='modifierSupprimer.html';
		 window.location='afficherTODO.html';
		};
	});

//ajouter todo
app.controller('myCtrl2', function($scope,$http) {
	$scope.title='';
	$scope.description='';
	$scope.save=function(title,description){
		var json={
			"login": sessionStorage.login,
			"password": sessionStorage.password,
			"title": title,
			"description": description
		};
		var json2={
			"login": sessionStorage.login,
			"password": sessionStorage.password,
		};
		return $http.post("http://storage.preprod.videoencoding.ovh/api/add", json).success(function(data, status) {
			if(data.Ok==true){
				$http.post("http://storage.preprod.videoencoding.ovh/api/list",json2).success(function(data, status) {
					if(data.Ok==true){
						var text='<ul>';
						for(var i in data.Resource){
							text+='<li><a href="#" ng-click="modifierSupprimer('+data.Resource[i].Id+')">'+data.Resource[i].Title+'</a></li>';
						};
						text+='</ul>';
						sessionStorage.t=text;
						window.location='todoliste.html';
					}else{
						alert(data.Error);
					};
				}).error(function(){
					alert("! !");
				});
			}else{
				alert(data.Error);
			};
			return data;
		}).error(function(){
			alert("! !");
			return null ;
		});

	};
});

//modifier ou supprimer todo
app.controller('myCtrl3', function($scope,$http) {
	$scope.title=sessionStorage.title;
	$scope.description=sessionStorage.description;
	$scope.modifier=function(champ1,champ2){
		var json ={
			"login": sessionStorage.login,
			"password": sessionStorage.password,
			"id": sessionStorage.id,
			"title": champ1,
			"description": champ2
		};
		var json2={
			"login": sessionStorage.login,
			"password": sessionStorage.password,
		};
		return $http.post("http://storage.preprod.videoencoding.ovh/api/edit", json).success(function(data, status) {
			if(data.Ok==true){
				$http.post("http://storage.preprod.videoencoding.ovh/api/list",json).success(function(data, status) {
					if(data.Ok==true){
						var text='<ul>';
						for(var i in data.Resource){
							text+='<li><a href="#" ng-click="modifierSupprimer('+data.Resource[i].Id+')">'+data.Resource[i].Title+'</a></li>';
						};
						text+='</ul>';
						sessionStorage.t=text;
						sessionStorage.id='';
						sessionStorage.title='';
						sessionStorage.description='';
						window.location='todoliste.html';
					}else{
						alert(data.Error);
					};
				}).error(function(){
					alert("! !");
				});
			}else{
				alert(data.Error);
			};
			return data;
		}).error(function(){
			alert("! !");
			return null ;
		});
	};
});

//affiche un todo (a modifier ou supprimer)
app.controller('myCtrl4', function($scope,$http) {
	$scope.edit=function(){
		window.location='modifier.html';
	};
	$scope.delet=function(){
		var confirme = confirm("Are you sure you want to delete "+$scope.title);
		if(confirme==true){
			var json ={
				"login": sessionStorage.login,
				"password": sessionStorage.password,
				"id": sessionStorage.id
			};
			var json2={
				"login": sessionStorage.login,
				"password": sessionStorage.password,
			};
			return $http.post("http://storage.preprod.videoencoding.ovh/api/delete", json).success(function(data, status) {
				if(data.Ok==true){
					$http.post("http://storage.preprod.videoencoding.ovh/api/list",json).success(function(data, status) {
						if(data.Ok==true){
							var text='<ul>';
							for(var i in data.Resource){
								text+='<li><a href="#" ng-click="modifierSupprimer('+data.Resource[i].Id+')">'+data.Resource[i].Title+'</a></li>';
							};
							text+='</ul>';
							sessionStorage.t=text;
							sessionStorage.id='';
							window.location='todoliste.html';
						}else{
							alert(data.Error);
						};
					}).error(function(){
						alert("! !");
					});
				}else{
					alert(data.Error);
				};
				return data;
			}).error(function(){
				alert("! !");
				return null ;
			});
		} else {
			window.location='todoliste.html';
		};

	};
	var json={
		"login": sessionStorage.login,
		"password": sessionStorage.password,
	};
	return $http.post("http://storage.preprod.videoencoding.ovh/api/list", json).success(function(data, status) {
		if(data.Ok==true){
			for(var i in data.Resource){
				if(data.Resource[i].Id==sessionStorage.id){
					$scope.title=data.Resource[i].Title;
					$scope.description=data.Resource[i].Description;
					sessionStorage.title=data.Resource[i].Title;
					sessionStorage.description=data.Resource[i].Description;
				};
			};
		} else {

		};
	}).error(function(){
		alert("! !");
		return null ;
	});
});

