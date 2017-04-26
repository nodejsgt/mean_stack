angular.module('videoPortalApp')
  .constant("videoPortalConf", {
    api:{
        url: "http://localhost:3000",
        format: "format=json"
    },
    templates:{
        login: 'resources/views/login.html',
        register: 'resources/views/register.html',
        layout: 'resources/views/layout.html',
        videos: 'resources/views/videos.html',
        videoDetail: 'resources/views/videoDetail.html',
        notFound: 'resources/views/404.html'
    },
    modals: {
        rating: 'resources/modals/videoRating.html'
    },
    routes: {
        login: '/login',
        register: '/register',
        index: '/app',
        videos: '/videos',
        videoDetail: '/video/:videoId',
        notFound: '/notfound'
    }
})
