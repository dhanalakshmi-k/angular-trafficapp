
	trafficApp.controller("user_dashboardCtrl", function($scope,$http){
	
		  $http.get("https://api.myjson.com/bins/1dk6xd").then(function(response) {
		      $scope.catagory = response.data.catagory1;
		  
				 //$scope.myObj = {
		        /*"float":"left",
		        "margin":"10px",*/
		        //"border":"1px solid rgb(197, 195, 195)",
		       // "width":"220px",
		       // "height":"280px",
		        //"text-align":"left",
		        //"padding":"21px",
		        //"background":"rgba(240, 240, 240, 0.9)",
		        //"color":"rgb(21, 19, 19)",
		        //"box-shadow":"rgb(43, 88, 147) 1px 2px 2px",
		         // "border-corner-shape": "notch"	,
		         // "border-radius":"25%"  
		         //"border-corner-shape": "scoop",
		 		 //"border-radius":" 30px"
		 
		   // }
		});
	});