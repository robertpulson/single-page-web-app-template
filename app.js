var spaApp = angular.module('spaApp', ['ngResource', 'ui.router', 'ngAnimate', 'uiGmapgoogle-maps']);

spaApp.config(function($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {
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

spaApp.controller('MainCtrl', function($scope, Data, uiGmapGoogleMapApi) {

  uiGmapGoogleMapApi.then(function(maps) {
    $scope.map      = { zoom: 12 };
    $scope.options  = { scrollwheel: false };
    $scope.markers  = Data.markers;
  });

  $scope.services = Data.services;
});

spaApp.factory('Data', function() {

  o = { services: [{ show: false, name: 'Kitchens',  photo: 'http://www.johnpriorhomeimprovements.co.uk/480_360_csupload_14534806.jpg?u=2617925630'                              },
                   { show: false, name: 'Bathrooms', photo: 'http://www.johnpriorhomeimprovements.co.uk/480_360_csupload_14519151.jpg?u=2322306010'                              },
                   { show: false, name: 'Tiling',    photo: 'http://www.johnpriorhomeimprovements.co.uk/480_360_csupload_14519124.jpg?u=3888389954'                              },
                   { show: false, name: 'Underfloor Heating', photo: 'http://www.johnpriorhomeimprovements.co.uk/480_360_csupload_14537447.jpg?u=2718682038'                     },
                   { show: false, name: 'Plumbing', photo: 'http://www.johnpriorhomeimprovements.co.uk/480_360_csupload_14537190.jpg?u=1959166925'                               },
                   { show: false, name: 'Painting and Decorating', photo: 'http://www.johnpriorhomeimprovements.co.uk/480_360_csupload_14534733.jpg?u=2214640933'                },
                   { show: false, name: 'Electrical Works and Testing', photo: 'http://www.dial-a-handyman.co.uk/wp-content/gallery/service-pages/istock_000012122771xsmall.jpg' },
                   { show: false, name: 'Plastering', photo: 'http://www.smoothitover.co.uk/images/servicesImages/plastering/large/plastering2.jpg'                              },
                   { show: false, name: 'Landscaping and Structures', photo: 'http://www.johnpriorhomeimprovements.co.uk/480_360_csupload_14537342.jpg?u=2718681876'             },
                   { show: false, name: 'Conservatories', photo: 'http://www.johnpriorhomeimprovements.co.uk/480_360_csupload_14534659.jpg?u=3021210092'                         },
                   { show: false, name: 'Insurance Works', photo: 'http://www.johnpriorhomeimprovements.co.uk/480_360_csupload_14537820.jpg?u=3881481587'                        },
                   { show: false, name: 'Design and Planning', photo: 'http://www.johnpriorhomeimprovements.co.uk/282_400_csupload_14537759.jpg?u=1130809595'                    } ],
        markers:  [{ location: 'South East London', coords: { latitude: 51.40126053909103,  longitude: -0.0035160328261  }, id: Date.now() },
                   { location: 'South West London', coords: { latitude: 51.416393443232124, longitude: -0.19889232516288 }, id: Date.now() } ] 
      }

  return o;
});
