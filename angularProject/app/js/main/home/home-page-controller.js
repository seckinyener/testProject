/**
 * Created by sony on 09.04.2017.
 */
define(['angular'], function(angular){
   'use strict';
   var homePageController = function($scope){
      $scope.test = false;
   };
   homePageController.$inject = ['$scope'];
   return homePageController;
});