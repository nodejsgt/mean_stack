angular.module('videoPortalApp')
    .run(
        [
            '$rootScope','$state','$stateParams',
            function($rootScope,$state,$stateParams){
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    )
    .config(
        [
            '$stateProvider', '$urlRouterProvider', 'videoPortalConf',
            function($stateProvider,$urlRouterProvider,videoPortalConf){
                $urlRouterProvider
                    .otherwise('/app/videos');
                $stateProvider
                    .state('login',{
                        url: videoPortalConf.routes.login,
                        templateUrl: videoPortalConf.templates.login                        
                    })
                    .state('register',{
                        url: videoPortalConf.routes.register,
                        templateUrl: videoPortalConf.templates.register//,
                        // resolve: {
                        //     deps: [
                        //         '$ocLazyLoad',
                        //         function($ocLazyLoad){
                        //             return $ocLazyLoad.load({
                        //                 serie: true,
                        //                 files: [
                        //                     //array of files
                        //                 ]
                        //             })
                        //         }
                        //     ]
                        // }
                    })
                    .state('app',{
                        abstract: true,
                        url: videoPortalConf.routes.index,
                        cache: false,
                        templateUrl: videoPortalConf.templates.layout
                    })
                    .state('app.videos',{
                        url: videoPortalConf.routes.videos,
                        templateUrl: videoPortalConf.templates.videos,
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad){
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'modules/videos/videoService.js',
                                            'modules/videos/videoController.js',
                                            'modules/user/userController.js'
                                        ]
                                    })
                                }
                            ]
                        }

                    })
                    .state('app.videoDetail',{
                        url: videoPortalConf.routes.videoDetail,
                        templateUrl: videoPortalConf.templates.videoDetail,
                        resolve: {
                            deps: [
                                '$ocLazyLoad',
                                function($ocLazyLoad){
                                    return $ocLazyLoad.load({
                                        serie: true,
                                        files: [
                                            'modules/videos/videoService.js',
                                            'modules/videos/videoDetailController.js',
                                            'modules/user/userController.js'
                                        ]
                                    })
                                }
                            ]
                        }
                    })
                    .state('app.notFound',{
                        url: videoPortalConf.routes.notFound,
                        templateUrl: videoPortalConf.templates.notFound//,
                        // resolve: {
                        //     deps: [
                        //         '$ocLazyLoad',
                        //         function($ocLazyLoad){
                        //             return $ocLazyLoad.load({
                        //                 serie: true,
                        //                 files: [
                        //                     //array of files
                        //                 ]
                        //             })
                        //         }
                        //     ]
                        // }
                    })
            }
        ]
    )