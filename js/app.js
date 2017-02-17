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

	app.controller('MainController',['$scope','persistData','$rootScope',function($scope,persistData,$rootScope){
		$scope.user = persistData.getValue('user') || "Rafael";

		$scope.save = function(){
			persistData.setValue('user',$scope.user);

			alert('saved');
		};

		$rootScope.$on('$routeChangeStart',function(){

			persistData.setValue('user',$scope.user);
		
		});

	}]);

	app.controller('FirstController',['$scope','persistData','$rootScope',function($scope,persistData,$rootScope){
		$scope.telefone = persistData.getValue('telefone') || "9999999999";

		$scope.save = function(){
			persistData.setValue('telefone',$scope.telefone);

			alert('saved');
		};

		$rootScope.$on('$routeChangeStart',function(){

			persistData.setValue('telefone',$scope.telefone);
			
		});


	}]);

	app.controller('SecondController',['$scope','persistData','$rootScope',function($scope,persistData,$rootScope){
		$scope.address = persistData.getValue('address') || "La na esquina";

		$scope.save = function(){
			persistData.setValue('address',$scope.address);

			alert('saved');
		};

		$rootScope.$on('$routeChangeStart',function(){

			persistData.setValue('address',$scope.address);
			
		});


	}]);


	

})();