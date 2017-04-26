/**
 * baseService: This service implement $http and $q angular provider
 * this service encapsule the most common HTTP actions (GET, POST, PUT, DELETE) and LOGIN
 * to use it, in each service you must inject as dependency and have access to invoke
 * a simple GET, POST or LOGIN.
 */

videoPortalApp.service('baseService', 
function($http, $q, videoPortalConf, authService) {
    var uri = videoPortalConf.api.url;
    var self = this;
    
    self.get = function(data) {
        var deferred = $q.defer();
        var _queryString = authService.setQueryString(data.parameters);

        // Make the GET Action
        $http.get(uri + data.url + _queryString)
        .success(function(response) {
            deferred.resolve(response);
        })
        .error(function(response) {
            deferred.resolve(response)
        })

        return deferred.promise;
    };

    self.post = function(data) {
        var deferred = $q.defer();
        var _queryString = authService.setQueryString(data.parameters);

        // Make the POST Action
        $http.post(uri + data.url + _queryString, data.input)
        .success(function (response) {
            deferred.resolve(response);
        })
        .error(function(response) {
            deferred.resolve(response);
        })

        return deferred.promise;
    };

    // Function to Log In the Users
    self.login = function(data) {
        var deferred = $q.defer();

        $http.post(uri + data.url, data.input)
        .success(function(response) {
            authService.saveSession(response.sessionId);
            deferred.resolve(response);
        })
        .error(function(response){
            deferred.resolve(response);
        })

        return deferred.promise;
    };
})