'use strict';

angular.module('angularjs.instabook.client.web.user.requested.controller', ['ngRoute',
    'angularjs.instabook.client.web.common.service.user',
    'angularjs.instabook.client.web.common.service.helper'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/requested', {
            templateUrl: 'user/requested/RequestedView.html',
            controllerAs:'model',
            controller: 'RequestedController',
            resolve:{
                user :['$rootScope', 'UserService' , function($rootScope, UserService){
                    return UserService.getUser($rootScope.user.UserId);
                }]
            }
        });
    }])
    .controller('RequestedController', ['user', 'HelperService',function(user, HelperService) {
        this.books = HelperService.loadBooks(user.data.Requests);
    }]);