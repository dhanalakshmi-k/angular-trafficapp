trafficApp.controller('EditCtrl',function($scope,EditService,$state,$stateParams){

	$scope.$on('$viewContentLoaded',function(){
		$scope.edit();
		$scope.user = {};
	})
	
	$scope.edit = function(){
		debugger;
		EditService.useredit($stateParams.userId).then(function(data){
		$scope.user = data; 
		console.log($scope.user);
		},function(err){
		if(err){
		$scope.errorMessage = err;
		}
		})
		}
	$scope.updateuser=function(){
		console.log($scope.user);
		
		EditService.updateuser(JSON.stringify($scope.user)).then(function(data){
			debugger;
            $scope.details = data;
            console.log($scope.details);
            
        },function(err){
            if(err){
                $scope.errorMessage = err;
            }else{
                $scope.errorMessage = err;
            }
        });
      
	    }
	
});