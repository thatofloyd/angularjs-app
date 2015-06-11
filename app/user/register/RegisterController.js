'use strict';

angular.module('angularjs.instabook.client.web.user.register.controller', ['ngRoute',
    'angularjs.instabook.client.web.common.service.user'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/register', {
                templateUrl: 'user/register/RegisterView.html',
                controllerAs:'model',
                controller: 'RegisterController'
            });
    }])
    .controller('RegisterController', ['$location','UserService',  function($location, UserService) {
        this.name = "";
        this.surname = "";
        this.email = "";
        this.password = "";

        this.registerUser = function () {
            UserService.registerUser(this.name, this.surname, this.email, this.password);
            $location.path('/login');
        }
    }]);