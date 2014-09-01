(function (angular) {
  'use strict';
  var app, config, configFunc, dependencies;
  // Declare app level module which depends on filters, and services
  dependencies = [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers',
    'taskServices'
  ];
  configFunc = function configFuncF($routeProvider) {
    var tasksRouteObject, view2RoutesObject;
    tasksRouteObject = {
      controller: 'TaskListCtrl',
      templateUrl: 'partials/task_list.html'
    };
    view2RoutesObject = {
      controller: 'MyCtrl2',
      templateUrl: 'partials/partial2.html'
    };
    $routeProvider.when('/tasks', tasksRouteObject);
    $routeProvider.when('/view2', view2RoutesObject);
    $routeProvider.otherwise({redirectTo: '/view1'});
  };
  app = angular.module('myApp', dependencies);
  app.config(['$routeProvider', configFunc]);
}(this.angular));
