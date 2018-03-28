trafficApp.controller("profileCtrl", function($http,$scope,ProfileService,$state,$stateParams){

	$scope.$on('$viewContentLoaded',function(){
		$scope.show();
		$scope.user = {};
	})
	$scope.show = function(){
		debugger;
		ProfileService.userpro($stateParams.userId).then(function(data){
		$scope.user = data; 
		console.log($scope.user.id);
		console.log($scope.user);
		},function(err){
		if(err){
		$scope.errorMessage = err;
		}
		})
		}
	
	
	
	
	
	

	});