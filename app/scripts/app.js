'use strict';

angular
  .module('peerflixServerApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'btford.socket-io',
    'rt.encodeuri',
    'angularFileUpload'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/recherche', {
        templateUrl: 'views/recherche.html',
        controller: 'RechercheCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function () {
    window.addEventListener('dragover', function(e) {
      e.preventDefault();
    }, false);
    window.addEventListener('drop', function(e) {
      e.preventDefault();
    }, false);
  });
