myApp.controller('EntryController', ['$http', '$location', 'HeroService', '$scope', function($http, $location, HeroService, $scope){

  HeroService.getHeroes();

  //object to store values from form
  $scope.hero = {};

  //POST route to add student to the database
  $scope.addHero = function(hero) {
    console.log('logging hero: ', hero);
    $http.post('/heroes', hero).then(function(response){
      console.log('back from the server with success!', response);
      $location.path('/listings');
      });
    };

    //dummy power list until it's added from DB
    $scope.powerList = ['super strength', 'x-ray vision', 'flying'];

}]);
