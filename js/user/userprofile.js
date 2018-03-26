trafficApp.controller("profileCtrl", function($scope, $http, $window){
       $http.get("https://api.myjson.com/bins/9o5e9").then(function(response){
                 $scope.details = response.data;
				  $scope.edit = function(){
				  $scope.details.editable = true;			
		};
		          $scope.save = function(){
				  $scope.details.editable = false;			
		};
	            
		});   

	});