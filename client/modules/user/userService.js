videoPortalApp.service('userService',
function(baseService) {
    var base = baseService;
    var self = this;

    // Log In user
    self.login = function(params) {
        var data = {
            input: params,
            url: '/user/auth'
        };

        var result = base.login(data);

        return result;
    }
})