/**
 * userController: will be controling all actions that the user makes into the App
 * the principal role for this controller is verify if the user is logged and log out
 */
angular.module('videoPortalApp')
.controller('userController', function($scope, $state, authService) {
    var auth = authService;
    $scope.isAuthenticated = auth.isLoggedIn();
    $scope.username = auth.getUsername();
    
    if(!auth.isLoggedIn()){
        $state.go('login');
    };

    $scope.logout = function() {
        auth.logout();
        $state.go('login');
    }
})