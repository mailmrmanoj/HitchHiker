var myApp = angular.module('IdeaPedia', []);

myApp.controller('CabShareCtrl', ['$scope','$location',
  function($scope,$location) {
     $scope.orderProp = 'age';

  }]);

  myApp.controller('HomeCtrl', ['$scope',
    function($scope) {
       $scope.orderProp = 'age';


    }]);


//  myApp.config(['$routeProvider',
//    function($routeProvider) {
//      $routeProvider.
//        when('/phones', {
//          templateUrl: 'partials/phone-list.html',
//          controller: 'PhoneListCtrl'
//        }).
//        when('/phones/:phoneId', {
//          templateUrl: 'partials/phone-detail.html',
//          controller: 'PhoneDetailCtrl'
//        }).
//        otherwise({
//          redirectTo: '/phones'
//        });
//    }]);
