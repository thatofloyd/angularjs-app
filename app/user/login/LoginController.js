'use strict';

angular.module('angularjs.instabook.client.web.user.login.controller', ['ngRoute', 'angularjs.instabook.client.web.common.service.authentication'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/login', { templateUrl: 'user/login/LoginView.html', controllerAs:'model', controller:'LoginController'});
    }])
    .controller('LoginController', ['$rootScope','$location','AuthenticationService',
        function($rootScope, $location, AuthenticationService)
        {
            this.email = "";

            this.password = "";

            this.login = function() {
                AuthenticationService.
                    authenticate(this.email, this.password)
                    .then(function(response){
                        var user = response.data;
                        if (user != null)
                        {
                            $rootScope.user = user;
                            $location.path('/home')
                        }
                    },
                    function(response){

                })
            }
        }
    ]);