myApp.controller('EntryController', ['$http', '$location', 'HeroService', '$scope', function($http, $location, HeroService, $scope){

  //object to store values from form
  $scope.hero = {};

  //POST route to add student to the database
  $scope.addHero = function(hero) {
    console.log('logging hero: ', hero);
    $http.post('/hero', hero).then(function(response){
      console.log('back from the server with success!', response);
      alert('you added a hero to the list!');
      });
    };

    //dummy power list until it's added from DB
    $scope.powerList = ['super strength', 'x-ray vision', 'flying'];

}]);
