angular.module("boeckMt", [])
	.controller("mainCtrl", function ($scope) {
		var user = {
			"name": "BoeckMt",
			"gitPageUrl":"https://github.com/boeckMt"
		};

		var repos = {
			"1":{
				"name":"esri-application-boilerplate-viewer",
				"desc":"Configurable web mapping viewer based on esri's application-boilerplate-js",
				"url":"http://boeckmt.github.io/application_boilerplate_viewer/?config=config2.xml"
			}
		};
		$scope.repos = repos;
		$scope.user = user;
	});
