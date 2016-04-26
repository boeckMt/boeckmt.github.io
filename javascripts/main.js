angular.module("boeckMt", [])
	.controller("mainCtrl", function ($scope, $http) {
		var user = {
			"name": "BoeckMt",
			"gitPageUrl":"https://github.com/boeckMt"
		};
		
		$http.get('repos.json').then(function(res){
	          $scope.repos = res.data;                
	        });

		$scope.user = user;
	});
