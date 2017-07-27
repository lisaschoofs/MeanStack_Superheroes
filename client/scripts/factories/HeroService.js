myApp.factory('HeroService', ['$http', '$location', function($http, $location){
  console.log('Here Service loaded');

  //for list of heroes from DB
  var heroList = {};

  //gets all heroes from the database
  function getLessons() {
    $http.get('/hero').then(function(response){
      heroList.heroes = response.data;
    });
  }

  return {
    getHeroes: getHeroes,
    heroList: heroList    
  };
}]);
