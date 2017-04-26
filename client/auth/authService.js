/**
 * authSevice: This service will be allow to save, get or delete the sessionId
 * also, return the variables that will be use the routes in the API, verify if the user
 * is logged In or not
 */

videoPortalApp.service('authService',
function($window) {
    var self = this;

    // Method to save the session Id
    self.saveSession = function(session){
        $window.localStorage['videoPortal-session'] = session;
    };

    // Mehtod to get the session Id
    self.getSession = function(){
        return $window.localStorage['videoPortal-session'];
    };

    self.getUsername = function(){
        return $window.localStorage['videoPortal-username'];
    }

    // Verify if the user is Logged In or Not.
    self.isLoggedIn = function(){
        console.log('service', self.getSession());
        if(self.getSession() == "" || self.getSession() == undefined){
            return false;
        }else{
            return true;
        }
    };

    // Function to return the querystring for the api url's'
    self.setQueryString = function(parameters){
        var _queryString = "?sessionId=" + self.getSession();

        // Get the name and value for each parameter
        for(var key in parameters){
            _queryString += "&" + key + "=" + parameters[key];
        }

        return _queryString;
    };

    // Logout the user
    self.logout = function() {
        $window.localStorage.removeItem('videoPortal-session');
        $window.localStorage.removeItem('videoPortal-username');
        $window.localStorage.removeItem('videoPortal-user');
    };    

})