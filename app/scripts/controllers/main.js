'use strict';

/**
 * @ngdoc function
 * @name todoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoAngularApp
 */
angular.module('todoAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [];
    $scope.addTodo = function() {

      // push the input associated with the model onto the array.
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });
