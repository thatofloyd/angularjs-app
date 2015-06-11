'use strict';

angular.module('angularjs.instabook.client.web.common.service.authentication', [])
    .constant('AUTHENTICATION_ACTIONS', {
        "FIND_USER_BY_USERNAME_PASSWORD":"http://localhost:2177/api/user/FindUserByEmailPassword"
    })
    .service('AuthenticationService', ['$http','AUTHENTICATION_ACTIONS', function($http, AUTHENTICATION_ACTIONS) {

        this.authenticate = function (email, password){

            if (email != null && email.trim()!= '' && password != null && password.trim()!='')
            {
                return $http.get(AUTHENTICATION_ACTIONS.FIND_USER_BY_USERNAME_PASSWORD, {params: {Email:email , Password:password}});
            }
            return {};
        }
}]);