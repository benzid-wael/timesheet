'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('TaskListCtrl', ['$scope', 'Task', function($scope, Task) {
      $scope.tasks = Task.query();
  }])
  .controller('TaskDetailCtrl', ['$scope', '$routeParams', 'Task', function($scope, $routeParams, Task) {
      $scope.task = Task.get({taskId: $routeParams.taskId}, function(task) {
          // TODO get Timesheet data
      });
  }]);
