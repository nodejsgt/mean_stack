describe('test userController', function() {
    beforeEach(function(){
        module('videoPortalApp');
    });

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }))

    describe('Test the function to verify if the user is Logged', function(){
        it('must be throws true if the user is logged in or false if no', function() {
            var $scope = {};
            var $state = {};
            var authService = authService;
            var controller = $controller('userController', {$scope: $scope, $state: $state, authService: authService});
            $scope.isAuthenticated = authService.isLoggedIn();
            expect($scope.isAuthenticated).toEqual(true);
        });
    });
});