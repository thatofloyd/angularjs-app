'use strict';

angular.module('angularjs.instabook.client.web.user.request.controller', ['ngRoute',
    'angularjs.instabook.client.web.common.service.user'
    ]).config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/request', {templateUrl: 'user/request/RequestView.html', controllerAs:'model', controller: 'RequestController'});
        }]).controller('RequestController', ['$rootScope','$location','UserService',
        function($rootScope, $location, UserService) {

            this.title = "";

            this.author = "";

            this.isbn = "";

            this.publisher = "";

            this.books = [];

            this.canAdd = function(){
                return
                this.title != null && this.title.trim()!= "" &&
                this.author != null && this.author.trim()!= "" &&
                this.publisher != null && this.publisher.trim()!= "" &&
                this.isbn != null && this.isbn.trim() != "";
            };

            this.addBook = function(){
                this.books.push({Title: this.title, Author: this.author, ISBN: this.isbn, Publisher:this.publisher});
            };

            this.requestBooks = function() {

                if (this.books.length > 0)
                {
                    var userId = $rootScope.user.UserId;
                    UserService.requestBooks(userId, this.books);
                    $location.path('/home');
                }
            };

            this.removeBook = function(index) {

                if (this.books.length > 0 && index >= 0)
                {
                    this.books.splice(index, 1);
                }
            }
    }]);