'use strict';

angular.module('angularjs.instabook.client.web.user.awaiting.controller', ['ngRoute',
    'angularjs.instabook.client.web.common.service.user'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/awaiting', {
            templateUrl: 'user/awaiting/AwaitingView.html',
            controllerAs:'model',
            controller: 'AwaitingController',
            resolve:{
                requestedBooks :['$rootScope', 'UserService' , function($rootScope, UserService){
                    return UserService.getRequestedBooks($rootScope.user.UserId);
                }]
            }
        });
    }])
    .controller('AwaitingController', ['$rootScope','$location', 'requestedBooks', 'UserService', function($rootScope, $location,requestedBooks, UserService) {
        this.books = requestedBooks.data;

        this.reply = function(requestorId, bookId){
            var userId = $rootScope.user.UserId;
            if (userId > 0 && requestorId > 0 && bookId > 0)
            {
                UserService.respondToBookRequest(userId, requestorId, bookId);
                $location.path('/home');
            }
        }
    }]);