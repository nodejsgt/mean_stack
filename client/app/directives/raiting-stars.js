angular.module('videoPortalApp')
.directive('ratingStars', function() {
    return {
        scope: {            
            thisRating: '='
        },
        templateUrl: 'resources/views/partials/rating-stars.html' 
    }
})