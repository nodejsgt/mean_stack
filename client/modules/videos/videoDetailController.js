videoPortalApp.controller('videoDetailController',
function($scope, $state, videoService, $stateParams, authService){
    var service = videoService;
    var _videoId = $stateParams.videoId;
    $scope.video = {};
    var auth = authService;

    if(!auth.isLoggedIn()){
        $state.go('login');
    };


    $scope.getVideoDetail = function(){
        service.getVideo(_videoId).then(
            function(response) {
                $scope.video = response.data;
            }
        )
    };

    $scope.getVideoDetail();

    $scope.getRating = function(ratings) {
        var _sum = 0;
        var _rating = 0;

        for(var i = 0; i < ratings.length; i++){
            _sum += ratings[i];
        };

        _rating = parseInt(_sum/ratings.length);
        return _rating;
    };
})