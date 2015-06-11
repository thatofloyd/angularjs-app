  'use strict';

  angular.module('angularjs.instabook.client.web', [
      'ngRoute',
      'angularjs.instabook.client.web.common.service.authentication',
      'angularjs.instabook.client.web.common.service.user',
      'angularjs.instabook.client.web.common.service.helper',
      'angularjs.instabook.client.web.user.home.controller',
      'angularjs.instabook.client.web.user.register.controller',
      'angularjs.instabook.client.web.user.login.controller',
      'angularjs.instabook.client.web.user.request.controller',
      'angularjs.instabook.client.web.user.requested.controller',
      'angularjs.instabook.client.web.user.awaiting.controller'
  ]).config(['$routeProvider', function($routeProvider) {
          $routeProvider.otherwise({redirectTo: '/login'});
      }]);
