var spaApp = angular.module('spaApp', ['ngResource', 'ui.router', 'ngAnimate']);

spaApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: 'MainCtrl'
    })

    .state('aboutus', {
      url: '/aboutus',
      templateUrl: 'views/aboutus.html',
      controller: 'MainCtrl'
    })

    .state('contactus', {
      url: '/contactus',
      templateUrl: 'views/contactus.html',
      controller: 'MainCtrl'
    })

    .state('ourwork', {
      url: '/ourwork',
      templateUrl: 'views/ourwork.html',
      controller: 'MainCtrl'
    })

    .state('testimonials', {
      url: '/testimonials',
      templateUrl: 'views/testimonials.html',
      controller: 'MainCtrl'
    })    

  $urlRouterProvider.otherwise('home');  
});

spaApp.controller('MainCtrl', function($scope, Data) {

  $scope.test = 'this is a test';
  $scope.services = Data.services;

});

spaApp.factory('Data', function() {

  o = { services: [{ name: 'Kitchens',  photo: 'http://www.johnpriorhomeimprovements.co.uk/300_400_csupload_14519062.jpg?u=76915199'                                       },
                   { name: 'Bathrooms', photo: 'http://www.johnpriorhomeimprovements.co.uk/300_400_csupload_14513553.jpg?u=4217423600'                                     },
                   { name: 'Tiling',    photo: 'http://www.johnpriorhomeimprovements.co.uk/480_360_csupload_14519124.jpg?u=3888389954'                                     },
                   { name: 'Underfloor Heating', photo: 'http://www.johnpriorhomeimprovements.co.uk/480_360_csupload_14537447.jpg?u=2718682038'                            },
                   { name: 'Plumbing', photo: 'http://www.johnpriorhomeimprovements.co.uk/480_360_csupload_14537190.jpg?u=1959166925'                                      },
                   { name: 'Painting and Decorating', photo: 'http://www.johnpriorhomeimprovements.co.uk/480_360_csupload_14534733.jpg?u=2214640933'                       },
                   { name: 'Electrical Works and Testing', photo: 'http://www.dial-a-handyman.co.uk/wp-content/gallery/service-pages/istock_000012122771xsmall.jpg'        },
                   { name: 'Plastering', photo: 'http://www.smoothitover.co.uk/images/servicesImages/plastering/large/plastering2.jpg'                                     },
                   { name: 'Landscaping, Outdoor Buildings and Structures', photo: 'http://www.johnpriorhomeimprovements.co.uk/480_360_csupload_14537342.jpg?u=2718681876' },
                   { name: 'Conservatories and Double Glazing', photo: 'http://www.johnpriorhomeimprovements.co.uk/480_360_csupload_14534659.jpg?u=3021210092'             },
                   { name: 'Insurance Works', photo: 'http://www.johnpriorhomeimprovements.co.uk/480_360_csupload_14537820.jpg?u=3881481587'                               },
                   { name: 'Design and Planning', photo: 'http://www.johnpriorhomeimprovements.co.uk/282_400_csupload_14537759.jpg?u=1130809595'                           } ] }

  return o;
});
