'use strict';

angular.module('angularjs.instabook.client.web.user.home.controller', ['ngRoute',
'angularjs.instabook.client.web.common.service.user'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'user/home/HomeView.html',
            controller: 'HomeController',
            resolve:{
                user : ['$rootScope','UserService', function($rootScope , UserService ){
                    UserService.getUser($rootScope.user.UserId).then(function(response){
                        $rootScope.user = response.data;
                    });
                }]
            }
        });
    }])
    .controller('HomeController', [function() {

    }]);