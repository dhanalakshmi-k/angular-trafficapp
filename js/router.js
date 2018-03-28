trafficApp.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){
	$urlRouterProvider.otherwise("/")
	$stateProvider
	.state('/', {
		url: "/",
		templateUrl: "partials/login.html",
		controller:'LoginController'
	})

	   /*user routing*/
	.state('header', {
		 resolve:{
		 	'check':function($location,$rootScope){
		 		if(!$rootScope.loggedIn){
		 			$location.path('/');
		 		}
		 	}
		 },
		url: "/header",
		templateUrl: "partials/user/userheader.html",
		//controller:'notificationCtrl'
	})
	.state('header.dashboard', {
		url: "/dashboard",
		templateUrl: "partials/user/userdashboard.html",
		controller:'user_dashboardCtrl'
	})
	.state('header.Notification', {
		url: "/Notification",
		templateUrl: "partials/user/usernotification.html",
		controller:'notificationCtrl'
	})
//	.state('header.Profile', {
//		url: "/Profile/:userId",
//		templateUrl: "partials/user/userprofile.html",
//		controller:"profileCtrl"
//	})
//	.state('header.Profile', {
//		url: "/Profile/:userId",
//		templateUrl: "partials/user/userprofile.html",
//		controller:"profileCtrl"
//	})
	.state('header.Report', {
		url: "/Report",
		templateUrl: "partials/user/userreport.html",
		controller:"ReportCtrl"
	})
	.state('header.Registration', {
		url: "/Registration",
		templateUrl: "partials/user/userregistration.html",
		controller:"RegistrationCtrl"
	})
	.state('header.Register', {
		url: "/Register",
		templateUrl: "partials/user/registration.html",
			controller:"RegistrationCtrl"
		
	})
	.state('header.Editregister', {
		url: "/Editregister/:userId",
		templateUrl: "partials/user/regedit.html",
			controller:"EditCtrl"
		
	})
	.state('header.Pro', {
		url: "/Profile/:userId",
	templateUrl: "partials/user/userprofile.html",
		controller:"profileCtrl"
		
	})
	.state('header.Proedit', {
		url: "/Profile/:userId",
	templateUrl: "partials/user/userprofileedit.html",
		controller:"profileCtrl"
		
	})
	

	      /*user-routing end*/

       /*admin routing*/
	.state('admin_header', {
		 resolve:{
		 	'check':function($location,$rootScope){
		 		if(!$rootScope.loggedIn){
		 			$location.path('/');
		 		}
		 	}
		 },
		url: "/admin_header",
		templateUrl: "admin/admin_header.html",
		//controller:'notificationCtrl'
	})
	.state('admin_header.dashboard', {
		url: "/admin_dashboard",
		templateUrl: "admin/admin_dashboard.html",
		controller:'user_dashboardCtrl'
	})
	.state('admin_header.adminApprovals', {
		url: "/admin_Approvals",
		templateUrl: "admin/admin_aprovals.html",
		controller:'admin_ApprovalsCtrl'
	})
	.state('admin_header.govtApprovals', {
		url: "/govt_Approvals",
		templateUrl: "admin/admin_govtaprovals.html",
		controller:'govt_ApprovalsCtrl'
	})
	.state('admin_header.Notification', {
		url: "/Notification",
		templateUrl: "admin/admin_notification.html",
		controller:'admin_NotificationCtrl'
	})
	

     /*admin routing end*/
$httpProvider.interceptors.push(function ($q, $rootScope, $location) {
    return {
        'responseError': function (rejection) {
            var status = rejection.status;
            var config = rejection.config;
            var method = config.method;
            var url = config.url;

            if (status == 401) {
                $location.path("/login");
            } else {
                $rootScope.error = method + " on " + url + " failed with status " + status;
            }

            return $q.reject(rejection);
        }
    };
}
);

/* Registers auth token interceptor, auth token is either passed by header or by query parameter
* as soon as there is an authenticated user */
$httpProvider.interceptors.push(function ($q, $rootScope, $location) {
    return {
        'request': function (config) {
            var isRestCall = config.url.indexOf('rest') == 0;
            if (isRestCall && angular.isDefined($rootScope.accessToken)) {
                var accessToken = $rootScope.accessToken;
                if (exampleAppConfig.useAccessTokenHeader) {
                    config.headers['X-Access-Token'] = accessToken;
                } else {
                    config.url = config.url + "?token=" + accessToken;
                }
            }
            return config || $q.when(config);
        }
    };
}
);

})

