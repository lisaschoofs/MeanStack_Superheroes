myApp.factory('HeroService', ['$http', '$location', function($http, $location){
  console.log('Here Service loaded');

  //for list of heroes from DB
  var heroList = {};

  //gets all heroes from the database
  function getHeroes() {
    console.log('in getHeroes function.');
    $http.get('/heroes').then(function(response){
      heroList.heroes = response.data;
      console.log('logging heroList.heroes: ', heroList.heroes);
    });
  };


  return {
    getHeroes: getHeroes,
    heroList: heroList
  };
}]);
