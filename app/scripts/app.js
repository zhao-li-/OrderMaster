'use strict';

angular
  .module('orderMasterApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
//      .when('/kk', {
//        templateUrl: 'views/myroute.html',
//        controller: 'MyrouteCtrl'
//      })
      .when('/',{
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
