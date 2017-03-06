var app = angular.module('kubide', ['ui.router', 'youtube-embed']);


app.config(["$locationProvider", function($locationProvider) {
  $locationProvider.html5Mode(true);
}]);

app.config(function($stateProvider) {
  var homeState = {
    name: 'home',
    url: '/',
    templateUrl: '../templates/home.html',
    controller: 'homeController',
    controllerAs: 'homeCtrl',
    data : { 
      pageTitle: 'Angular Rocks',
      pageDescription: 'Esta es la descripcion por defecto',
      pageKeyWords: 'angular, rocks, default'   
    }
  }

  var fooState = {
    name: 'foo',
    url: '/foo',
    templateUrl: '../templates/foo.html',
    data : { 
      pageTitle: 'Angular Rocks',
      pageDescription: 'Esta es la descripcion por defecto',
      pageKeyWords: 'angular, rocks, default'   
    }
  }

  var barState = {
    name: 'bar',
    url: '/bar',
    templateUrl: '../templates/bar.html',
    data : { 
      pageTitle: 'Angular Rocks',
      pageDescription: 'Esta es la descripcion por defecto',
      pageKeyWords: 'angular, rocks, default'   
    }
  }

  var rollingStonesState = {
    name: 'therollingstones',
    url: '/the-rolling-stones',
    templateUrl: '../templates/theRollingStones.html',
    controller: 'theRollingStonesController',
    controllerAs: 'theRollingStonesCtrl',
    data : { 
      pageTitle: 'The Rolling Stones',
      pageDescription: 'The Rolling Stones es una banda británica de rock originaria de Londres. La banda se fundó en abril de 19622 por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Ian Stewart y Charlie Watts.2 Brian Jones fue despedido en junio de 1969, falleciendo tres semanas después, siendo reemplazado por el guitarrista Mick Taylor, que dejaría el grupo en 1975 y sería a su vez reemplazado por Ron Wood. Con el retiro de Bill Wyman en 1993 se incluyó al bajista Darryl Jones que, aunque toca con la banda desde la grabación del álbum Voodoo Lounge en 1994, no es un miembro oficial.',
      pageKeyWords: 'rolling, rock, stones'   
    }
  }

  var theBeatlesState = {
    name: 'thebeatles',
    url: '/the-beatles',
    templateUrl: '../templates/theBeatles.html',
    controller: 'theBeatlesController',
    controllerAs: 'theBeatlesCtrl',
    data : { 
      pageTitle: 'The Beatles',
      pageDescription: 'The Beatles fue una banda de pop/rock inglesa activa durante la década de 1960, y reconocida como la más exitosa comercialmente y críticamente aclamada en la historia de la música popular.1 2 3 4 5 Formada en Liverpool, estuvo constituida desde 1962 por John Lennon (guitarra rítmica, vocalista), Paul McCartney (bajo, vocalista), George Harrison (guitarra solista, vocalista) y Ringo Starr (batería, vocalista). ',
      pageKeyWords: 'pop, rock, Londres, 1960'   
    }
  }

  var queenState = {
    name: 'queen',
    url: '/queen',
    templateUrl: '../templates/queen.html',
    controller: 'queenController',
    controllerAs: 'queenCtrl',
    data : { 
      pageTitle: 'Queen',
      pageDescription: 'Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Mercury, fallecido en 1991, y Deacon, retirado en 1997), los integrantes restantes, May y Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún es considerada activa.',
      pageKeyWords: 'Queen, rock, banda, Londres'   
    }
  }

  $stateProvider.state(homeState);
  $stateProvider.state(fooState);
  $stateProvider.state(barState);
  $stateProvider.state(rollingStonesState);
  $stateProvider.state(theBeatlesState);
  $stateProvider.state(queenState);
});


app.run([ '$rootScope', '$state', '$stateParams',
function ($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
}])