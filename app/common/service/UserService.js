'use strict';

angular.module('angularjs.instabook.client.web.common.service.user', [])
    .constant('USER_ACTIONS', {
        "REQUEST_BOOKS":"http://localhost:2177/api/user/RequestBooks",
        "REGISTER_USER":"http://localhost:2177/api/user/RegisterUser",
        "FIND_USER_BY_ID":"http://localhost:2177/api/user/FindUserByUserId",
        "GET_REQUESTED_BOOKS":"http://localhost:2177/api/user/FindRequestedBooks",
        "RESPOND_TO_BOOK_REQUEST":"http://localhost:2177/api/user/RespondToBookRequest"
    })
    .service('UserService', ['$http','USER_ACTIONS', function($http, USER_ACTIONS) {

        this.registerUser = function(name, surname, email, password) {

            if (email != null && email.trim() != '' && password != null && password.trim() != '')
            {
                $http.post(USER_ACTIONS.REGISTER_USER, {Name:name, Surname:surname, Email:email, Password:password});
            }
        };

        this.requestBooks = function(userId, books) {

            if (userId > 0 && books != null && books.length > 0)
            {
                $http.post(USER_ACTIONS.REQUEST_BOOKS,{UserId:userId, IsApproved: false, Books:books});
            }
        };

        this.getUser = function(userId){

            if (userId > 0)
            {
                return $http.get(USER_ACTIONS.FIND_USER_BY_ID, {params: {UserId:userId}});
            }
            return {};
        };

        this.getRequestedBooks = function(userId){

            if (userId > 0)
            {
                return $http.get(USER_ACTIONS.GET_REQUESTED_BOOKS, {params: {UserId:userId}});
            }
            return {};
        };

        this.respondToBookRequest = function(userId, requestorId, bookId){
            if (userId > 0 && requestorId > 0 && bookId > 0)
            {
                $http.post(USER_ACTIONS.RESPOND_TO_BOOK_REQUEST,{UserId:userId, RequestorId: requestorId, BookId:bookId});
            }
        }

    }]);