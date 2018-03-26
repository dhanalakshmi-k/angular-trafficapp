	
		trafficApp.controller("ReportCtrl", function($scope){
			$scope.offencelist=["Irregular Parking","Wrong Side Driving","Tripple Riding","Withot Helmet","Cellphone Driving","Hit and Run by Vehicle"];
			$scope.typeofvehicle=["Two Wheeler","Three Wheeler","Four Wheeler","Heavy vehicle"];

            $scope.form_submit=function (){
               $scope.rno=$scope.data.regstr;
               $scope.oc=$scope.data.Offence_Category;
               $scope.vt=$scope.data.Vehicle_type;
               $scope.l=$scope.data.Location;
               $scope.d=$scope.data.Description;
               window.alert("Vehicle No: "+ $scope.rno + "\n" + "Offence Category: " + $scope.oc + "\n" +"Vehicle type: "+ $scope.vt + "\n" +"Location: "+ $scope.l + "\n" + "Description: "+ $scope.d);
               $scope.data=null;
            }  

		});
      