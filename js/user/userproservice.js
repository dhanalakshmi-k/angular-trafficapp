trafficApp.service("ProfileService",function($q,$http){
		return{
		userpro:function(id){
		var deferred = $q.defer();
		$http.get("http://192.168.1.164:8080/traffic/rest/user/getUserByPrimeryKey/" +id).success(function(response){
		deferred.resolve(response);
		}).error(function(err){
		deferred.reject(err);
		})
		return deferred.promise;
		}
		
}
})