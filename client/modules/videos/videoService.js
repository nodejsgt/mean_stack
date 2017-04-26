videoPortalApp.service('videoService',
function(baseService, authService){
    var self = this;
    var base = baseService;

    self.getVideos = function(){
        var data = {
            url: "/videos",
            parameters: {
                limit: 10
            }
        };

        var result = base.get(data);
        return result;
    };

    self.getVideo = function(videoId){
        var data = {
            url: '/video',
            parameters: {
                videoId: videoId
            }
        };

        var result = base.get(data);
        return result;
    }
})