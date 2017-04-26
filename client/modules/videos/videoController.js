videoPortalApp.controller('videoController',
function($scope, videoService, authService, $state) {
    var service = videoService;
    $scope.videosList = [];    
    var auth = authService;
    $scope.isAuthenticated = auth.isLoggedIn ? false : true;

    if(!auth.isLoggedIn()){
        $state.go('login');
    };

    $scope.getVideos = function() {
        service.getVideos().then(
            function(response) {
                $scope.videosList = response.data;
            }
        )
    };

    $scope.getVideos();

    $scope.getRating = function(ratings) {
        var _sum = 0;
        var _rating = 0;

        for(var i = 0; i < ratings.length; i++){
            _sum += ratings[i];
        };

        _rating = parseInt(_sum/ratings.length);
        return _rating;
    };

    $scope.getShortDescription = function(description) {
        return description.substring(0,50);
    };

    $(document).on('click', 'video', function() {
        console.log('play video');
    })
})