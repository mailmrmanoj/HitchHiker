var client = angular.module('client', []);
client.factory('Data', function() {
    return {
        serverToken: "4563"
    }; //on live system shud be json returned from server
});



//Client Routes
client.config(function($routeProvider) {
  $routeProvider
		.when('/menu',
			{
				templateUrl: "views/route2.html",
				controller: "homeCtrl"
			})
				.when('/thanks',
            			{
            				templateUrl: "views/thanks.html",
            				controller: "homeCtrl"
            			})
            				.when('/people',
                                    			{
                                    				templateUrl: "views/people.html",
                                    				controller: "peopleCtrl"
                                    			})
                                    				.when('/riders',
                                                                                    			{
                                                                                    				templateUrl: "views/riders.html",
                                                                                    				controller: "peopleCtrl"
                                                                                    			})
        .when('/',
        {
            templateUrl: "views/route1.html",
            controller: "loginErrorCtrl"
        });
});


client.controller("homeCtrl", function($scope,$location) {
$scope.message="Helssslo";
});

client.controller("clientCtrl", function($scope,$location) {
       $scope.showRiderForm=false;
       $scope.showHitchHikerForm=false;

       $scope.showRider=function(){
        $scope.showRiderForm=true;
         $scope.showHitchHikerForm=false;
       }
         $scope.showHitchHiker=function(){
               $scope.showHitchHikerForm=true;
               $scope.showRiderForm=false;
              }

              $scope.goToThanks=function(){
                  $location.path('/thanks');

              }
               $scope.viewPeople=function(){
                         $location.path('/people');
                }
                $scope.viewRiders=function(){
                                         $location.path('/riders');
                                }

});
client.controller("radioCtrl", function($scope,$location) {

});
client.controller("peopleCtrl", function($scope,$location) {
$scope.welcome="hello";
  $scope.inputs = [{
           name: 'Raj',
           gender: 'male ',
           location:'source-destination',
           time:'9.00AM-10-PM'
         }, {
           name: 'Manoj',
           gender: 'female ',
           location:'source-destination',
            time:'9.00AM-10-PM'

         }, {
           name: 'Sandeep',
          gender: 'female ',
                     location:'source-destination',
                      time:'9.00AM-10-PM'

        },
         {
                   name: 'Sandeep',
                  gender: 'male ',
                             location:'source-destination',
                              time:'9.00AM-10-PM'

                },
                 {
                           name: 'Sandeep',
                          gender: 'female ',
                                     location:'source-destination',
                                      time:'9.00AM-10-PM'

                        },
                         {
                                   name: 'Sandeep',
                                  gender: 'male ',
                                             location:'source-destination',
                                              time:'9.00AM-10-PM'

                                },
                                 {
                                           name: 'Sandeep',
                                          gender: 'male ',
                                                     location:'source-destination',
                                                      time:'9.00AM-10-PM'

                                        },{
           name: 'Sachin',
          value: 'some text 2',
          gender: 'male ',
           time:'9.00AM-10-PM',
          min: 2,
          max: 15
        }];





});

/**
 * Controller that handles the user login into client
 */

function loginCtrl($scope,$location, Data) {
    $scope.data = Data;
    $scope.login=function(){
    $location.path('/menu');
    }
}


/**
 * Controller that handles
 */

function loginErrorCtrl($scope, Data, $location, $window) {
    $scope.data = Data;
    $scope.validateToken = function(token) { //a validation method that show error flash if wrong

        if (token != null) {
            if (token.length == 4) {
                if (token == Data.serverToken) {
                    $location.path('/menu');
                    $scope.$apply();

                } else {
                    //error
                    return "Invalid Token please try again";
                }
            }
        }
    };
}
