'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');

var taskServices = angular.module('taskServices', ['ngResource']);

phonecatServices.factory('Task', ['$resource',
  function($resource){
    return $resource('task/:taskId', {}, {
      query: {method:'GET', params:{taskId:'tasks'}, isArray:true}
    });
  }]);
