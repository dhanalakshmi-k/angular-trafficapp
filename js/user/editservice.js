
trafficApp.service("EditService",function($q,$http){
		return{
		useredit:function(id){
		var deferred = $q.defer();
		$http.get("http://192.168.1.164:8080/traffic/rest/user/getUserByPrimeryKey/" +id).success(function(response){
		deferred.resolve(response);
		}).error(function(err){
		deferred.reject(err);
		})
		return deferred.promise;
		},
		adduser:function(user){
			var deferred = $q.defer();
			var config ={
					headers:{
						'Content-Type' : 'application/json'
					}
			}
			$http.post("http://192.168.1.164:8080/traffic/rest/user/registration", user, config).success(function(response){
				deferred.resolve(response);
			}).error(function(err){
				deferred.reject(err)
			})
			return deferred.promise;
		},
		
		updateuser: function(user){
		    var deferred = $q.defer();
		    $http.put('http://192.168.1.164:8080/traffic/rest/user/updateProfile',user).success(function(response){
		        deferred.resolve(response);
		
		    }).error(function(err){
		        deferred.reject(err);
		    })
		    return deferred.promise;
		}
	    
		
}
})