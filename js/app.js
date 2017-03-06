var app = angular.module('kubide', ['ui.router']);

app.config(function($stateProvider) {
  var homeState = {
    name: 'home',
    url: '/',
    //template: '<h3>Home</h3>'
    templateUrl: '../templates/home.html'
  }

  var fooState = {
    name: 'foo',
    url: '/foo',
    //template: '<h3>Foo</h3>'
    templateUrl: '../templates/foo.html'
  }

  var barState = {
    name: 'bar',
    url: '/bar',
    templateUrl: '../templates/bar.html'
  }

  var rollingStonesState = {
    name: 'therollingstones',
    url: '/the-rolling-stones',
    //template: '<h3>The rolling stones</h3>'
    templateUrl: '../templates/theRollingStones.html',
    controller: 'theRollingStonesController',
    controllerAs: 'theRollingStonesCtrl'
  }

  var theBeatlesState = {
    name: 'thebeatles',
    url: '/the-beatles',
    //template: '<h3>The Beatles</h3>'
    templateUrl: '../templates/theBeatles.html',
    controller: 'theBeatlesController',
    controllerAs: 'theBeatlesCtrl'
  }

  var queenState = {
    name: 'queen',
    url: '/queen',
    //template: '<h3>Queen</h3>'
    templateUrl: '../templates/queen.html',
    controller: 'queenController',
    controllerAs: 'queenCtrl'
  }

  $stateProvider.state(homeState);
  $stateProvider.state(fooState);
  $stateProvider.state(barState);
  $stateProvider.state(rollingStonesState);
  $stateProvider.state(theBeatlesState);
  $stateProvider.state(queenState);
});