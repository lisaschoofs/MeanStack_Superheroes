myApp.controller('EntryController', ['$http', '$location', 'HeroService', function($http, $location, HeroService){
  console.log('Entry controller loaded');

  //POST route to add student to the database
  $scope.addHero = function(hero) {
    $http.post('/hero', hero).then(function(response){
      console.log('back from the server with success!', response);
      alert('you added a hero to the list!');
      });
    };

}]);
