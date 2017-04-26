var videoPortalApp =
    angular.module('videoPortalApp')
        .config(
        [
            '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
            function($controllerProvider, $compileProvider, $filterProvider, $provide) {
                videoPortalApp.controller = $controllerProvider.register;
                videoPortalApp.directive = $compileProvider.directive;
                videoPortalApp.filter = $filterProvider.register;
                videoPortalApp.factory = $provide.factory;
                videoPortalApp.service = $provide.service;
                videoPortalApp.constant = $provide.constant;
                videoPortalApp.value = $provide.value;
            }
        ]);
