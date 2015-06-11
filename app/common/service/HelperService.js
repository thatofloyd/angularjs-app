'use strict';

angular.module('angularjs.instabook.client.web.common.service.helper', [])
    .service('HelperService', [function() {
        this.loadBooks = function(requests){
            var books = [];
            if (requests != null && requests.length > 0) {
                for (var i = 0; i < requests.length; i++) {
                    for (var j = 0; j < requests[i].Books.length; j++) {
                        books.push(requests[i].Books[j]);
                    }
                }
            }
            return books;
        }
    }]);
