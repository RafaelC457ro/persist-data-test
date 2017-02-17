'use strict';

(function(){
	var app = angular.module('persistApp',['ngRoute']);


	// configure routes
	app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
		$locationProvider.html5Mode(true);

		$routeProvider
		.when("/",{
			templateUrl: 'views/main.html',
			controller:  'MainController'
		})

		.when("/first",{
			templateUrl: 'views/first.html',
			controller:  'FirstController'
		})
		.when("/second",{
			templateUrl: 'views/second.html',
			controller:  'SecondController'
		}).otherwise({
        	redirectTo: '/'
    	});

	}]);

	app.factory('persistData',function(){
		this.data = {};
		var that = this;

		return {
			setValue: function(key, value){
				
				that.data[key] = value;
			},

			getValue: function(key){

				return (key in that.data)? that.data[key] : null;
			}
		}
	});

	app.controller('MainController',['$scope','persistData',function($scope,persistData){
		$scope.user = persistData.getValue('user') || "Rafael";

		$scope.save = function(){
			persistData.setValue('user',$scope.user);

			alert('saved');
		};

	}]);

	app.controller('FirstController',['$scope','persistData',function($scope,persistData){
		$scope.telefone = persistData.getValue('telefone') || "9999999999";

		$scope.save = function(){
			persistData.setValue('telefone',$scope.telefone);

			alert('saved');
		};

	}]);

	app.controller('SecondController',['$scope','persistData',function($scope,persistData){
		$scope.address = persistData.getValue('address') || "9999999999";

		$scope.save = function(){
			persistData.setValue('address',$scope.address);

			alert('saved');
		};

	}]);


	

})();