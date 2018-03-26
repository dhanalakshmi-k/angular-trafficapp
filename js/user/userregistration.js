trafficApp.controller('RegistrationCtrl',function($scope,EditService,$http,$state,$timeout){
	$scope.registerForm=function(){
		alert("detailss");
		debugger;
		EditService.adduser($scope.user).then(function(data){
			$scope.userdetails = data;
			console.log($scope.userdetails);
			$state.go('header.Registration');
		})
	}
	/*$scope.redirect=function(){
		$http.get('http://localhost:8080/traffic/rest/user/allUsers').then(function(response){
		       $scope.details = response.data;
		       console.log($scope.details);
		     });
		$state.go("header.Registration");
	}*/
	 $scope.$on('$viewContentLoaded', function(event) {
		 $scope.user = {};
	      $timeout(function() {
	    	  $http.get('http://192.168.1.164:8080/traffic/rest/user/allUsers').then(function(response){
			       $scope.details = response.data;
			       console.log($scope.details);
			     });
	      });
	    });
	 
	 // put controller with service
	 
	 
	 
	 
	 
	 
	 
      });
