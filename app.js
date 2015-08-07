var spaApp = angular.module('spaApp', ['ngResource', 'ui.router']);

spaApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    })

    .state('aboutus', {
      url: '/aboutus',
      templateUrl: '/aboutus.html',
      controller: 'MainCtrl'
    })

    .state('contactus', {
      url: '/contactus',
      templateUrl: '/contactus.html',
      controller: 'MainCtrl'
    })

    .state('ourwork', {
      url: '/ourwork',
      templateUrl: '/ourwork.html',
      controller: 'MainCtrl'
    })

    .state('testimonials', {
      url: '/testimonials',
      templateUrl: '/testimonials.html',
      controller: 'MainCtrl'
    })    

  $urlRouterProvider.otherwise('home');  
});

spaApp.controller('MainCtrl', function($scope) {

  $scope.test = 'this is a test'

});
