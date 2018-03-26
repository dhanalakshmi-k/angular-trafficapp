/*trafficApp.service("TrafficService",function($q,$http){
	this.post = function(url,requestdata){
		var deffered = $q.defer();
		var request = {
			method:'POST',
			url : url,
			data:requestdata,
			headers:{
				'content-type':'application/json'
			}
		}
		$http(request).success(function(resp){
			if(resp.status == "fail"){
			}
		deffered.resolve(resp);
		}).error(function(resp){
			deffered.reject(resp);
		})
		return deffered.promise;
	}
	//post will end this line
	
	this.get = function(url){
		var deffered = $q.defer();
		var request = {
		method:'GET',
		url : url
		};
		$http(request).success(function(resp){
		if(resp.status == "fail"){
		alert("Session Experied")
		$state.go('/');
		}
		deffered.resolve(resp);
		}).error(function(resp){
		deffered.reject(resp);
		})
		return deffered.promise;
		}
	
})*/