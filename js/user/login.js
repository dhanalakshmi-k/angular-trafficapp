trafficApp.controller("LoginController", function($scope,$state,$rootScope, $location, $cookieStore, UserService) {

    $scope.rememberMe = false;

    $scope.login = function () {
        UserService.authenticate($.param({
            username: $scope.username,
            password: $scope.password
        }), function (authenticationResult) {
            var accessToken = authenticationResult.token;
            $rootScope.accessToken = accessToken;
            if ($scope.rememberMe) {
                $cookieStore.put('accessToken', accessToken);
            }
            UserService.get(function (user) {
                $rootScope.user = user;
                $location.path('/header/Report');
            });
        });
    }
})