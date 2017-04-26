videoPortalApp.controller('authController',
function($scope, $window, $state, userService, authService, blockUI, Notification) {
    var _auth = authService;
    var _user = userService;
    $scope.username = "";
    $scope.password = "";

    // Function for Log In the user into the APP
    $scope.loginUser = function() {
        var params = {
            username: $scope.username,
            password: CryptoJS.MD5($scope.password).toString()
        };

        _user.login(params).then(
            function(response) {
                if(response.status == "success"){
                    _auth.saveSession(response.sessionId);
                    $window.localStorage['videoPortal-username'] = response.username;
                    $state.go('app.videos');
                }else {
                    Notification.error('The credentials are not valid, please veriry');
                }
            }
        )
    };
    
    // Function to verify if all fields was inputted
    $scope.onSubmitForm = function() {
        $scope.formError = "";

        if(!$scope.username || !$scope.password) {
            $scope.formError = "Please input all values";
            return false;
        }else {
            $scope.loginUser();
        }
    };

    

})